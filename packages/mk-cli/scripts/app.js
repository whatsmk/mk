'use strict';

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const spawn = require('react-dev-utils/crossSpawn');


let projectName = process.argv[2];

if (typeof projectName === 'undefined') {
  console.error('请输入appName:');
  console.log();
  console.log('示例:');
  console.log(`  mk app ${chalk.green('hello-world')}`);
  console.log();
  process.exit(1);
}
console.log(chalk.green(`开始创建app...`));

const root = path.resolve(projectName);
const appName = path.basename(root);

try {
  createDir(root, appName)
  createPackageJson(root, appName)
  createMKJson(root, appName)
  //install()
  init(appName, root)
}
catch (reason) {
  exceptionHandler(reason, root)
}

function createDir(root, name) {
  console.log(`  ${chalk.bold('[1/4]')} 创建目录:${root}...`)
  fs.ensureDirSync(name);
  //更换工作目录
  process.chdir(root);
}


function createPackageJson(root, name) {
  console.log(`  ${chalk.bold('[2/4]')} 创建package.json文件...`)
  const packageJson = {
    isMKApp: true,
    name: name,
    description: name,
    version: '1.0.0',
    license: 'MIT',
    author: '',
    repository: {
      "type": "git",
      "url": `https://github.com/whatsmk/${name}.git`
    },
    bugs: {
      url: `https://github.com/whatsmk/${name}/issues`
    },
    homepage: `https://github.com/whatsmk/${name}#readme`,
    scripts: {
      'start': 'mk start',
      'build': 'mk build',
      'pkg': 'mk pkg'
    },
    dependencies: {
    }
  };

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

function createMKJson(root, name) {
  console.log(`  ${chalk.bold('[3/4]')} 创建mk.json文件...`)
  const mkJson = {
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

/*
function install() {
  console.log(`  ${chalk.bold('[4/5]')} 执行安装依赖...`)
  spawn.sync('node', [require.resolve('./install.js')], { stdio: 'inherit' });
}
*/

function init(name, root) {
  console.log(`  ${chalk.bold('[4/4]')} 初始化应用...`)
  const paths = require('../config/paths');
  const initScriptPath = path.resolve(
    __dirname,
    '..',
    'scripts',
    'init.js'
  );
  const originalDirectory = process.cwd();
  const init = require(initScriptPath);
  console.log(root)
  init(root, name, originalDirectory)
}


function exceptionHandler(reason, root) {
  console.log();
  console.log('安装退出.');
  if (reason.command) {
    console.log(`  ${chalk.cyan(reason.command)} 失败.`);
  } else {
    console.log(chalk.red('未知异常，请提交错误报告:'));
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
        console.log(`删除生成的文件... ${chalk.cyan(file)}`);
        fs.removeSync(path.join(root, file));
      }
    });
  });
  const remainingFiles = fs.readdirSync(path.join(root));
  if (!remainingFiles.length) {
    console.log(
      `删除应用 ${chalk.cyan(`${appName} /`)}, 目录: ${chalk.cyan(
        path.resolve(root, '..')
      )}`
    );
    process.chdir(path.resolve(root, '..'));
    fs.removeSync(path.join(root));
  }
  console.log('Done.');
  process.exit(1);
}
