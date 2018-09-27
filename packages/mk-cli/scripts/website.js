'use strict';

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
let projectName = process.argv[2];

if (typeof projectName === 'undefined') {
  console.error('Please enter the website name:');
  console.log();
  console.log('example:');
  console.log(`  mk website ${chalk.green('hello-world')}`);
  console.log();
  process.exit(1);
}

console.log(chalk.green(`Start creating a website...`));
const root = path.resolve(projectName);
const websiteName = path.basename(root);

try {
  createDir(root, websiteName)
  createPackageJson(root, websiteName)
  createMKJson(root, websiteName)
  install()
  init(websiteName, root)
}
catch (reason) {
  exceptionHandler(reason, root)
}

function createDir(root, name) {
  console.log(`  ${chalk.bold('[1/5]')} Create a directory:${root}...`)
  fs.ensureDirSync(name);
  process.chdir(root);
}

function createPackageJson(root, websiteName) {
  console.log(`  ${chalk.bold('[2/5]')} Create package.json file...`)
  const packageJson = {
    isMKWebsite: true,
    name: websiteName,
    description: websiteName,
    version: '1.0.0',
    license: 'MIT',
    author: '',
    keywords: ['mk', 'monkey king', 'react', 'redux', 'antd'],
    repository: {
      "type": "git",
      "url": "git+https://github.com/ziaochina/mk-command.git"
    },
    scripts: {
      'start': 'mk website-start',
      'pkg': 'mk website-pkg'
    },
    dependencies: {
      "mk-command": '*'
    }
  };

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

function createMKJson(root, name) {
  console.log(`  ${chalk.bold('[3/5]')} Create mk.json file...`)
  const mkJson = {
    rootApp: 'welcome',
    server: {
      "proxy": null,
      "port": 8000
    },
    dependencies: {}
  };

  fs.writeFileSync(
    path.join(root, 'mk.json'),
    JSON.stringify(mkJson, null, 2)
  );
}

function install() {
  console.log(`  ${chalk.bold('[4/5]')} Installation dependence...`)
  const spawn = require('react-dev-utils/crossSpawn');
  spawn.sync('node', [require.resolve('./install.js')], { stdio: 'inherit' });
}

function init(name, root) {
  console.log(`  ${chalk.bold('[5/5]')} Initialize the website...`)
  const paths = require('../config/paths');
  const initScriptPath = path.resolve(
    process.cwd(),
    'node_modules',
    'mk-command',
    'scripts',
    'website-init.js'
  );
  const originalDirectory = process.cwd();
  const init = require(initScriptPath);
  init(root, name, originalDirectory)
}

function exceptionHandler(reason, root) {
  console.log();
  console.log('Installation exit.');
  if (reason.command) {
    console.log(`  ${chalk.cyan(reason.command)} failure.`);
  } else {
    console.log(chalk.red('Unknown exception, please submit an error report:'));
    console.log(reason);
  }
  console.log();

  const knownGeneratedFiles = [
    'package.json',
    'npm-debug.log',
    'yarn-error.log',
    'yarn-debug.log',
    'node_modules',
  ];
  const currentFiles = fs.readdirSync(path.join(root));
  currentFiles.forEach(file => {
    knownGeneratedFiles.forEach(fileToMatch => {
      if (
        (fileToMatch.match(/.log/g) && file.indexOf(fileToMatch) === 0) ||
        file === fileToMatch
      ) {
        console.log(`Delete generated file... ${chalk.cyan(file)}`);
        fs.removeSync(path.join(root, file));
      }
    });
  });
  const remainingFiles = fs.readdirSync(path.join(root));
  if (!remainingFiles.length) {
    console.log(
      `Delete app ${chalk.cyan(`${appName} /`)}, directory : ${chalk.cyan(
        path.resolve(root, '..')
      )}`
    );
    process.chdir(path.resolve(root, '..'));
    fs.removeSync(path.join(root));
  }
  console.log('Done.');
  process.exit(1);
}