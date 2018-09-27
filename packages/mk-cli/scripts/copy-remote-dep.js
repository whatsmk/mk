'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

//The promise does not handle the exception of the reject
process.on('unhandledRejection', err => {
    throw err;
});

require('../config/env');

const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const paths = require('../config/paths');

const isRelease = process.argv[2] === 'release'
const targetPath = process.argv[3] || paths.appPublic
const mkJson = require(path.join(paths.appSrc, 'mk.json'));

cp(mkJson)

function cp(json) {
    Object.keys(json.dependencies).forEach(k => {
        if (json.dependencies[k].from == 'MK') {
            let buildPath = path.resolve(paths.appSrc, 'node_modules', k, 'build', isRelease ? 'prod' : 'dev')
            if (fs.existsSync(buildPath)) {
                fs.copySync(buildPath, targetPath);
            }
            let subJson = JSON.parse(fs.readFileSync(path.join(paths.appSrc, 'node_modules', k, 'mk.json'), 'utf-8'))
            cp(subJson)
        }
    })
}

