'use strict';

const paths = require('../config/paths');
const utils = require('./utils');
const consts = require('../config/consts');

utils.yarn(['install', '--registry', 'https://registry.npm.taobao.org/', '--exact' ], paths.appSrc)
//utils.yarn(['install', '--registry', consts.mkServerUrl, '--exact' ], paths.appSrc)