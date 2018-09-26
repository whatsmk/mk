'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

//promise未处理reject的异常
process.on('unhandledRejection', err => {
    throw err;
});

require('../config/env');

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.pkg.dev');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');
const template = require('art-template');
const spawn = require('cross-spawn');

const appDirectory = fs.realpathSync(process.cwd());

// 检测必须的文件，不存在自动退出
if (!checkRequiredFiles([paths.appIndexJs])) {
    process.exit(1);
}
console.log(chalk.green(`开始打包开发环境网站...`));

try {
    main()
}
catch (err) {
    console.log(chalk.red('打包失败.\n'));
    //输出编译异常
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
    createHtmlFile(paths.appPackageDev, paths.appPath)

    console.log(chalk.green(`打包成功,输出目录:${paths.appPackageDev}\n`));
    return Promise.resolve()
}


function emptyDir() {
    console.log(`  ${chalk.bold('[1/7]')} 清空目录:${paths.appPackageDev}`)
    //清空目录中文件
    fs.emptyDirSync(paths.appPackageDev);
}


function build() {
    console.log(`  ${chalk.bold('[2/7]')} 编译app...`)
    let compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                return reject(err);
            }
            const messages = formatWebpackMessages(stats.toJson({}, true));
            //存在编译异常
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
    console.log(`  ${chalk.bold('[3/7]')} 复制sdk...`)
    let libPath = path.resolve(__dirname, '..', 'node_modules', '@whatsmk', 'sdk', 'dist', 'debug')
    if (!fs.existsSync(paths.appPackageDev)) {
        fs.mkdirSync(paths.appPackagedev);
    }
    fs.copySync(libPath, paths.appPackageDev);
}

function scanAppDep(appPath) {
    console.log(`  ${chalk.bold('[4/7]')} 扫描依赖app...`)
    spawn.sync('node',
        [path.resolve(__dirname, '..', 'scripts', 'scan.js')],
        { stdio: 'inherit' }
    );
}

function copyLocalDep(appPath) {
    console.log(`  ${chalk.bold('[5/7]')} 复制本地依赖app...`)
    spawn.sync('node',
        [path.resolve(__dirname, '..', 'scripts', 'copy-local-dep.js'),'',paths.appPackageDev],
        { stdio: 'inherit' }
    );
}

function copyRemoteDep(appPath) {
    console.log(`  ${chalk.bold('[6/7]')} 复制远程依赖app...`)
    spawn.sync('node',
        [path.resolve(__dirname, '..', 'scripts', 'copy-remote-dep.js'),'',paths.appPackageDev],
        { stdio: 'inherit' }
    );
}

function copyHtmlFile(publicPath, appPath) {
    console.log(`  ${chalk.bold('[7/7]')} 复制html文件...`)
    fs.copyFileSync(path.resolve(appPath, 'index.html'), path.join(publicPath, 'index.html'));
}

function createHtmlFile(publicPath, appPath) {
    console.log(`  ${chalk.bold('[7/7]')} 创建html文件...`)
    const htmlTplPath = path.resolve(appPath, 'index.html');
    let html = fs.readFileSync(htmlTplPath, 'utf-8');
    template.defaults.imports.stringify = JSON.stringify;
    let render = template.compile(html, {
        escape: false,
        debug: true
    });
    let packageJson = JSON.parse(fs.readFileSync(path.join(appPath, 'package.json'), 'utf-8'))
    let mkJson = JSON.parse(fs.readFileSync(path.join(appPath, 'mk.json'), 'utf-8'))
    html = render({ ...packageJson, ...mkJson, dev: true });
    fs.writeFileSync(path.resolve(publicPath, 'index.html'), html);
}

