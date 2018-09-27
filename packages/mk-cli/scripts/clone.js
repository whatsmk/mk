'use strict';

const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');
const path = require('path');
const paths = require('../config/paths')
const consts = require('../config/consts')
const execSync = require('child_process').execSync;
const spawn = require('cross-spawn');
const semver = require('semver');
const dns = require('dns');
const tmp = require('tmp');
const unpack = require('tar-pack').unpack;
const url = require('url');
const hyperquest = require('hyperquest');
const envinfo = require('envinfo');
const appName = process.argv[2];
const newPath = process.argv[3];
const newName = newPath.split('/').pop();

if (typeof appName === 'undefined' || typeof newName === 'undefined') {
    console.error('Please enter the name to be copied');
    console.log();
    console.log('example:');
    console.log(`  mk clone ${chalk.green('mk-app-root')} ${chalk.green('my-root')} `);
    console.log();
    process.exit(1);
}

const targetPath = path.join(paths.appSrc, 'apps', newPath)

if (fs.existsSync(targetPath)) {
    console.log(`已经存在应用${chalk.green(newName)},目录:${chalk.green(path.resolve(targetPath))}`);
    console.log('请手动删除后，重新执行clone操作')
    process.exit(1);
}

console.log(chalk.green(`begin execution clone...`));
console.log()

checkIfOnline()
    .then(isOnline => add(paths.appSrc, isOnline))
    .then(() => cp(paths.appSrc))
    .then(() => remove(paths.appSrc, true))
    .then(() => init(paths.appSrc))
    .then(() => {
        console.log('')
        console.log(`${chalk.green('clone success')}`)
        console.log('')
        console.log(`请在目录${chalk.green(path.resolve(targetPath))}中修改克隆后的代码`)
        console.log('')
    })

function add(root, isOnline) {
    console.log(`  ${chalk.bold('[1/4]')} Installation package...`)
    return new Promise((resolve, reject) => {
        let command;
        let args;

        command = 'yarnpkg';
        args = ['add', appName, '--registry', consts.mkServerUrl];
        if (!isOnline) {
            args.push('--offline');
        }
        args.push('--cwd');
        args.push(root);

        if (!isOnline) {
            console.log(chalk.yellow('Please connect to the network.'));
            console.log();
            resolve(false);
        }
        spawn.sync(command, args, { stdio: 'inherit' });
        resolve(true);
    });
}

function cp(root) {
    console.log(`  ${chalk.bold('[2/4]')} copy installation package...`)
    let srcPath = path.join(root, 'node_modules', appName)
    if (fs.existsSync(srcPath)) {
        fs.copySync(srcPath, targetPath);
    }
}

function remove(root) {
    console.log(`  ${chalk.bold('[3/4]')} remove installation package...`)
    return new Promise((resolve, reject) => {
        let command;
        let args;

        command = 'yarnpkg';
        args = ['remove', appName, '--registry', consts.mkServerUrl];
        args.push('--cwd');
        args.push(root);
        spawn.sync(command, args, { stdio: 'inherit' });
        resolve(true);
    });
}

function init(root) {
    console.log(`  ${chalk.bold('[4/4]')} application initialization...`)
    return new Promise((resolve, reject) => {
        let pkg = JSON.parse(fs.readFileSync(path.join(targetPath, 'package.json'), 'utf-8'))
        pkg.name = newName
        pkg.description = newName
        pkg.version = '1.0.0'
        fs.writeFileSync(path.join(targetPath, 'package.json'), JSON.stringify(pkg, null, 2));
        resolve(true);
    });
}

function getProxy() {
    if (process.env.https_proxy) {
        return process.env.https_proxy;
    } else {
        try {
            let httpsProxy = execSync('npm config get https-proxy')
                .toString()
                .trim();
            return httpsProxy !== 'null' ? httpsProxy : undefined;
        } catch (e) {
            return;
        }
    }
}

function checkIfOnline(useYarn) {
    return new Promise(resolve => {
        dns.lookup('registry.yarnpkg.com', err => {
            let proxy;
            if (err != null && (proxy = getProxy())) {
                dns.lookup(url.parse(proxy).hostname, proxyErr => {
                    resolve(proxyErr == null);
                });
            } else {
                resolve(err == null);
            }
        });
    });
}
