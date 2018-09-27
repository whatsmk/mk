'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');

const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.dev');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printBuildError = require('react-dev-utils/printBuildError');

if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1);
}

console.log(chalk.green(`开始编译开发环境输出资源...`));

try {
  main()
}
catch (err) {
  console.log(chalk.red('Compile failed.\n'));
  //输出编译异常
  printBuildError(err);
  process.exit(1);
}


async function main() {
  emptyDir()
  var ret = await build()
  if (ret.warnings) {
    //存在警告
    if (ret.warnings.length) {
      console.log(chalk.yellow('Compile warning.\n'));
      console.log(ret.warnings.join('\n\n'));
    } else {
      console.log(chalk.green(`Compiled successfully,Output directory:${paths.appDevBuild}`));
    }
  }
}


function emptyDir() {
  console.log(`  ${chalk.bold('[1/2]')} Empty directory:${paths.appDevBuild}`)
  fs.emptyDirSync(paths.appDevBuild);
}

function build() {
  console.log(`  ${chalk.bold('[2/2]')} Compile app...`)

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
        warnings: messages.warnings
      });
    });
  });
}

