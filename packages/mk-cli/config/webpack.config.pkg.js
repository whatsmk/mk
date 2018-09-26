'use strict';
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")


const getClientEnvironment = require('./env');
const paths = require('./paths');

const env = getClientEnvironment();
const appPackageJson = require(paths.appPackageJson);
const appDirectory = fs.realpathSync(process.cwd());
module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    entry: [
        paths.appIndexJs
    ],
    output: {
        filename: appPackageJson.name + '.min.js',
        path: path.join(appDirectory, "/build/pkg/"),
        library: "MKApp_" + appPackageJson.name.replace(/-/g, '_'),
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
        "mk-sdk": "MK",
        "mk-app-loader": {
            root: ["MK", "appLoader"],
            commonjs: "MK.appLoader",
            commonjs2: "MK.appLoader",
            amd: "MK.appLoader"
        },
        "mk-utils": {
            root: ["MK", "utils"],
            commonjs2: "MK.utils",
            amd: "MK.utils",
            commonjs: "MK.utils",
        },
        "mk-component": {
            root: ["MK", "component"],
            commonjs2: "MK.component",
            amd: "MK.component",
            commonjs: "MK.component"
        },
        "mk-meta-engine": {
            commonjs: ["MK", "metaEngine"],
            commonjs2: "MK.metaEngine",
            amd: "MK.metaEngine",
            root: "MK.metaEngine"
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            exclude: paths.appNodeModules,
            loader:  path.resolve(__dirname, '..', 'node_modules', 'babel-loader'),
            options:{
                babelrc: false,
                "presets": [
                  [path.resolve(__dirname, '..', 'node_modules', "@babel/preset-env"), {
                    "targets": {
                      "browsers": [ "ie >= 11", "chrome >= 60" ]
                    }      
                  }],
                  [path.resolve(__dirname, '..', 'node_modules',"@babel/preset-react")]
                ],
                "plugins": [
                  [path.resolve(__dirname, '..', 'node_modules', "@babel/plugin-transform-runtime"), {
                    "corejs": false,
                    "helpers": true,
                    "regenerator": true,
                    "useESModules": false,
                    "absoluteRuntime": path.resolve(__dirname)
                  }],
                  [path.resolve(__dirname, '..', 'node_modules',"@babel/plugin-proposal-class-properties")],
                  [path.resolve(__dirname, '..', 'node_modules',"@babel/plugin-proposal-decorators"),{
                    "legacy": true
                  }]
                ]
              }
        
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, path.resolve(__dirname, '..', 'node_modules','css-loader')]
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader,  path.resolve(__dirname, '..', 'node_modules','css-loader'), {
                loader:  path.resolve(__dirname, '..', 'node_modules','less-loader'), 
                options:{
                    javascriptEnabled: true
                }
              }]

        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
            use: {
                loader:  path.resolve(__dirname, '..', 'node_modules','file-loader'),
                options: {
                    name: '[name].[ext]',
                    limit: 8192
                }
            }
        }],
    },
    plugins: [
        new webpack.DefinePlugin(env.stringified),
        //大小写匹配
        new CaseSensitivePathsPlugin(),
        new MiniCssExtractPlugin({ filename: appPackageJson.name + '.min.css' })
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    }
};
