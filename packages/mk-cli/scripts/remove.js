'use strict';

const paths = require('../config/paths');
const utils = require('./utils');

let appName = process.argv[2];

if (typeof appName === 'undefined') {
    console.error('请输入appName:');
    console.log();
    console.log('示例:');
    console.log(`  mk remove ${chalk.green('login')}`);
    console.log();
    process.exit(1);
} 

utils.yarn(['remove', appName, '--registry', 'https://registry.npm.taobao.org/', '--exact' ], paths.appSrc)