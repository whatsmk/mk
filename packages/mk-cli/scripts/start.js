'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', err => {
  throw err;
});


require('../config/env');

const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const openBrowser = require('react-dev-utils/openBrowser');
const paths = require('../config/paths');

const config = require('../config/webpack.config.start');
const createDevServerConfig = require('../config/webpackDevServer.config');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const template = require('art-template');
const spawn = require('react-dev-utils/crossSpawn');

const {
  choosePort,
  createCompiler,
  prepareProxy,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

// 检测必须的文件，不存在自动退出
if (!checkRequiredFiles([paths.appIndexJs])) {
  process.exit(1);
}

try {
  main()
}
catch (err) {
  if (err && err.message) {
    console.log(err)
  }
  process.exit(1);
}


async function main() {

  createDir(paths.appPublic)
  copyCoreLib(paths.appPublic, paths.appPath)
  scanAppDep(paths.appPath)
 
  copyLocalDep(paths.appPath)
  copyRemoteDep(paths.appPath)
  copyHtmlFile(paths.appPublic, paths.appPath)
  var ret = getServerOption(paths.appPath)
  var port = await choosePort(ret.host, ret.port)
  startServer({ ...ret, port })

}


function createDir(publicPath) {
  if (!fs.existsSync(publicPath)) {
    fs.mkdirSync(publicPath);
  }
  else {
    //清空目录中文件
    fs.emptyDirSync(publicPath);
  }
}

function copyCoreLib(publicPath, appPath) {
  let coreLibPath = path.resolve(__dirname, '..', 'node_modules', '@whatsmk', 'sdk', 'dist', 'debug')
  fs.copySync(coreLibPath, publicPath);
}


function scanAppDep(appPath) {
  spawn.sync('node',
    [path.resolve(__dirname, '..', 'scripts', 'scan.js')],
    { stdio: 'inherit' }
  );
}

function copyLocalDep(appPath) {
  spawn.sync('node',
    [path.resolve(__dirname, '..', 'scripts', 'copy-local-dep.js')],
    { stdio: 'inherit' }
  );
}

function copyRemoteDep(appPath) {
  spawn.sync('node',
    [path.resolve(__dirname, '..', 'scripts', 'copy-remote-dep.js')],
    { stdio: 'inherit' }
  );
}

function copyHtmlFile(publicPath, appPath) {
  fs.copyFileSync(path.resolve(appPath, 'index.html'), path.join(publicPath,'index.html'));
}


function getServerOption(appPath) {
    const mkJson = JSON.parse(fs.readFileSync(path.join(appPath, 'mk.json'), 'utf-8'))
    const serverOption = mkJson.server
    const DEFAULT_PORT = parseInt(serverOption.port, 10) || 8000
    const HOST = serverOption.host || '0.0.0.0'
    return {
      port: DEFAULT_PORT,
      host: HOST,
      serverOption
    }
}

function startServer(option) {
  const serverOption = option.serverOption
  const port = option.port
  const host = option.host
  if (port == null) {
    // 没有端口直接返回
    return;
  }


  const protocol = serverOption.https === 'true' ? 'https' : 'http';
  const appName = require(paths.appPackageJson).name;
  const urls = prepareUrls(protocol, host, port);
  config.entry = paths.appIndexJs
  // 创建webpack编译器
  const compiler = createCompiler(webpack, config, appName, urls, true);
  // 加载代理配置
  const proxySetting = serverOption.proxy;
  const proxyConfig = prepareProxy(proxySetting, paths.appPublic);
  // 服务器配置
  const serverConfig = createDevServerConfig(
    proxyConfig,
    urls.lanUrlForConfig
  );

  const devServer = new WebpackDevServer(compiler, serverConfig);
  // 启动服务器
  devServer.listen(port, host, err => {
    if (err) {
      return console.log(err);
    }

    clearConsole();
    console.log(chalk.cyan('启动服务器...\n'));
    //openBrowser(urls.localUrlForBrowser);
  });

  ['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      devServer.close();
      process.exit();
    });
  });

}