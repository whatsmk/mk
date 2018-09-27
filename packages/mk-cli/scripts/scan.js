'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const paths = require('../config/paths');

const packageJson = require(paths.appPackageJson);
const mkJson = require(path.join(paths.appSrc, 'mk.json'));
var appsDirectory = process.argv[2] ? path.resolve(process.argv[2]) : path.join(paths.appPath, 'apps');

var appDependencies = {}

scanLocalApps(appsDirectory)
scanRemoteApps(packageJson)

mkJson.dependencies = {
  ...appDependencies,
  ...mkJson.dependencies
}
fs.writeFileSync(
  path.join(paths.appSrc, 'mk.json'),
  JSON.stringify(mkJson, null, 2)
);

function scanLocalApps(dir) {
  if (!fs.existsSync(dir))
    return

  var files = fs.readdirSync(dir, () => { })
  files.forEach(fileName => {
    var stats = fs.statSync(path.join(dir, fileName))
    if (stats.isFile()) {
      if (fileName === 'package.json') {
        let subAppJson = require(path.join(dir, 'package.json'))
        if (subAppJson.isMKApp) {
          let subDir = path.relative(paths.appPath, dir)
          appDependencies[subAppJson.name] = {
            from: 'local',
            path: path.relative(paths.appPath, dir),
            options: {}
          }
        }
      }
    } else if (stats.isDirectory() && fileName != 'node_modules') {
      scanLocalApps(path.join(dir, fileName))
    }
  })
}

function scanRemoteApps(json) {
  Object.keys(json.dependencies).forEach(k => {
    let pkg = JSON.parse(fs.readFileSync(path.join(paths.appSrc, 'node_modules', k, 'package.json'), 'utf-8'))
    if (pkg.isMKApp) {
      appDependencies[pkg.name] = {
        from: 'MK',
        options: {}
      }
      let subJson = JSON.parse(fs.readFileSync(path.join(paths.appSrc, 'node_modules', k, 'mk.json'), 'utf-8'))
      scanRemoteApps(subJson)
    }
  })
}