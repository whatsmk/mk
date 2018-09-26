'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const utils = require('./utils');
const paths = require('../config/paths');

module.exports = function (
  appPath,
  appName,
  originalDirectory
) {
  const appPackage = require(path.join(appPath, 'package.json'));
  const useYarn = true;

  const templatePath = path.join(__dirname, '..', 'template', 'app');
  if (fs.existsSync(templatePath)) {
    fs.copySync(templatePath, appPath);

    var styleContent = fs.readFileSync(path.join(appPath, 'style.less'), 'utf-8');
    styleContent = styleContent.replace(/<appName>/g, utils.fixName(appPackage.name));
    fs.writeFileSync(path.join(appPath, 'style.less'), styleContent);


    var htmlContent = fs.readFileSync(path.join(appPath, 'index.html'), 'utf-8');
    htmlContent = htmlContent.replace(/<appName>/g, utils.fixName(appPackage.name));
    fs.writeFileSync(path.join(appPath, 'index.html'), htmlContent);

    var readmeContent = fs.readFileSync(path.join(appPath, 'README.md'), 'utf-8');
    readmeContent = readmeContent.replace(/<appName>/g, utils.fixName(appPackage.name));
    fs.writeFileSync(path.join(appPath, 'README.md'), readmeContent);

  } else {
    console.error(
      `找不到应用模板: ${chalk.green(templatePath)}`
    );
    return;
  }

  fs.move(
    path.join(appPath, 'gitignore'),
    path.join(appPath, '.gitignore'),
    [],
    err => {
      if (err) {
        //已经存在替换内容
        if (err.code === 'EEXIST') {
          const data = fs.readFileSync(path.join(appPath, 'gitignore'));
          fs.appendFileSync(path.join(appPath, '.gitignore'), data);
          fs.unlinkSync(path.join(appPath, 'gitignore'));
        } else {
          throw err;
        }
      }
    }
  );

  fs.move(
    path.join(appPath, 'npmignore'),
    path.join(appPath, '.npmignore'),
    [],
    err => {
      if (err) {
        //已经存在替换内容
        if (err.code === 'EEXIST') {
          const data = fs.readFileSync(path.join(appPath, 'npmignore'));
          fs.appendFileSync(path.join(appPath, '.npmignore'), data);
          fs.unlinkSync(path.join(appPath, 'npmignore'));
        } else {
          throw err;
        }
      }
    }
  );

  let cdpath;
  if (originalDirectory && path.join(originalDirectory, appName) === appPath) {
    cdpath = appName;
  } else {
    cdpath = appPath;
  }

  const displayedCommand = useYarn ? 'yarn' : 'npm';

  console.log();
  console.log(`创建应用 ${appName} 成功，目录：${appPath}`);
  console.log('你可以在该目录下运行下面命令:');
  console.log();
  console.log(chalk.cyan(`  ${displayedCommand} start`));
  console.log('    启动开发服务器.');
  console.log();
  console.log(
    chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}build`)
  );
  console.log('    编译应用.');
  console.log();
  console.log(
    chalk.cyan(`  ${displayedCommand} ${useYarn ? '' : 'run '}pkg`)
  );
  console.log('    打包应用.');
  console.log();
  console.log('建议从下面的命令开始:');
  console.log();
  console.log(chalk.cyan('  cd'), appName);
  console.log(`  ${chalk.cyan(`${displayedCommand} start`)}`);
  console.log();
  console.log('感谢您使用mk!');
};