'use strict';

const paths = require('../config/paths');
const utils = require('./utils');
const consts = require('../config/consts')

utils.yarn(['add', `adduser`, '--registry', consts.mkServerUrl, '--exact'], paths.appSrc)
