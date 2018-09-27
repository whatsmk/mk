'use strict';
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const getClientEnvironment = require('./env');
const paths = require('./paths');

const env = getClientEnvironment();
const appPackageJson = require(paths.appPackageJson);
const appDirectory = fs.realpathSync(process.cwd());
const utils = require('../scripts/utils')
const appName = utils.fixName(appPackageJson.name)

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: []
    },
    entry: [
        paths.appIndexJs
    ],
    output: {
        filename: appName + '.js',
        path: path.join(appDirectory, "/build/pkg-dev/"),
        library: "MKApp-" + appName,
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".js"]
    },
    externals: {
        "react": {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        "react-dom": {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        "immutable": {
            root: 'Immutable',
            commonjs2: 'immutable',
            commonjs: 'immutable',
            amd: 'immutable'
        },
        "moment": "moment",
        "mk": "MK"
    },
    module: {
        rules: [{
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            exclude: paths.appNodeModules,
            loader: path.resolve(__dirname, '..', 'node_modules', 'babel-loader'),
            options: {
                babelrc: false,
                "presets": [
                    [path.resolve(__dirname, '..', 'node_modules', "@babel/preset-env"), {
                        "targets": {
                            "browsers": ["ie >= 11", "chrome >= 60"]
                        }
                    }],
                    [path.resolve(__dirname, '..', 'node_modules', "@babel/preset-react")]
                ],
                "plugins": [
                    [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-transform-runtime"), {
                        "corejs": false,
                        "helpers": true,
                        "regenerator": true,
                        "useESModules": false,
                        "absoluteRuntime": path.resolve(__dirname)
                    }],
                    [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-proposal-class-properties")],
                    [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-proposal-decorators"), {
                        "legacy": true
                    }]
                ]
            }

        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, path.resolve(__dirname, '..', 'node_modules', 'css-loader')]
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, path.resolve(__dirname, '..', 'node_modules', 'css-loader'), {
                loader: path.resolve(__dirname, '..', 'node_modules', 'less-loader'),
                options: {
                    javascriptEnabled: true
                }
            }]

        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            use: {
                loader: path.resolve(__dirname, '..', 'node_modules', 'file-loader'),
                options: {
                    name: '[name].[ext]',
                    limit: 8192
                }
            }
        }],
    },
    plugins: [
        new webpack.DefinePlugin(env.stringified),
        //Case matching
        new CaseSensitivePathsPlugin(),
        new MiniCssExtractPlugin({ filename: appName + '.css' })
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    }
};
