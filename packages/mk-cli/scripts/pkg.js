'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

//The promise does not handle the exception of the reject
process.on('unhandledRejection', err => {
    throw err;
});

require('../config/env');

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.pkg');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printBuildError = require('react-dev-utils/printBuildError');
const template = require('art-template');
const spawn = require('cross-spawn');

const appDirectory = fs.realpathSync(process.cwd());

if (!checkRequiredFiles([paths.appIndexJs])) {
    process.exit(1);
}
console.log(chalk.green(`Start packaging production environment...`));

try {
    main()
}
catch (err) {
    console.log(chalk.red('Package failure.\n'));
    //Output compilation exception
    printBuildError(err);
    process.exit(1);
}


async function main() {
    emptyDir()
    await build()
    copyCoreLib(paths.appPath)
    scanAppDep(paths.appPath)
    copyLocalDep(paths.appPath)
    copyRemoteDep(paths.appPath)
    createHtmlFile(paths.appPackage, paths.appPath)

    console.log(chalk.green(`Packaged successfully,Output directory:${paths.appPackage}\n`));
    return Promise.resolve()
}

function emptyDir() {
    console.log(`  ${chalk.bold('[1/7]')} Empty directory:${paths.appPackage}`)
    fs.emptyDirSync(paths.appPackage);
}


function build() {
    console.log(`  ${chalk.bold('[2/7]')} Compile app...`)
    let compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                return reject(err);
            }
            const messages = formatWebpackMessages(stats.toJson({}, true));
            if (messages.errors.length) {
                if (messages.errors.length > 1) {
                    messages.errors.length = 1;
                }
                return reject(new Error(messages.errors.join('\n\n')));
            }
            return resolve({
                warnings: messages.warnings,
            });
        });
    });
}

function copyCoreLib() {
    console.log(`  ${chalk.bold('[3/7]')} Copy sdk...`)
    let libPath = path.resolve(__dirname, '..', 'node_modules', '@whatsmk', 'sdk', 'dist', 'release')
    if (!fs.existsSync(paths.appPackage)) {
        fs.mkdirSync(paths.appPackage);
    }
    fs.copySync(libPath, paths.appPackage);
}

function scanAppDep(appPath) {
    console.log(`  ${chalk.bold('[4/7]')} Scan dependent app...`)
    spawn.sync('node',
        [path.resolve(__dirname, '..', 'scripts', 'scan.js')],
        { stdio: 'inherit' }
    );
}

function copyLocalDep(appPath) {
    console.log(`  ${chalk.bold('[5/7]')} Copy local dependent app...`)
    spawn.sync('node',
        [path.resolve(__dirname, '..', 'scripts', 'copy-local-dep.js'), '', paths.appPackage],
        { stdio: 'inherit' }
    );
}

function copyRemoteDep(appPath) {
    console.log(`  ${chalk.bold('[6/7]')} Copy remote dependency app...`)
    spawn.sync('node',
        [path.resolve(__dirname, '..', 'scripts', 'copy-remote-dep.js'), '', paths.appPackage],
        { stdio: 'inherit' }
    );
}

function copyHtmlFile(publicPath, appPath) {
    console.log(`  ${chalk.bold('[7/7]')} Copy html file...`)
    fs.copyFileSync(path.resolve(appPath, 'index.html'), path.join(publicPath, 'index.html'));
}
function createHtmlFile(publicPath, appPath) {
    console.log(`  ${chalk.bold('[7/7]')} Create an html file...`)

    const htmlTplPath = path.resolve(appPath, 'index.html');
    let html = fs.readFileSync(htmlTplPath, 'utf-8');
    html = html.replace('require.js', 'require.min.js').replace('mk.js', 'mk.min.js')
    fs.writeFileSync(path.resolve(publicPath, 'index.html'), html);
}

