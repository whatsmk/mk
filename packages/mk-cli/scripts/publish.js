'use strict';

const paths = require('../config/paths');
const utils = require('./utils');

utils.yarn(['upgrade', '--registry', consts.mkServerUrl, '--exact' ], paths.appSrc)


