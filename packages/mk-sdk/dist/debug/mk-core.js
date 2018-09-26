(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-redux"), require("immutable"), require("redux"), require("prop-types"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-redux", "immutable", "redux", "prop-types", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["MK"] = factory(require("react"), require("react-dom"), require("react-redux"), require("immutable"), require("redux"), require("prop-types"), require("lodash"));
	else
		root["MK"] = factory(root["React"], root["ReactDOM"], root["ReactRedux"], root["Immutable"], root["Redux"], root["PropTypes"], root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_immutable__, __WEBPACK_EXTERNAL_MODULE_redux__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/action.js":
/*!********************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadApp = loadApp;
exports.clearAppState = clearAppState;

function loadApp(fullName, prevFullName) {
  return {
    type: '@@loadApp',
    payload: {
      fullName: fullName,
      prevFullName: prevFullName
    }
  };
}

function clearAppState(fullName) {
  return {
    type: '@@clearAppState',
    payload: {
      fullName: fullName
    }
  };
}

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/appFactory.js":
/*!************************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/appFactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@whatsmk/app-loader/lib/config.js"));

var appFactory = function appFactory() {
  var _this = this;

  (0, _classCallCheck2.default)(this, appFactory);
  (0, _defineProperty2.default)(this, "registerApp", function (name, app) {
    if (_this.apps[name]) {
      console.log("\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u8FD9\u4E2Aapp\uFF0Cname: ".concat(name, ",\u5FFD\u7565"));
      return;
    } //throw `已经注册过这个app，不能重复注册. name: ${name}`


    _this.apps[name] = app;
  });
  (0, _defineProperty2.default)(this, "registerApps", function (apps) {
    _this.apps = (0, _objectSpread2.default)({}, _this.apps, apps);
  });
  (0, _defineProperty2.default)(this, "existsApp", function (name) {
    name = name.replace(/(\.js)|(\.min\.js)/, '');
    return !!_this.apps[name];
  });
  (0, _defineProperty2.default)(this, "getApp", function (name) {
    name = name.replace(/(\.js)|(\.min\.js)/, '');
    var app = _this.apps[name];
    if (app) return app;

    if (!app) {
      throw "\u6CA1\u6709\u6CE8\u518C\u8FD9\u4E2Aapp. name: ".concat(name);
    }

    return app;
  });
  (0, _defineProperty2.default)(this, "getApps", function () {
    return _this.apps;
  });
  this.apps = {};
  window.__mk_apps__ = this.apps;
};

var appFactoryInstance = new appFactory();
var _default = appFactoryInstance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/appLoader.js":
/*!***********************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/appLoader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

var actions = _interopRequireWildcard(__webpack_require__(/*! ./action */ "./node_modules/@whatsmk/app-loader/lib/action.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var AppLoader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(AppLoader, _React$Component);

  function AppLoader(props, context) {
    (0, _classCallCheck2.default)(this, AppLoader);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AppLoader).call(this, props, context));
  }

  (0, _createClass2.default)(AppLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fullName = _this$props.name,
          payload = _this$props.payload;

      if (!payload.get('@@require')) {
        this.props.loadApp(fullName);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var fullName = nextProps.name,
          payload = nextProps.payload;

      if (!payload.get('@@require')) {
        this.props.loadApp(fullName, this.props.name);
      } else if (this.props.name != nextProps.name) {
        this.props.clearAppState(this.props.name);
      }
    } //cxb效率优化点，由主动更新变更为状态比较更新?

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
          fullName = _this$props2.name,
          payload = _this$props2.payload;
      this.props.clearAppState(fullName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          fullName = _this$props3.name,
          payload = _this$props3.payload,
          other = (0, _objectWithoutProperties2.default)(_this$props3, ["name", "payload"]),
          ReduxConnector = payload.getIn(['@@require', 'container']);

      if (ReduxConnector) {
        return _react.default.createElement(ReduxConnector, (0, _extends2.default)({
          store: this.context.store
        }, other, {
          payload: payload,
          key: fullName
        }));
      } else {
        return null;
      }
    }
  }]);
  return AppLoader;
}(_react.default.Component);

AppLoader.contextTypes = {
  store: _propTypes.default.object
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  var payload = state.get(props.name);
  return {
    payload: payload || (0, _immutable.Map)()
  };
}, function (dispatch) {
  return (0, _objectSpread2.default)({}, (0, _redux.bindActionCreators)(actions, dispatch));
}, null, {
  withRef: true,
  pure: true
})(AppLoader);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/appMiddleware.js":
/*!***************************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/appMiddleware.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _parseName = _interopRequireDefault(__webpack_require__(/*! ./parseName */ "./node_modules/@whatsmk/app-loader/lib/parseName.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@whatsmk/app-loader/lib/appFactory.js"));

var _loadApp = _interopRequireDefault(__webpack_require__(/*! ./loadApp */ "./node_modules/@whatsmk/app-loader/lib/loadApp.js"));

var _default = function _default(actionInjections, reducerInjections) {
  return function (store) {
    return function (next) {
      return (
        /*#__PURE__*/
        function () {
          var _ref = (0, _asyncToGenerator2.default)(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee(action) {
            var getState, dispatch, _action, fullName, name, query, params, actionCreator, args, reducer, reduce, getStateByApp, injections, realAction, _fullName, prevFullName, parsedName, appInfo;

            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    getState = store.getState, dispatch = store.dispatch;

                    if (!(typeof action === 'function')) {
                      _context.next = 10;
                      break;
                    }

                    _action = action(), fullName = _action.fullName, name = _action.name, query = _action.query, params = _action.params, actionCreator = _action.actionCreator, args = _action.args, reducer = _action.reducer;

                    reduce = function reduce(type) {
                      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                      }

                      dispatch({
                        type: '@@reduce',
                        payload: {
                          fullName: fullName,
                          name: name,
                          query: query,
                          type: type,
                          reducer: reducer,
                          payload: args,
                          reducerInjections: reducerInjections
                        }
                      });
                    };

                    getStateByApp = function getStateByApp() {
                      return getState().get(fullName);
                    };

                    injections = (0, _objectSpread2.default)({
                      currentApp: {
                        fullName: fullName,
                        name: name,
                        query: query,
                        params: params
                      },
                      store: store,
                      reduce: reduce,
                      getState: getStateByApp
                    }, actionInjections);
                    realAction = actionCreator.apply(void 0, (0, _toConsumableArray2.default)(args).concat([injections]));

                    if (typeof realAction === 'function') {
                      realAction(injections);
                    }

                    _context.next = 31;
                    break;

                  case 10:
                    if (!(action.type && action.type == '@@loadApp')) {
                      _context.next = 30;
                      break;
                    }

                    _context.prev = 11;
                    _fullName = action.payload.fullName, prevFullName = action.payload.prevFullName, parsedName = (0, _parseName.default)(_fullName);
                    appInfo = _appFactory.default.getApp(parsedName.name);

                    if (appInfo) {
                      _context.next = 17;
                      break;
                    }

                    _context.next = 17;
                    return (0, _loadApp.default)(parsedName.name);

                  case 17:
                    appInfo = _appFactory.default.getApp(parsedName.name);

                    if (appInfo) {
                      _context.next = 21;
                      break;
                    }

                    console.error("\u52A0\u8F7D\u5E94\u7528".concat(parsed.name, "\u5931\u8D25"));
                    return _context.abrupt("return", next(action));

                  case 21:
                    return _context.abrupt("return", next({
                      type: '@@loadAppReal',
                      payload: {
                        fullName: _fullName,
                        appInfo: appInfo,
                        prevFullName: prevFullName,
                        action: appInfo.action
                      }
                    }));

                  case 24:
                    _context.prev = 24;
                    _context.t0 = _context["catch"](11);
                    console.error(_context.t0);
                    return _context.abrupt("return", next(action));

                  case 28:
                    _context.next = 31;
                    break;

                  case 30:
                    return _context.abrupt("return", next(action));

                  case 31:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[11, 24]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/config.js":
/*!********************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/config.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _options = {};

function config(options) {
  Object.assign(_options, options);
}

config.current = _options;
var _default = config;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/createReduxConnector.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/createReduxConnector.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReduxConnector;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function createReduxConnector(WrappedComponent, mapStateToProps, mapDispatchToProps, mergeProps, options) {
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, options)(WrappedComponent);
}

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AppLoader", {
  enumerable: true,
  get: function get() {
    return _appLoader.default;
  }
});
Object.defineProperty(exports, "appMiddleware", {
  enumerable: true,
  get: function get() {
    return _appMiddleware.default;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _config.default;
  }
});
Object.defineProperty(exports, "start", {
  enumerable: true,
  get: function get() {
    return _start.default;
  }
});
Object.defineProperty(exports, "init", {
  enumerable: true,
  get: function get() {
    return _init.default;
  }
});
Object.defineProperty(exports, "loadApp", {
  enumerable: true,
  get: function get() {
    return _loadApp.default;
  }
});
exports.existsApp = exports.getApps = exports.getApp = exports.registerApps = exports.registerApp = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _appLoader = _interopRequireDefault(__webpack_require__(/*! ./appLoader */ "./node_modules/@whatsmk/app-loader/lib/appLoader.js"));

var _appMiddleware = _interopRequireDefault(__webpack_require__(/*! ./appMiddleware */ "./node_modules/@whatsmk/app-loader/lib/appMiddleware.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/@whatsmk/app-loader/lib/reducer.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@whatsmk/app-loader/lib/config.js"));

var _start = _interopRequireDefault(__webpack_require__(/*! ./start */ "./node_modules/@whatsmk/app-loader/lib/start.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@whatsmk/app-loader/lib/appFactory.js"));

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./node_modules/@whatsmk/app-loader/lib/init.js"));

var _loadApp = _interopRequireDefault(__webpack_require__(/*! ./loadApp */ "./node_modules/@whatsmk/app-loader/lib/loadApp.js"));

var registerApp = _appFactory.default.registerApp,
    registerApps = _appFactory.default.registerApps,
    getApp = _appFactory.default.getApp,
    getApps = _appFactory.default.getApps,
    existsApp = _appFactory.default.existsApp;
exports.existsApp = existsApp;
exports.getApps = getApps;
exports.getApp = getApp;
exports.registerApps = registerApps;
exports.registerApp = registerApp;
var _default = {
  AppLoader: _appLoader.default,
  appMiddleware: _appMiddleware.default,
  reducer: _reducer.default,
  config: _config.default,
  init: _init.default,
  start: _start.default,
  registerApp: registerApp,
  registerApps: registerApps,
  getApp: getApp,
  getApps: getApps,
  existsApp: existsApp,
  loadApp: _loadApp.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/init.js":
/*!******************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/init.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _appLoader = _interopRequireDefault(__webpack_require__(/*! ./appLoader */ "./node_modules/@whatsmk/app-loader/lib/appLoader.js"));

var _appMiddleware = _interopRequireDefault(__webpack_require__(/*! ./appMiddleware */ "./node_modules/@whatsmk/app-loader/lib/appMiddleware.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/@whatsmk/app-loader/lib/reducer.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@whatsmk/app-loader/lib/config.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@whatsmk/app-loader/lib/appFactory.js"));

function init(option) {
  (0, _config.default)(option);
  var currentConfig = _config.default.current;
  if (currentConfig.apps) _appFactory.default.registerApps(currentConfig.apps);
  var mw = [(0, _appMiddleware.default)(currentConfig.actionInjections || {}, currentConfig.reducerInjections || {})];
  if (currentConfig.middlewares) mw = mw.concat(currentConfig.middlewares);
  var store = (0, _redux.createStore)(_reducer.default, (0, _immutable.Map)(), _redux.applyMiddleware.apply(void 0, (0, _toConsumableArray2.default)(mw)));
  window.reduxStore = store;
  window.__mk_store__ = store;
}

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/loadApp.js":
/*!*********************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/loadApp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadApp;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectSpread3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@whatsmk/app-loader/lib/appFactory.js"));

var appConfig = function appConfig(apps, options) {
  Object.keys(options).forEach(function (key) {
    var reg = new RegExp("^".concat(key == '*' ? '.*' : key, "$"));
    Object.keys(apps).forEach(function (appName) {
      if (appName != 'config') {
        if (reg.test(appName)) {
          apps[appName].config && apps[appName].config(options[key]);
        }
      }
    });
  });
};

function loadApp(app, isProduction) {
  var urls = [],
      options = {};

  if (typeof app == 'string') {
    urls.push(app);
  } else if (app instanceof Array) {
    app.forEach(function (o) {
      if (typeof o == 'string') {
        urls.push(o);
      } else if ((0, _typeof2.default)(o) == 'object' && o.url) {
        urls.push(o.url);
        if (o.name && o.option) options[o.name] = o.option;
      }
    });
  } else if ((0, _typeof2.default)(app) == 'object' && app.url) {
    urls.push(o.url);
    if (app.name && app.option) options[app.name] = app.option;
  }

  if (!window.require || urls.length == 0) return Promise.resolve(null);
  return new Promise(function (resolve, reject) {
    urls.forEach(function (url) {
      var appName = url.substr(url.lastIndexOf('/') + 1).replace(/(\.js)|(\.min\.js)/, ''),
          pub = url.indexOf('/') ? url.substr(0, url.lastIndexOf('/') + 1) : '';
      window["__pub_".concat(appName, "__")] = pub;
    });
    urls = urls.map(function (u) {
      return isProduction ? u + '.min' : u;
    });
    var appCount = urls.length;
    urls = urls.concat(urls.map(function (u) {
      return "css!".concat(u);
    }));

    window.require(urls, function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var apps = args.slice(0, appCount).reduce(function (prev, curr) {
        return (0, _objectSpread3.default)({}, prev, (0, _defineProperty2.default)({}, curr.name, curr));
      }, {});

      _appFactory.default.registerApps(apps);

      appConfig(_appFactory.default.getApps(), (0, _objectSpread3.default)({
        "*": {
          apps: (0, _objectSpread3.default)({}, _appFactory.default.getApps())
        }
      }, options));
      resolve(null);
    });
  });
}

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/parseName.js":
/*!***********************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/parseName.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseName;

function parseName(fullName) {
  var segments = fullName.split('?'),
      name = segments[0],
      query = segments[1] || '',
      params = parseQuery(query);
  return {
    fullName: fullName,
    name: name,
    query: query,
    params: params
  };
}

function parseQuery(query) {
  var ret = {},
      seg = query.replace(/^\?/, '').split('&'),
      len = seg.length,
      i = 0,
      s;

  for (; i < len; i++) {
    if (!seg[i]) {
      continue;
    }

    s = seg[i].split('=');
    ret[s[0]] = decodeURIComponent(s[1]);
  }

  return ret;
}

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/reducer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/reducer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _wrapMapStateToProps = _interopRequireDefault(__webpack_require__(/*! ./wrapMapStateToProps */ "./node_modules/@whatsmk/app-loader/lib/wrapMapStateToProps.js"));

var _wrapMapDispatchToProps = _interopRequireDefault(__webpack_require__(/*! ./wrapMapDispatchToProps */ "./node_modules/@whatsmk/app-loader/lib/wrapMapDispatchToProps.js"));

var _createReduxConnector = _interopRequireDefault(__webpack_require__(/*! ./createReduxConnector */ "./node_modules/@whatsmk/app-loader/lib/createReduxConnector.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@whatsmk/app-loader/lib/config.js"));

function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _immutable.Map)();

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case "@@loadAppReal":
      return loadApp(state, payload);

    case "@@reduce":
      return reduce(state, payload);

    case "@@clearAppState":
      return clearAppState(state, payload);

    default:
      return state;
  }
}

function loadApp(state, _ref2) {
  var fullName = _ref2.fullName,
      prevFullName = _ref2.prevFullName,
      appInfo = _ref2.appInfo,
      component = _ref2.component,
      action = _ref2.action,
      reducer = _ref2.reducer;

  if (!state.has(fullName)) {
    state = state.set(fullName, (0, _immutable.Map)());
    var actionInstance = typeof action == 'function' ? action({
      appInfo: appInfo,
      fullName: fullName
    }) : _config.default.current.defaultAction({
      appInfo: appInfo,
      fullName: fullName
    }),
        reducerInstance = typeof reducer == 'function' ? reducer({
      appInfo: appInfo,
      fullName: fullName
    }) : _config.default.current.defaultReducer({
      appInfo: appInfo,
      fullName: fullName
    }),
        container = (0, _createReduxConnector.default)(component || _config.default.current.defaultComponent, (0, _wrapMapStateToProps.default)(fullName), (0, _wrapMapDispatchToProps.default)(fullName, actionInstance, reducerInstance), null, {
      withRef: true,
      pure: true
    });
    state = state.setIn([fullName, '@@require'], (0, _immutable.Map)({
      fullName: fullName,
      appInfo: appInfo,
      component: component,
      action: actionInstance,
      reducer: reducerInstance,
      container: container
    }));
  }

  if (prevFullName && prevFullName != fullName) {
    state = clearAppState(state, {
      fullName: prevFullName
    });
  }

  return state;
}

function clearAppState(state, _ref3) {
  var fullName = _ref3.fullName;
  if (!state.has(fullName)) return state;
  var ks = [];
  state.get(fullName).mapKeys(function (k) {
    if (k != '@@require') ks.push(k);
    return k;
  });
  ks.forEach(function (k) {
    if (k) state = state.update(fullName, function (x) {
      return x.remove(k);
    });
  });
  return state;
}

function reduce(state, _ref4) {
  var reducer = _ref4.reducer,
      type = _ref4.type,
      payload = _ref4.payload,
      fullName = _ref4.fullName,
      injectFunsForReducer = _ref4.injectFunsForReducer;
  var startDate = new Date();
  var oldState = state.get(fullName);
  var newState = reducer[type].apply(this, [oldState].concat(payload));

  if (typeof newState === "function") {
    newState = newState(injectFunsForReducer);
  }

  if (window.__mk_record_action__ === true) {
    window.__mk_actions__ = window.__mk_actions__ || [];
    var endDate = new Date();

    window.__mk_actions__.unshift({
      appFullName: fullName,
      reduceMethod: type,
      payload: payload,
      oldState: oldState,
      newState: newState,
      startTime: startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds() + '.' + startDate.getMilliseconds(),
      endTime: endDate.getHours() + ':' + endDate.getMinutes() + ':' + endDate.getSeconds() + '.' + endDate.getMilliseconds(),
      elapsedTime: Math.abs(startDate.getTime() - endDate.getTime()) //(1000*60*60*24)

    });
  } else {
    if (window.__mk_actions__) window.__mk_actions__ = undefined;
  }

  return state.set(fullName, newState);
}

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/start.js":
/*!*******************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/start.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = start;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _appLoader = _interopRequireDefault(__webpack_require__(/*! ./appLoader */ "./node_modules/@whatsmk/app-loader/lib/appLoader.js"));

var _appMiddleware = _interopRequireDefault(__webpack_require__(/*! ./appMiddleware */ "./node_modules/@whatsmk/app-loader/lib/appMiddleware.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/@whatsmk/app-loader/lib/reducer.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@whatsmk/app-loader/lib/config.js"));

var _appFactory = _interopRequireDefault(__webpack_require__(/*! ./appFactory */ "./node_modules/@whatsmk/app-loader/lib/appFactory.js"));

function start() {
  var currentConfig = _config.default.current;

  _appFactory.default.registerApps(currentConfig.apps);

  var mw = [(0, _appMiddleware.default)(currentConfig.actionInjections || {}, currentConfig.reducerInjections || {})];
  if (currentConfig.middlewares) mw = mw.concat(currentConfig.middlewares);
  var store = (0, _redux.createStore)(_reducer.default, (0, _immutable.Map)(), _redux.applyMiddleware.apply(void 0, (0, _toConsumableArray2.default)(mw)));
  window.reduxStore = store;
  window.__mk_store__ = store;

  if (!currentConfig.rootWrapper) {
    currentConfig.rootWrapper = function (child) {
      return child;
    };
  }

  (0, _reactDom.render)(currentConfig.rootWrapper(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_appLoader.default, {
    name: currentConfig.startAppName
  }))), document.getElementById(currentConfig.targetDomId));
}

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/wrapMapDispatchToProps.js":
/*!************************************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/wrapMapDispatchToProps.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapMapDispatchToProps;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _redux = __webpack_require__(/*! redux */ "redux");

var _parseName = _interopRequireDefault(__webpack_require__(/*! ./parseName */ "./node_modules/@whatsmk/app-loader/lib/parseName.js"));

function wrapMapDispatchToProps(fullName, actionCreators, reducer) {
  var parsedName = (0, _parseName.default)(fullName),
      wrapActionCreators = {},
      keys = Object.keys(actionCreators);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key === 'directFuns') continue;
    var wrapActionCreator = wrapAction(actionCreators[key], reducer, parsedName.fullName, parsedName.name, parsedName.query, parsedName.params);
    wrapActionCreators[key] = wrapActionCreator;
  }

  return function (dispatch) {
    return (0, _objectSpread2.default)({}, (0, _redux.bindActionCreators)(wrapActionCreators, dispatch), actionCreators.getDirectFuns && actionCreators.getDirectFuns(parsedName) || {});
  };
}

function wrapAction(actionCreator, reducer, fullName, name, query, params) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function () {
      return {
        fullName: fullName,
        name: name,
        query: query,
        params: params,
        actionCreator: actionCreator,
        reducer: reducer,
        args: args
      };
    };
  };
}

/***/ }),

/***/ "./node_modules/@whatsmk/app-loader/lib/wrapMapStateToProps.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@whatsmk/app-loader/lib/wrapMapStateToProps.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapMapStateToProps;

var _parseName = _interopRequireDefault(__webpack_require__(/*! ./parseName */ "./node_modules/@whatsmk/app-loader/lib/parseName.js"));

var _immutable = __webpack_require__(/*! immutable */ "immutable");

function wrapMapStateToProps(fullName) {
  var parsedName = (0, _parseName.default)(fullName);
  return function (state) {
    return {
      appName: parsedName.name,
      appFullName: parsedName.fullName,
      appQuery: parsedName.query,
      appParams: parsedName.params,
      payload: state.get(parsedName.fullName)
    };
  };
}

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/action.js":
/*!*********************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/action.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var common = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/@whatsmk/meta-engine/lib/common.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! @whatsmk/utils */ "./node_modules/@whatsmk/utils/lib/index.js"));

var _immutable = __webpack_require__(/*! immutable */ "immutable");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/@whatsmk/meta-engine/lib/context.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@whatsmk/meta-engine/lib/config.js"));

var appInstances = {};

var action = function action(option) {
  var _this = this;

  (0, _classCallCheck2.default)(this, action);
  (0, _defineProperty2.default)(this, "config", function (_ref) {
    var metaHandlers = _ref.metaHandlers;
    _this.metaHandlers = metaHandlers;
  });
  (0, _defineProperty2.default)(this, "initView", function (component, injections) {
    _this.component = component;
    _this.injections = injections;
    _this.metaHandlers.component = _this.component;
    _this.metaHandlers.injections = _this.injections;
    appInstances[component.props.appFullName] = {
      appName: component.props.appName,
      appQuery: component.props.appQuery,
      //app: config.getApps()[component.props.appName],
      instance: component
    };
    var initState = _this.appInfo.state && _this.appInfo.state.data || {};

    _this.sf('data', (0, _immutable.fromJS)(initState));

    if (_this.metaHandlers && _this.metaHandlers.onInit) {
      _this.metaHandlers.onInit({
        component: component,
        injections: injections
      });
    }
  });
  (0, _defineProperty2.default)(this, "unmount", function () {
    delete appInstances[_this.component.appFullName];
  });
  (0, _defineProperty2.default)(this, "componentWillMount", function () {
    _this.metaHandlers && _this.metaHandlers['componentWillMount'] && _this.metaHandlers['componentWillMount'] != _this.componentWillMount && _this.metaHandlers['componentWillMount']();
  });
  (0, _defineProperty2.default)(this, "componentDidMount", function () {
    _this.metaHandlers && _this.metaHandlers['componentDidMount'] && _this.metaHandlers['componentDidMount'] != _this.componentDidMount && _this.metaHandlers['componentDidMount']();
  });
  (0, _defineProperty2.default)(this, "shouldComponentUpdate", function (nextProps, nextState) {
    _this.metaHandlers && _this.metaHandlers['shouldComponentUpdate'] && _this.metaHandlers['shouldComponentUpdate'] != _this.shouldComponentUpdate && _this.metaHandlers['shouldComponentUpdate'](nextProps, nextState);
  });
  (0, _defineProperty2.default)(this, "componentWillReceiveProps", function (nextProps) {
    _this.metaHandlers && _this.metaHandlers['componentWillReceiveProps'] && _this.metaHandlers['componentWillReceiveProps'] != _this.componentWillReceiveProps && _this.metaHandlers['componentWillReceiveProps'](nextProps);
  });
  (0, _defineProperty2.default)(this, "componentWillUpdate", function (nextProps, nextState) {
    _this.metaHandlers && _this.metaHandlers['componentWillUpdate'] && _this.metaHandlers['componentWillUpdate'] != _this.componentWillUpdate && _this.metaHandlers['componentWillUpdate'](nextProps, nextState);
  });
  (0, _defineProperty2.default)(this, "componentDidCatch", function (error, info) {
    _this.metaHandlers && _this.metaHandlers['componentDidCatch'] && _this.metaHandlers['componentDidCatch'] != _this.componentDidCatch && _this.metaHandlers['componentDidCatch'](error, info);
  });
  (0, _defineProperty2.default)(this, "componentWillUnmount", function () {
    _this.metaHandlers && _this.metaHandlers['componentWillUnmount'] && _this.metaHandlers['componentWillUnmount'] != _this.componentWillUnmount && _this.metaHandlers['componentWillUnmount']();
  });
  (0, _defineProperty2.default)(this, "componentDidUpdate", function () {
    _this.metaHandlers && _this.metaHandlers['componentDidUpdate'] && _this.metaHandlers['componentDidUpdate'] != _this.componentDidUpdate && _this.metaHandlers['componentDidUpdate']();
  });
  (0, _defineProperty2.default)(this, "getAppInstances", function () {
    return appInstances;
  });
  (0, _defineProperty2.default)(this, "getField", function (fieldPath) {
    return common.getField(_this.injections.getState(), fieldPath);
  });
  (0, _defineProperty2.default)(this, "getFields", function (fieldPaths) {
    return common.getFields(_this.injections.getState(), fieldPaths);
  });
  (0, _defineProperty2.default)(this, "setField", function (fieldPath, value) {
    return _this.injections.reduce('setField', fieldPath, value);
  });
  (0, _defineProperty2.default)(this, "setFields", function (values) {
    return _this.injections.reduce('setFields', values);
  });
  (0, _defineProperty2.default)(this, "parseExpreesion", function (v) {
    if (!_this.cache.expression) _this.cache.expression = {};

    if (_this.cache.expression[v]) {
      return _this.cache.expression[v];
    }

    if (!_this.cache.expressionParams) {
      _this.cache.expressionParams = ['data'].concat(Object.keys(_this.metaHandlers).map(function (k) {
        return "$" + k;
      })).concat(['_path', '_rowIndex', '_vars', '_ctrlPath', '_lastIndex']);
    }

    var params = _this.cache.expressionParams;

    var body = _utils.default.expression.getExpressionBody(v);

    _this.cache.expression[v] = (0, _construct2.default)(Function, (0, _toConsumableArray2.default)(params).concat([body]));
    return _this.cache.expression[v];
  });
  (0, _defineProperty2.default)(this, "execExpression", function (expressContent, data, path, rowIndex, vars, ctrlPath) {
    var values = [data];
    var metaHandlerKeys = Object.keys(_this.metaHandlers),
        i,
        key;

    var fun = function fun(n) {
      return _this.metaHandlers[n];
    };

    for (i = 0; key = metaHandlerKeys[i++];) {
      values.push(fun(key));
    }

    values.push(path);
    values.push(rowIndex);
    values.push(vars);
    values.push(ctrlPath);
    values.push(vars && vars[vars.length - 1]);

    try {
      return _this.parseExpreesion(expressContent).apply(_this, values);
    } catch (e) {
      _this.metaHandlers && _this.metaHandlers.componentDidCatch && _this.metaHandlers.componentDidCatch != _this.componentDidCatch && _this.metaHandlers.componentDidCatch(e);
      setTimeout(function () {
        console.error("\u8868\u8FBE\u5F0F\u89E3\u6790\u9519\u8BEF\uFF1A".concat(expressContent));

        _utils.default.exception.error(e);
      }, 500);
    }
  });
  (0, _defineProperty2.default)(this, "needUpdate", function (meta) {
    if (!meta) return false;
    var t = (0, _typeof2.default)(meta);
    if (t == 'string' && _utils.default.expression.isExpression(meta)) return true;
    if (t != 'object') return false;

    if (meta._notParse === true) {
      return false;
    }

    return !(t != 'object' || !!meta['$$typeof'] || !!meta._isAMomentObject || !!meta._power || meta._visible === false);
  });
  (0, _defineProperty2.default)(this, "updateMeta", function (meta, path, rowIndex, vars, data, ctrlPath) {
    if (!_this.needUpdate(meta)) return;

    if (meta instanceof Array) {
      for (var _i = 0; _i < meta.length; _i++) {
        var sub = meta[_i];
        var currentPath = path;
        if (!sub) continue;

        if (sub._power) {
          currentPath = "".concat(path, ".").concat(sub._name);
          sub.path = vars ? "".concat(currentPath, ", ").concat(vars.join(',')) : currentPath;
          continue;
        }

        var subType = (0, _typeof2.default)(sub),
            isExpression = false,
            isMeta = false;

        if (subType == 'string' && _utils.default.expression.isExpression(sub)) {
          sub = _this.execExpression(sub, data, path, rowIndex, vars, ctrlPath);
          isExpression = true;
          if (sub && sub._isMeta === true) isMeta = true;

          if (sub && sub._isMeta === true) {
            isMeta = true;
            meta[_i] = sub.value;
          } else {
            meta[_i] = sub;
          }
        }

        if (!_this.needUpdate(sub)) continue;

        if (isExpression && !isMeta) {
          continue;
        }

        subType = (0, _typeof2.default)(sub);

        if (sub instanceof Array) {
          currentPath = "".concat(path, ".").concat(_i);
          sub.path = vars ? "".concat(currentPath, ", ").concat(vars.join(',')) : currentPath;

          _this.updateMeta(sub, currentPath, rowIndex, vars, data, ctrlPath);

          continue;
        }

        if (sub._name && sub.component) {
          currentPath = "".concat(path, ".").concat(sub._name);
          sub.path = vars ? "".concat(currentPath, ", ").concat(vars.join(',')) : currentPath;

          _this.updateMeta(sub, currentPath, rowIndex, vars, data, sub.path);
        } else {
          currentPath = "".concat(path, ".").concat(_i);
          sub.path = vars ? "".concat(currentPath, ", ").concat(vars.join(',')) : currentPath;

          _this.updateMeta(sub, currentPath, rowIndex, vars, data, ctrlPath);
        }
      }

      return;
    }

    var excludeProps = meta._excludeProps;

    if (excludeProps && _utils.default.expression.isExpression(excludeProps)) {
      excludeProps = _this.execExpression(excludeProps, data, path, rowIndex, vars, ctrlPath);
    } //去除meta的排除属性


    if (excludeProps && excludeProps instanceof Array) {
      for (var i = 0; i < excludeProps.length; i++) {
        if (meta[excludeProps[i]]) delete meta[excludeProps[i]];
      }

      delete meta['_excludeProps'];
    }

    var keys = Object.keys(meta),
        j,
        key;

    var _loop = function _loop() {
      var v = meta[key],
          t = (0, _typeof2.default)(v),
          currentPath = path;
      if (!v) return "continue";

      if (v._power) {
        currentPath = "".concat(path, ".").concat(key, ".").concat(v._name);
        v.path = vars ? "".concat(currentPath, ", ").concat(vars.join(',')) : currentPath;
        return "continue";
      }

      var isExpression = false,
          isMeta = false;

      if (t == 'string' && _utils.default.expression.isExpression(v)) {
        v = _this.execExpression(v, data, "".concat(path, ".").concat(key), rowIndex, vars, ctrlPath);
        isExpression = true;

        if (key == '...' && v && (0, _typeof2.default)(v) == 'object') {
          Object.keys(v).forEach(function (kk) {
            meta[kk] = v[kk];
          });
          delete meta['...'];
        } else {
          if (v && v._isMeta === true) {
            isMeta = true;
            meta[key] = v.value;
          } else {
            meta[key] = v;
          }
        }
      }

      t = (0, _typeof2.default)(t);
      if (!_this.needUpdate(v)) return "continue";

      if (isExpression && !isMeta) {
        return "continue";
      }

      if (v instanceof Array) {
        _this.updateMeta(v, "".concat(path, ".").concat(key), rowIndex, vars, data, ctrlPath);

        return "continue";
      }

      if (v._name && v.component) {
        currentPath = "".concat(path, ".").concat(key, ".").concat(v._name);
        v.path = vars ? "".concat(currentPath, ", ").concat(vars.join(',')) : currentPath;

        _this.updateMeta(v, currentPath, rowIndex, vars, data, v.path);
      } else {
        currentPath = "".concat(path, ".").concat(key);
        v.path = vars ? "".concat(currentPath, ", ").concat(vars.join(',')) : currentPath;

        _this.updateMeta(v, currentPath, rowIndex, vars, data, ctrlPath);
      }
    };

    for (j = 0; key = keys[j++];) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  });
  (0, _defineProperty2.default)(this, "getMeta", function (fullPath, propertys, data) {
    var meta = common.getMeta(_this.appInfo, fullPath, propertys);

    if (!fullPath) {
      fullPath = common.getMetaMap(_this.appInfo).keys().next().value;
    }

    var parsedPath = _utils.default.path.parsePath(fullPath),
        path = parsedPath.path,
        rowIndex = parsedPath.vars ? parsedPath.vars[0] : undefined,
        vars = parsedPath.vars;

    if (!data) data = common.getField(_this.injections.getState()).toJS();
    meta._power = undefined;
    meta.path = fullPath;

    _this.updateMeta(meta, path, rowIndex, vars, data, fullPath);

    return meta;
  });
  (0, _defineProperty2.default)(this, "setMetaForce", function (appName, meta) {
    common.setMetaForce(appName, meta);
  });
  (0, _defineProperty2.default)(this, "gm", this.getMeta);
  (0, _defineProperty2.default)(this, "gf", this.getField);
  (0, _defineProperty2.default)(this, "gfs", this.getFields);
  (0, _defineProperty2.default)(this, "sf", this.setField);
  (0, _defineProperty2.default)(this, "sfs", this.setFields);
  (0, _defineProperty2.default)(this, "fromJS", _immutable.fromJS);
  (0, _defineProperty2.default)(this, "context", _context.default);
  this.appInfo = option.appInfo;
  this.meta = (0, _immutable.fromJS)(option.appInfo.view);
  this.cache = {};
  common.setMeta(option.appInfo);
};

exports.default = action;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/actionFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/actionFactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var actionFactory =
/*#__PURE__*/
function () {
  function actionFactory() {
    (0, _classCallCheck2.default)(this, actionFactory);
    this.actions = {};
  }

  (0, _createClass2.default)(actionFactory, [{
    key: "registerAction",
    value: function registerAction(name, action) {
      if (this.actions[name]) {
        console.log("action\u5DF2\u7ECF\u5B58\u5728. name: ".concat(name, ", \u5FFD\u7565"));
      }

      this.actions[name] = action;
    }
  }, {
    key: "registerActions",
    value: function registerActions(actions) {
      var _this = this;

      if (!actions || actions.length == 0) return;
      actions.forEach(function (c) {
        return _this.registerAction(c.name, c.action);
      });
    }
  }, {
    key: "getAction",
    value: function getAction(name) {
      if (!name) throw "action name\u4E0D\u80FD\u4E3A\u7A7A";
      var action = this.actions[name];

      if (!action) {
        throw "\u627E\u4E0D\u5230action,name:".concat(name);
      }

      return action;
    }
  }]);
  return actionFactory;
}();

var instance = new actionFactory();
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/actionMixin.js":
/*!**************************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/actionMixin.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionMixin;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _action = _interopRequireDefault(__webpack_require__(/*! ./action */ "./node_modules/@whatsmk/meta-engine/lib/action.js"));

var _actionFactory = _interopRequireDefault(__webpack_require__(/*! ./actionFactory */ "./node_modules/@whatsmk/meta-engine/lib/actionFactory.js"));

function actionMixin() {
  for (var _len = arguments.length, mixins = new Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  return function (target) {
    return function (option) {
      var mixinInstances = {};
      var base = new _action.default(option);
      mixinInstances.base = base;

      if (mixins && mixins.length > 0) {
        mixins.forEach(function (m) {
          if (m != 'base') {
            var actCls, act;

            if (typeof m == 'string') {
              actCls = _actionFactory.default.getAction(m);
              act = new actCls((0, _objectSpread2.default)({}, option, {
                mixins: mixinInstances
              }));

              if (act) {
                mixinInstances[m] = act;
              }
            } else if ((0, _typeof2.default)(m) == 'object' && m.name) {
              actCls = _actionFactory.default.getAction(m.name);
              act = new actCls((0, _objectSpread2.default)({}, option, m.option, {
                mixins: mixinInstances
              }));

              if (act) {
                mixinInstances[m.name] = act;
              }
            }
          }
        });
      }

      var curr = new target((0, _objectSpread2.default)({}, option, {
        mixins: mixinInstances
      }));
      var ret = curr;
      Object.keys(mixinInstances).forEach(function (k) {
        return ret[k] = mixinInstances[k];
      });
      var retWrapper = {
        getDirectFuns: function getDirectFuns() {
          return ret;
        }
      };
      retWrapper.initView = ret.base.initView;
      base.config({
        metaHandlers: ret
      });
      return retWrapper;
    };
  };
}

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/common.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uid = uid;
exports.setMeta = setMeta;
exports.setMetaForce = setMetaForce;
exports.getMeta = getMeta;
exports.getMetaMap = getMetaMap;
exports.getField = getField;
exports.getFields = getFields;
exports.setField = setField;
exports.setFields = setFields;
exports.updateField = updateField;

var _immutable = _interopRequireWildcard(__webpack_require__(/*! immutable */ "immutable"));

var _utils = _interopRequireWildcard(__webpack_require__(/*! @whatsmk/utils */ "./node_modules/@whatsmk/utils/lib/index.js"));

var _templateFactory = _interopRequireDefault(__webpack_require__(/*! ./templateFactory */ "./node_modules/@whatsmk/meta-engine/lib/templateFactory.js"));

var existsParamsInPath = _utils.path.existsParamsInPath,
    parsePath = _utils.path.parsePath;
var cache = {
  meta: (0, _immutable.Map)()
};

window['__getCache'] = function () {
  return cache;
};

var i = 0;

function uid() {
  return 'i' + i++;
}

function setMeta(appInfo) {
  if (!appInfo || !appInfo.view) return;
  var appName = appInfo.name;
  if (cache.meta.has(appName)) return;
  setMetaForce(appName, appInfo.view);
}

function setMetaForce(appName, meta) {
  if (!appName || !meta) return;
  meta = (0, _immutable.fromJS)(meta);
  meta = parseMetaTemplate(meta);
  var parsed = parseMeta(meta);
  meta = parsed.meta;
  var map = parsed.map;
  cache.meta = cache.meta.setIn([appName, 'meta'], meta).setIn([appName, 'metaMap'], map);
}

function getMeta(appInfo, fullpath, propertys) {
  //path空取整个meta
  if (!fullpath) return cache.meta.getIn([appInfo.name, 'meta']).toJS();
  var parsedPath = parsePath(fullpath),
      vars = parsedPath.vars,
      metaMap = cache.meta.getIn([appInfo.name, 'metaMap']),
      meta = cache.meta.getIn([appInfo.name, 'meta']);
  var path = metaMap.get(parsedPath.path);
  var currentMeta = path ? meta.getIn(path.split('.')) : meta; //属性空，获取该路径下所有属性

  if (!propertys) return currentMeta.toJS();
  var ret = {}; //属性为数组，遍历获取

  if (propertys instanceof Array) {
    var i, p;

    for (i = 0; p = propertys[i++];) {
      var val = currentMeta.getIn(p.split('.'));
      ret[p] = val && val.toJS ? val.toJS() : val;
    }
    /*
    propertys.forEach(p => {
        let val = currentMeta.getIn(p.split('.'))
        //immutable值，直接toJS()
        ret[p] = (val && val.toJS) ? val.toJS() : val
    })*/


    return ret;
  } //属性为字符串，直接获取


  if (typeof propertys == 'string') {
    var _val = currentMeta.getIn(propertys.split('.'));

    return _val && _val.toJS ? _val.toJS() : _val;
  }
}

function getMetaMap(appInfo) {
  return cache.meta.getIn([appInfo.name, 'metaMap']);
}

function getField(state, fieldPath) {
  if (!fieldPath) {
    return state.get('data');
  }

  if (fieldPath instanceof Array) {
    return state.getIn(fieldPath);
  } else {
    return state.getIn(fieldPath.split('.'));
  }
}

function getFields(state, fieldPaths) {
  var ret = {};
  fieldPaths.forEach(function (o) {
    return ret[o] = getField(state, o);
  });
  return ret;
}

function setField(state, fieldPath, value) {
  if (fieldPath instanceof Array) {
    return state.setIn(fieldPath, value);
  } else {
    return state.setIn(fieldPath.split('.'), value);
  }
}

function setFields(state, values) {
  var keys = Object.keys(values),
      i,
      key;

  for (i = 0; key = keys[i++];) {
    state = setField(state, key, values[key]);
  }

  return state;
}

function updateField(state, fieldPath, fn) {
  if (fieldPath instanceof Array) {
    return state.updateIn(fieldPath, fn);
  } else {
    return state.updateIn(fieldPath.split('.'), fn);
  }
}

function parseMetaTemplate(meta) {
  var templates = [];

  var parseProp = function parseProp(propValue, path) {
    if (!(propValue instanceof _immutable.default.Map)) {
      return;
    }

    if (propValue.get('component')) {
      var component = _utils.default.string.trim(propValue.get('component'));

      var template = _templateFactory.default.getTemplate(component);

      if (template) {
        templates.push([path, (0, _immutable.fromJS)(template(propValue.toJS()))]);
        return;
      }
    }

    propValue.keySeq().toArray().forEach(function (p) {
      var v = propValue.get(p);

      if (v instanceof _immutable.default.List) {
        v.forEach(function (c, index) {
          var currentPath = path ? "".concat(path, ".").concat(p, ".").concat(index) : "".concat(p, ".").concat(index);
          parseProp(c, currentPath);
        });
      } else {
        var currentPath = path ? "".concat(path, ".").concat(p) : p;
        parseProp(v, currentPath);
      }
    });
  };

  parseProp(meta, '');
  templates.forEach(function (t) {
    var seg = t[0].split('.');

    if (t[1] instanceof _immutable.default.List && meta.getIn(seg.slice(0, seg.length - 1)) instanceof _immutable.default.List) {
      var index = seg.pop();
      meta = meta.updateIn(seg, function (ll) {
        ll = ll.remove(index);
        t[1].forEach(function (o) {
          ll = ll.insert(index, o);
          index++;
        });
        return ll;
      });
    } else {
      meta = meta.setIn(seg, t[1]);
    }
  });
  return meta;
}

function parseMeta(meta) {
  var map = (0, _immutable.Map)();

  var parseProp = function parseProp(propValue, parentPath, parentRealPath) {
    if (!(propValue instanceof _immutable.default.Map)) {
      return;
    }
    /*if (propValue.get('name') && propValue.get('component')) {
        const name = utils.string.trim(propValue.get('name'))
        parentPath = parentPath ? `${parentPath}.${name}` : name
        ret = ret.set(parentPath, parentRealPath)
    }
    else*/


    if (propValue.get('component')) {
      var name = uid() + '';
      meta = meta.setIn(parentRealPath ? parentRealPath.split('.').concat('_name') : ['_name'], name);
      parentPath = parentPath ? "".concat(parentPath, ".").concat(name) : name;
      map = map.set(parentPath, parentRealPath);
    }

    propValue.keySeq().toArray().forEach(function (p) {
      var v = propValue.get(p),
          currentPath = parentPath ? "".concat(parentPath, ".").concat(p) : p;

      if (v instanceof _immutable.default.List) {
        v.forEach(function (c, index) {
          var currentRealPath = parentRealPath ? "".concat(parentRealPath, ".").concat(p, ".").concat(index) : "".concat(p, ".").concat(index);
          parseProp(c, "".concat(currentPath), currentRealPath);
        });
      } else {
        var currentRealPath = parentRealPath ? "".concat(parentRealPath, ".").concat(p) : p;
        parseProp(v, "".concat(currentPath), currentRealPath);
      }
    });
  };

  parseProp(meta, '', '');
  return {
    meta: meta,
    map: map
  };
}

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/componentFactory.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/componentFactory.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var componentFactory =
/*#__PURE__*/
function () {
  function componentFactory() {
    (0, _classCallCheck2.default)(this, componentFactory);
    this.components = {};
    this.appComponents = {};
  }

  (0, _createClass2.default)(componentFactory, [{
    key: "registerComponent",
    value: function registerComponent(name, component) {
      if (this.components[name]) {
        console.log("\u7EC4\u4EF6\u5DF2\u7ECF\u5B58\u5728. name: ".concat(name, ",\u5FFD\u7565"));
        return;
      }

      this.components[name] = component;
    }
    /*
    registerAppComponent(appName, componentName, component) {
        this.appComponents[appName] = this.appComponents[appName] || {}
        this.appComponents[appName].components = this.appComponents[appName].components || {}
        if (this.appComponents[appName].components[componentName])
            throw `组件existed. app:${appName}, name: ${componentName}`
        this.appComponents[appName].components[componentName] = component
    }*/

  }, {
    key: "registerComponents",
    value: function registerComponents(components) {
      var _this = this;

      if (!components || components.length == 0) return;
      components.forEach(function (c) {
        return _this.registerComponent(c.name, c.component);
      });
    }
  }, {
    key: "getComponent",
    value: function getComponent(name) {
      if (!name) throw 'component name can not null';
      /*
      if (name.substring(0, 2) == '::') {
          if(name.substr(2))
              return  name.substr(2) 
          else
              throw `没有组件. name: ::`
      }*/

      var nameSegs = name.split('.'),
          firstSeg = nameSegs[0];
      /*
      if (this.appComponents && this.appComponents[appName] && this.appComponents[appName].components && this.appComponents[appName].components[firstSeg]) {
          var com = this.appComponents[appName].components[name]
           if (com && nameSegs.length > 1) {
              com = this.findChild(com, nameSegs)
          }
           if (com) return com
       }*/

      var component = this.components[firstSeg];

      if (component && nameSegs.length > 1) {
        component = this.findChild(component, nameSegs);
      }

      if (!component) {
        return name; //throw `没有组件. name: ${name}`
      }

      return component;
    }
  }, {
    key: "findChild",
    value: function findChild(component, nameSegs) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nameSegs.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var s = _step.value;

          if (!component[s]) {
            component = undefined;
            return;
          }

          component = component[s];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return component;
    }
  }]);
  return componentFactory;
}();

var instance = new componentFactory();
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/config.js":
/*!*********************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function config(option) {//to do
}

var _default = config;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var context =
/*#__PURE__*/
function () {
  function context() {
    (0, _classCallCheck2.default)(this, context);
    this._context = {};
  }

  (0, _createClass2.default)(context, [{
    key: "set",
    value: function set(key, value) {
      this._context[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._context[key];
    }
  }]);
  return context;
}();

var instance = new context();
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/defaultComponent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/defaultComponent.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _wrapper = _interopRequireDefault(__webpack_require__(/*! ./wrapper */ "./node_modules/@whatsmk/meta-engine/lib/wrapper.js"));

var _dec, _class;

var C = (_dec = (0, _wrapper.default)(), _dec(_class =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(C, _Component);

  function C() {
    (0, _classCallCheck2.default)(this, C);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(C).apply(this, arguments));
  }

  (0, _createClass2.default)(C, [{
    key: "render",
    value: function render() {
      return this.props.monkeyKing((0, _objectSpread2.default)({}, this.props, {
        path: 'root'
      }));
    }
  }]);
  return C;
}(_react.Component)) || _class);
exports.default = C;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _config.default;
  }
});
Object.defineProperty(exports, "action", {
  enumerable: true,
  get: function get() {
    return _action.default;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
Object.defineProperty(exports, "wrapper", {
  enumerable: true,
  get: function get() {
    return _wrapper.default;
  }
});
Object.defineProperty(exports, "actionMixin", {
  enumerable: true,
  get: function get() {
    return _actionMixin.default;
  }
});
Object.defineProperty(exports, "componentFactory", {
  enumerable: true,
  get: function get() {
    return _componentFactory.default;
  }
});
Object.defineProperty(exports, "templateFactory", {
  enumerable: true,
  get: function get() {
    return _templateFactory.default;
  }
});
Object.defineProperty(exports, "actionFactory", {
  enumerable: true,
  get: function get() {
    return _actionFactory.default;
  }
});
Object.defineProperty(exports, "defaultComponent", {
  enumerable: true,
  get: function get() {
    return _defaultComponent.default;
  }
});
exports.defaultReducer = exports.defaultAction = exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@whatsmk/meta-engine/lib/config.js"));

var _action = _interopRequireDefault(__webpack_require__(/*! ./action */ "./node_modules/@whatsmk/meta-engine/lib/action.js"));

var _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ "./node_modules/@whatsmk/meta-engine/lib/reducer.js"));

var _wrapper = _interopRequireDefault(__webpack_require__(/*! ./wrapper */ "./node_modules/@whatsmk/meta-engine/lib/wrapper.js"));

var _actionMixin = _interopRequireDefault(__webpack_require__(/*! ./actionMixin */ "./node_modules/@whatsmk/meta-engine/lib/actionMixin.js"));

var _componentFactory = _interopRequireDefault(__webpack_require__(/*! ./componentFactory */ "./node_modules/@whatsmk/meta-engine/lib/componentFactory.js"));

var _templateFactory = _interopRequireDefault(__webpack_require__(/*! ./templateFactory */ "./node_modules/@whatsmk/meta-engine/lib/templateFactory.js"));

var _actionFactory = _interopRequireDefault(__webpack_require__(/*! ./actionFactory */ "./node_modules/@whatsmk/meta-engine/lib/actionFactory.js"));

var _defaultComponent = _interopRequireDefault(__webpack_require__(/*! ./defaultComponent */ "./node_modules/@whatsmk/meta-engine/lib/defaultComponent.js"));

var defaultAction = _action.default;
exports.defaultAction = defaultAction;
var defaultReducer = _reducer.default;
exports.defaultReducer = defaultReducer;
var _default = {
  config: _config.default,
  action: _action.default,
  reducer: _reducer.default,
  wrapper: _wrapper.default,
  actionMixin: _actionMixin.default,
  componentFactory: _componentFactory.default,
  templateFactory: _templateFactory.default,
  actionFactory: _actionFactory.default,
  defaultComponent: _defaultComponent.default,
  defaultAction: defaultAction,
  defaultReducer: defaultReducer
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/monkeyKing.js":
/*!*************************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/monkeyKing.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _componentFactory = _interopRequireDefault(__webpack_require__(/*! ./componentFactory */ "./node_modules/@whatsmk/meta-engine/lib/componentFactory.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! @whatsmk/utils */ "./node_modules/@whatsmk/utils/lib/index.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

function parseMetaProps(meta, props, data) {
  var ret = {};
  Object.keys(meta).forEach(function (key) {
    var v = meta[key],
        t = (0, _typeof2.default)(v);

    if (v instanceof Array) {
      ret[key] = [];
      var i, c;

      for (i = 0; c = v[i++];) {
        if (c instanceof Array) {
          ret[key] = c;
        } else {
          var mc = metaToComponent(c, props, data);
          if (mc instanceof Array) ret[key] = ret[key].concat(mc);else ret[key].push(mc);
        }
      }
    } else if (t == 'object') {
      if (v && v._notParse) {
        ret[key] = v;
      } else {
        ret[key] = metaToComponent(v, props, data);
      }
    } else {
      ret[key] = v;
    }
  });
  return ret;
}

var toFunction = _lodash.default.memoize(function (v) {
  return new Function(v);
});

function metaToComponent(meta, props, data) {
  if (!meta) return meta;
  var metaType = (0, _typeof2.default)(meta);

  if (metaType == 'object' && meta['$$typeof']) {
    return meta;
  } else if (metaType == 'object' && meta['_isAMomentObject']) {
    return meta;
  } else if (metaType == 'object' && meta instanceof Date) {
    return meta;
  } else if (metaType == 'object' && meta instanceof Promise) {
    return meta;
  } else if (metaType == 'object') {
    if (meta.component) {
      if (meta._visible === false) return null;
      if (typeof meta._visible === 'function' && meta._visible() === false) return null;

      if (typeof meta.component == 'function') {
        meta.component = meta.component();
      } //for in data.list


      if (meta['_power'] && /for[ ]+in/.test(meta._power)) {
        var p = meta._power.replace(/for[ ]+in/, '').replace(' ', '');

        if (p.indexOf('_rowIndex') != -1) p = p.replace('_rowIndex', meta.path.split(',').length > 1 ? meta.path.split(',')[1].replace(' ', '') : 0);
        var items = props.base.gf(p);
        if (!items || items.size == 0) return;
        items = items.toJS();
        return items.map(function (o, index) {
          var childMeta = props.base.gm(meta.path + ',' + index, undefined, data);
          delete childMeta._power;
          return metaToComponent(childMeta, props, data);
        });
      } //({rowIndex})=>rowIndex


      if (meta._power && meta._power.indexOf('=>') != -1) {
        return function () {
          var varsString = toFunction('return ' + meta['_power'])().apply(void 0, arguments);
          var childMeta = props.base.gm(meta.path + ',' + varsString, undefined, data);
          childMeta._power = undefined;
          return metaToComponent(childMeta, props, data);
        };
      }

      var componentName = meta.component,
          component = _componentFactory.default.getComponent(componentName);

      var allProps = parseMetaProps(meta, props, data);

      if (!allProps.key) {
        allProps.key = meta.path;
      }

      delete allProps.component;
      delete allProps._name;
      delete allProps.path; //使用omit性能较低
      //allProps = omit(allProps, ['clearAppState', 'component', 'name', 'getDirectFuns', 'initView', 'payload'])

      if (componentName == 'AppLoader') {
        var propKeys = Object.keys(props),
            i,
            key;

        for (i = 0; key = propKeys[i++];) {
          if (allProps[key] == undefined) {
            allProps[key] = props[key];
          }
        } //删除一些组件不需要的属性


        delete allProps.clearAppState;
        delete allProps.getDirectFuns;
        delete allProps.initView;
        delete allProps.payload;
        delete allProps.componentWillMount;
        delete allProps.componentDidMount;
        delete allProps.shouldComponentUpdate;
        delete allProps.componentWillReceiveProps;
        delete allProps.componentWillUpdate;
        delete allProps.componentDidCatch;
        delete allProps.componentWillUnmount;
        delete allProps.componentDidUpdate;
        delete allProps.unmount;
        if (!allProps.appName) return null; //if (allProps._notRender === true && !getApps()[allProps.appName]) {

        if (allProps._notRender === true) {
          return null;
        }

        allProps.key = allProps.appName;
        allProps.name = allProps.appName;
        return _react.default.createElement(component, allProps);
      }

      return _react.default.createElement(component, allProps);
    } else {
      return parseMetaProps(meta, props, data);
    }
  } else {
    return meta;
  }
}

var MonkeyKing = function MonkeyKing(props) {
  var base = props.base;
  var data = base.gf().toJS();
  return metaToComponent(base.gm(undefined, undefined, data), props, data);
};

var _default = MonkeyKing;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/reducer.js":
/*!**********************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/reducer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = creator;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _immutable = _interopRequireWildcard(__webpack_require__(/*! immutable */ "immutable"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/@whatsmk/meta-engine/lib/context.js"));

var common = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/@whatsmk/meta-engine/lib/common.js"));

var reducer = function reducer(_option) {
  var _this = this;

  (0, _classCallCheck2.default)(this, reducer);
  (0, _defineProperty2.default)(this, "init", function (state, option) {
    var _option$data = option.data,
        data = _option$data === void 0 ? {} : _option$data;
    return _this.initByImmutable(state, {
      data: _immutable.default.fromJS(data)
    });
  });
  (0, _defineProperty2.default)(this, "initByImmutable", function (state, option) {
    var data = option.data; //清除state中非@@开头的属性，那属性是mk-app-loader增加的

    var keys = [];
    state.mapKeys(function (key) {
      if (key.indexOf('@@') === -1) keys.push(key);
    });
    keys.forEach(function (key) {
      state = state.remove(key);
    }); //设置状态

    return state.set('data', data);
  });
  (0, _defineProperty2.default)(this, "getMeta", common.getMeta);
  (0, _defineProperty2.default)(this, "getField", common.getField);
  (0, _defineProperty2.default)(this, "getFields", common.getFields);
  (0, _defineProperty2.default)(this, "setField", common.setField);
  (0, _defineProperty2.default)(this, "setFields", common.setFields);
  (0, _defineProperty2.default)(this, "gm", common.getMeta);
  (0, _defineProperty2.default)(this, "gf", common.getField);
  (0, _defineProperty2.default)(this, "gfs", common.getFields);
  (0, _defineProperty2.default)(this, "sf", common.setField);
  (0, _defineProperty2.default)(this, "sfs", common.setFields);
  (0, _defineProperty2.default)(this, "context", _context.default);
  this.appInfo = _option.appInfo;
};

function creator(option) {
  return new reducer(option);
}

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/templateFactory.js":
/*!******************************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/templateFactory.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var templateFactory =
/*#__PURE__*/
function () {
  function templateFactory() {
    (0, _classCallCheck2.default)(this, templateFactory);
    this.templates = {};
  }

  (0, _createClass2.default)(templateFactory, [{
    key: "registerTemplate",
    value: function registerTemplate(name, templateHandler) {
      if (this.templates[name]) {
        console.log("\u6A21\u677F\u5DF2\u7ECF\u5B58\u5728. name: ".concat(name, ",\u5FFD\u7565"));
        return;
      }

      this.templates[name] = templateHandler;
    }
  }, {
    key: "registerTemplates",
    value: function registerTemplates(templates) {
      var _this = this;

      if (!templates || templates.length == 0) return;
      templates.forEach(function (t) {
        return _this.registerTemplate(t.name, t.templateHandler);
      });
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(name) {
      if (!name) throw 'template name can not null';
      var nameSegs = name.split('.'),
          firstSeg = nameSegs[0];
      var template = this.templates[firstSeg];

      if (template && nameSegs.length > 1) {
        template = this.findChild(template, nameSegs);
      }

      return template;
    }
  }, {
    key: "findChild",
    value: function findChild(template, nameSegs) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = nameSegs.slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var s = _step.value;

          if (!template[s]) {
            template = undefined;
            return;
          }

          template = template[s];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return template;
    }
  }]);
  return templateFactory;
}();

var instance = new templateFactory();
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/meta-engine/lib/wrapper.js":
/*!**********************************************************!*\
  !*** ./node_modules/@whatsmk/meta-engine/lib/wrapper.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapper;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _monkeyKing = _interopRequireDefault(__webpack_require__(/*! ./monkeyKing */ "./node_modules/@whatsmk/meta-engine/lib/monkeyKing.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./node_modules/@whatsmk/meta-engine/lib/config.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! @whatsmk/utils */ "./node_modules/@whatsmk/utils/lib/index.js"));

function wrapper(option) {
  return function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        (0, _inherits2.default)(internal, _Component);

        function internal(props) {
          var _this;

          (0, _classCallCheck2.default)(this, internal);
          _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(internal).call(this, props));
          _this.state = {
            hasError: false
          };
          return _this;
        }

        (0, _createClass2.default)(internal, [{
          key: "componentWillMount",
          value: function componentWillMount() {
            this.props.componentWillMount && this.props.componentWillMount();
          }
        }, {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.props.initView && this.props.initView(this); //兼容以前版本

            this.props.componentDidMount && this.props.componentDidMount();
          }
        }, {
          key: "shouldComponentUpdate",
          value: function shouldComponentUpdate(nextProps, nextState) {
            if (this.props.shouldComponentUpdate && this.props.shouldComponentUpdate(nextProps, nextState) === true) return true;

            if (nextState.hasError != this.state.hasError) {
              return true;
            }

            for (var o in this.props) {
              if (this.props[o] != nextProps[o]) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "componentWillReceiveProps",
          value: function componentWillReceiveProps(nextProps) {
            if (this.state.hasError) {
              this.setState({
                hasError: false,
                error: undefined
              });
            }

            this.props.componentWillReceiveProps && this.props.componentWillReceiveProps(nextProps);
          }
        }, {
          key: "componentWillUpdate",
          value: function componentWillUpdate(nextProps, nextState) {
            this.props.componentWillUpdate && this.props.componentWillUpdate(nextProps, nextState);
          }
        }, {
          key: "componentDidCatch",
          value: function componentDidCatch(error, info) {
            _utils.default.exception.error(error);

            this.setState({
              hasError: true,
              error: error
            });
            this.props.componentDidCatch && this.props.componentDidCatch(error, info);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.props.unmount && this.props.unmount(); //兼容以前版本

            this.props.componentWillUnmount && this.props.componentWillUnmount();
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate() {
            this.props.componentDidUpdate && this.props.componentDidUpdate();
          }
        }, {
          key: "render",
          value: function render() {
            if (this.state.hasError) {
              return _react.default.createElement("div", {
                style: {
                  color: 'red'
                }
              }, this.state.error && this.state.error.message);
            }

            if (this.props.notRender === true || this.props._notRender === true) return null;
            if (!WrappedComponent) return null;
            if (!this.props.payload || !this.props.payload.get('data')) return null;
            if (this.props.payload.getIn(['data', '_notRender']) === true) return null;
            return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, this.props, {
              monkeyKing: _monkeyKing.default
            }));
          }
        }]);
        return internal;
      }(_react.Component)
    );
  };
}

/***/ }),

/***/ "./node_modules/@whatsmk/utils/lib/exception/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@whatsmk/utils/lib/exception/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = error;
exports.clear = clear;
exports.getExceptions = getExceptions;
exports.default = void 0;
var exceptions = [];

function error(err) {
  console.error(err);
  exceptions.unshift(err);
}

function clear() {
  exceptions.splice(0, exceptions.length);
}

function getExceptions() {
  return exceptions;
}

var _default = {
  error: error,
  clear: clear,
  getExceptions: getExceptions
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/utils/lib/expression/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@whatsmk/utils/lib/expression/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getExpressionBody = exports.isExpression = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

/**
 * 元数据中表达式需要的一些函数
 */
// {{***}} 
var reg = /^\s*\{{2}([\s\S]+)\}{2}\s*$/m; // {{{***}}}

var reg1 = /^\s*\{{3}([\s\S]+)\}{3}\s*$/m;

var isExpression = _lodash.default.memoize(function (v) {
  return reg.test(v) || reg1.test(v);
});

exports.isExpression = isExpression;

var getExpressionBody = _lodash.default.memoize(function (v) {
  if (reg1.test(v)) {
    //去掉前后{{{ }}}
    return v.replace(reg1, function (word, group) {
      return group;
    });
  }

  if (reg.test(v)) {
    //return + 去掉前后{{ }}
    return "return " + v.replace(reg, function (word, group) {
      return group;
    });
  }

  return v;
});

exports.getExpressionBody = getExpressionBody;
var _default = {
  isExpression: isExpression,
  getExpressionBody: getExpressionBody
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/utils/lib/fetch/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@whatsmk/utils/lib/fetch/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
exports.get = get;
exports.post = post;
exports.formPost = formPost;
exports.test = test;
exports.mock = mock;
exports.isMockUrl = isMockUrl;
exports.getAccessToken = getAccessToken;
exports.setAccessToken = setAccessToken;
exports.clearAccessToken = clearAccessToken;
exports.mockApi = exports.mockData = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

var mockApi = {};
exports.mockApi = mockApi;
var mockData = {};
exports.mockData = mockData;
var _options = {};

function config(options) {
  Object.assign(_options, options);

  if (options.token) {
    setAccessToken(options.token);
  }
}

function mock(url, handler) {
  /*url = {
  	'test/url1':()=>{},
  	'test/url2':()=>{}
  }*/
  if (url && (0, _typeof2.default)(url) == "object") {
    Object.keys(url).forEach(function (u) {
      mock(u, url[u]);
    });
  } //url=v1/*/
  //handler={
  //	person:()=>{}
  //}
  //
  else if (url.indexOf("*") != -1) {
      var paths = url.split('*');
      var pre = paths.shift();
      Object.keys(handler).forEach(function (key) {
        var theUrl = pre + key + paths.join('*');
        mock(theUrl, handler[key]);
      });
    } else {
      mockApi[url] = handler;
    }
}

function isMockUrl(url) {
  if (!_options.excludeMockUrls) return _options.mock;

  if (_options.excludeMockUrls.find(function (o) {
    return o == url;
  })) {
    return !_options.mock;
  } else {
    return _options.mock;
  }
}

function get(url, headers, option) {
  if (!option || option.ignoreAOP !== true) {
    before();
  }

  if (isMockUrl(url)) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          if (getAccessToken()) {
            headers = headers ? (0, _objectSpread2.default)({}, headers, {
              token: getAccessToken()
            }) : {
              token: getAccessToken()
            };
          }

          var resp = mockApi[url](headers);

          if (resp.then && resp.catch) {
            resp.then(function (r) {
              resp = after(resp, url, undefined, headers);
              return resolve(resp);
            }).catch(reject);
            return resp;
          } else if (!option || option.ignoreAOP !== true) {
            resp = after(resp, url, undefined, headers);
          }

          resolve(resp);
        } catch (e) {
          reject(e);
        }
      }, 0);
    });
  }

  headers = {
    method: 'GET',
    headers: (0, _objectSpread2.default)({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, headers, {
      token: getAccessToken(),
      "Authorization": getAccessToken() ? "Bearer " + getAccessToken() : ''
    })
  };
  return new Promise(function (resolve, reject) {
    fetch(url, headers).then(function (response) {
      var json = {};
      var contentType = response.headers.get('Content-Type').split(";")[0];

      if (contentType == 'application/json') {
        json = response.json();
      } else if (contentType == 'application/octet-stream') {
        response.blob().then(function (blob) {
          var a = document.createElement('a');
          var url = window.URL.createObjectURL(blob); // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)

          var name = response.headers.get('Content-Disposition');
          name = name.split('name=')[1].split(';')[0];
          a.href = url;
          a.download = name;
          a.click();
          window.URL.revokeObjectURL(url);
        });
      }

      return json;
    }).then(function (responseJson) {
      responseJson = after(responseJson, url, undefined, headers);
      resolve(responseJson);
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function post(url, data, headers, option) {
  if (!option || option.ignoreAOP !== true) {
    before(url, data, headers);
  }

  if (isMockUrl(url)) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          if (getAccessToken()) {
            headers = headers ? (0, _objectSpread2.default)({}, headers, {
              token: getAccessToken()
            }) : {
              token: getAccessToken()
            };
          }

          var mockFun = mockApi[url];

          if (!mockFun || typeof mockFun != 'function') {
            throw url + ':对应的handler无效';
          }

          var resp = mockFun(data, headers);

          if (resp.then && resp.catch) {
            resp.then(function (r) {
              r = after(r, url, data, headers);
              return resolve(r);
            }).catch(reject);
            return resp;
          } else if (!option || option.ignoreAOP !== true) {
            resp = after(resp, url, data, headers);
          }

          resolve(resp);
        } catch (e) {
          reject(e);
        }
      }, 0);
    });
  }

  headers = {
    method: 'POST',
    headers: (0, _objectSpread2.default)({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, headers, {
      token: getAccessToken(),
      "Authorization": getAccessToken() ? "Bearer " + getAccessToken() : ''
    }),
    body: JSON.stringify(data)
  };
  return new Promise(function (resolve, reject) {
    fetch(url, headers).then(function (response) {
      var json = {};
      var contentType = response.headers.get('Content-Type').split(";")[0];
      var contentDisposition = response.headers.get('Content-Disposition');

      if (contentType == 'application/json') {
        json = response.json();
      } else if (contentDisposition != null) {
        response.blob().then(function (blob) {
          var a = document.createElement('a');
          var url = window.URL.createObjectURL(blob); // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)

          var name = response.headers.get('Content-Disposition');
          name = name.split('name=')[1].split(';')[0];
          a.href = url;
          a.download = decodeURI(name);
          a.click();
          window.URL.revokeObjectURL(url);
        });
      }

      return json;
    }).then(function (responseJson) {
      responseJson = after(responseJson, url, data, headers);
      resolve(responseJson);
    }).catch(function (error) {
      return reject(error);
    });
  });
}

function formPost(url, data, isFree) {
  data = data || {};
  var accessToken = getAccessToken(); //toke in sessionStorage

  if (!!accessToken && !isFree) {
    data.token = accessToken;
  }

  var postForm = document.createElement("form"); //表单对象

  postForm.method = "post";
  postForm.action = url;
  postForm.target = "_blank";
  var keys = Object.keys(data);

  for (var _i = 0; _i < keys.length; _i++) {
    var k = keys[_i];
    var emailInput = document.createElement("input"); //email input

    emailInput.setAttribute("name", k);
    emailInput.setAttribute("value", data[k]);
    postForm.appendChild(emailInput);
  }

  document.body.appendChild(postForm);
  postForm.submit();
  document.body.removeChild(postForm);
}

function test(url, data, result) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(result);
    }, 0);
  });
}

function before(url, data, headers) {
  if (_options.before) {
    _options.before(url, data, headers);
  }
}

function after(response, url, data, headers) {
  if (_options.after) {
    return _options.after(response, url, data, headers);
  }

  return response;
}

function getAccessToken() {
  return sessionStorage['_accessToken'] || '';
}

function setAccessToken(token) {
  sessionStorage['_accessToken'] = token;
}

function clearAccessToken() {
  sessionStorage['_accessToken'] = '';
}

var _default = {
  config: config,
  get: get,
  post: post,
  formPost: formPost,
  test: test,
  mockData: mockData,
  mock: mock,
  mockApi: mockApi,
  isMockUrl: isMockUrl,
  getAccessToken: getAccessToken,
  setAccessToken: setAccessToken,
  clearAccessToken: clearAccessToken
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/utils/lib/history/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@whatsmk/utils/lib/history/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;
exports.listen = listen;
exports.unlisten = unlisten;
exports.getChildApp = getChildApp;
exports.pushChildApp = pushChildApp;
exports.goBack = goBack;
exports.location = exports.default = void 0;

var history = _interopRequireWildcard(__webpack_require__(/*! history */ "./node_modules/history/es/index.js"));

var hashHistory;
var listerners = {},
    _options = {}; //{isAlias:()=>{}, toAlias:()=>{}, toRealName:()=>{}}

function setHistoryInstance() {
  if (!hashHistory) hashHistory = history.createHashHistory();
}

function config(options) {
  Object.assign(_options, options);
}

function getAlias(pathName) {
  if (!_options.isAlias || !_options.toAlias || _options.isAlias(pathName)) return pathName;
  return _options.toAlias(pathName);
}

function getRealName(pathName) {
  if (!_options.isAlias || !_options.toRealName || !_options.isAlias(pathName)) return pathName;
  return _options.toRealName(pathName);
}

function listen(selfApp, handler) {
  setHistoryInstance();

  if (!listerners[selfApp]) {
    listerners[selfApp] = [];
  }

  var h = listerners[selfApp].find(function (o) {
    return o.listen == handler;
  });

  if (!h) {
    h = handler;
    var unlisten = hashHistory.listen(function (location, action) {
      var childApp = getChildApp(selfApp);
      handler(childApp, location, action);
    });
    listerners[selfApp].push({
      listen: h,
      unlisten: unlisten
    });
  }
}

function unlisten(selfApp, handler) {
  if (!listerners[selfApp]) return;
  var index = listerners[selfApp].findIndex(function (o) {
    return o.listen == handler;
  });
  if (index == -1) return;
  listerners[selfApp][index].unlisten();
  listerners[selfApp].splice(index, 1);
}

function getChildApp(selfApp) {
  setHistoryInstance();
  var pathName = hashHistory.location.pathname + hashHistory.location.search;
  pathName = getRealName(pathName);
  if (!pathName || pathName == '/' || pathName.indexOf(selfApp) == -1) return;
  var segs = pathName.split('/');
  var selfIndex = segs.findIndex(function (s) {
    return s.indexOf(selfApp) != -1;
  });
  if (segs.length - 1 == selfIndex) return;
  var ret = segs[selfIndex + 1];
  return ret == '/' ? undefined : ret;
}

function pushChildApp(selfApp, childApp) {
  setHistoryInstance();
  var pathName = hashHistory.location.pathname;
  pathName = getRealName(pathName);

  if (!pathName || pathName == '/' || pathName.indexOf(selfApp) == -1) {
    hashHistory.push(getAlias("/".concat(selfApp, "/").concat(childApp)));
    return;
  }

  var segs = pathName.split('/');
  var selfIndex = segs.findIndex(function (s) {
    return s.indexOf(selfApp) != -1;
  });

  if (segs.length - 1 == selfIndex) {
    segs.push(childApp);
  } else {
    segs.splice(selfIndex + 1, segs.length - selfIndex, childApp); //segs[selfIndex + 1] = childApp
  }

  if (pathName == segs.join('/')) return;
  hashHistory.push(getAlias(segs.join('/')));
}

function goBack() {
  hashHistory.goBack();
}

var location = hashHistory ? hashHistory.location : null;
exports.location = location;
var _default = {
  config: config,
  listen: listen,
  unlisten: unlisten,
  getChildApp: getChildApp,
  pushChildApp: pushChildApp,
  goBack: goBack,
  location: location
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/utils/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@whatsmk/utils/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetch", {
  enumerable: true,
  get: function get() {
    return _fetch.default;
  }
});
Object.defineProperty(exports, "path", {
  enumerable: true,
  get: function get() {
    return _path.default;
  }
});
Object.defineProperty(exports, "expression", {
  enumerable: true,
  get: function get() {
    return _expression.default;
  }
});
Object.defineProperty(exports, "string", {
  enumerable: true,
  get: function get() {
    return _string.default;
  }
});
Object.defineProperty(exports, "exception", {
  enumerable: true,
  get: function get() {
    return _exception.default;
  }
});
Object.defineProperty(exports, "history", {
  enumerable: true,
  get: function get() {
    return _history.default;
  }
});
exports.default = void 0;

var _fetch = _interopRequireDefault(__webpack_require__(/*! ./fetch */ "./node_modules/@whatsmk/utils/lib/fetch/index.js"));

var _path = _interopRequireDefault(__webpack_require__(/*! ./path */ "./node_modules/@whatsmk/utils/lib/path/index.js"));

var _expression = _interopRequireDefault(__webpack_require__(/*! ./expression */ "./node_modules/@whatsmk/utils/lib/expression/index.js"));

var _string = _interopRequireDefault(__webpack_require__(/*! ./string */ "./node_modules/@whatsmk/utils/lib/string/index.js"));

var _exception = _interopRequireDefault(__webpack_require__(/*! ./exception */ "./node_modules/@whatsmk/utils/lib/exception/index.js"));

var _history = _interopRequireDefault(__webpack_require__(/*! ./history */ "./node_modules/@whatsmk/utils/lib/history/index.js"));

var _default = {
  fetch: _fetch.default,
  string: _string.default,
  path: _path.default,
  expression: _expression.default,
  exception: _exception.default,
  history: _history.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/utils/lib/path/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@whatsmk/utils/lib/path/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.parsePath = exports.existsParamsInPath = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

/**
 * [是否存在参数]
 * @param  {[type]} path [路径]
 * @return {[type]}      [是否存在参数]
 */
var existsParamsInPath = function existsParamsInPath(path) {
  return /,/.test(path);
};
/**
 * [解析路径]
 * @param  {[type]} path [路径]
 * @return {[type]}      [路径+参数数组]
 */


exports.existsParamsInPath = existsParamsInPath;

var parsePath = _lodash.default.memoize(function (path) {
  if (!path) return;

  if (path.indexOf(',') == -1) {
    return {
      path: path.replace(/\s/g, '')
    };
  } else {
    var segments = path.split(","),
        vars = segments.slice(1);
    return {
      path: segments[0].replace(/\s/g, ''),
      vars: vars.map(function (o) {
        return o.replace(/\s/g, '');
      })
    };
  }
});

exports.parsePath = parsePath;
var _default = {
  existsParamsInPath: existsParamsInPath,
  parsePath: parsePath
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@whatsmk/utils/lib/string/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@whatsmk/utils/lib/string/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.trim = trim;
exports.toJson = toJson;
exports.default = void 0;

function trimLeft(str) {
  return str.replace(/(^\s*)/g, "");
}

function trimRight(str) {
  return str.replace(/(\s*$)/g, "");
}

function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

function toJson(str) {
  return new Function("return " + str)();
}

var _default = {
  trimLeft: trimLeft,
  trimRight: trimRight,
  trim: trim,
  toJson: toJson
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/history/es/DOMUtils.js":
/*!*********************************************!*\
  !*** ./node_modules/history/es/DOMUtils.js ***!
  \*********************************************/
/*! exports provided: canUseDOM, addEventListener, removeEventListener, getConfirmation, supportsHistory, supportsPopStateOnHashChange, supportsGoWithoutReloadUsingHash, isExtraneousPopstateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmation", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPopStateOnHashChange", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsGoWithoutReloadUsingHash", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtraneousPopstateEvent", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/history/es/LocationUtils.js":
/*!**************************************************!*\
  !*** ./node_modules/history/es/LocationUtils.js ***!
  \**************************************************/
/*! exports provided: createLocation, locationsAreEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/index.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/index.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_2__["parsePath"])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_0__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/es/PathUtils.js":
/*!**********************************************!*\
  !*** ./node_modules/history/es/PathUtils.js ***!
  \**********************************************/
/*! exports provided: addLeadingSlash, stripLeadingSlash, hasBasename, stripBasename, stripTrailingSlash, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLeadingSlash", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLeadingSlash", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBasename", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripBasename", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripTrailingSlash", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/history/es/createBrowserHistory.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/es/createBrowserHistory.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "./node_modules/history/es/DOMUtils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsHistory"])();
  var needsHashChangeListener = !Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsPopStateOnHashChange"])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__["getConfirmation"] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripBasename"])(path, basename);

    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["isExtraneousPopstateEvent"])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createBrowserHistory);

/***/ }),

/***/ "./node_modules/history/es/createHashHistory.js":
/*!******************************************************!*\
  !*** ./node_modules/history/es/createHashHistory.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "./node_modules/history/es/DOMUtils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripLeadingSlash"])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripLeadingSlash"],
    decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"]
  },
  slash: {
    encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"],
    decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsGoWithoutReloadUsingHash"])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__["getConfirmation"] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripBasename"])(path, basename);

    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["locationsAreEqual"])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location));
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createHashHistory);

/***/ }),

/***/ "./node_modules/history/es/createMemoryHistory.js":
/*!********************************************************!*\
  !*** ./node_modules/history/es/createMemoryHistory.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(entry, undefined, createKey()) : Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils__WEBPACK_IMPORTED_MODULE_1__["createPath"];

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createMemoryHistory);

/***/ }),

/***/ "./node_modules/history/es/createTransitionManager.js":
/*!************************************************************!*\
  !*** ./node_modules/history/es/createTransitionManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning__WEBPACK_IMPORTED_MODULE_0___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createTransitionManager);

/***/ }),

/***/ "./node_modules/history/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/history/es/index.js ***!
  \******************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBrowserHistory */ "./node_modules/history/es/createBrowserHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createHashHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHashHistory */ "./node_modules/history/es/createHashHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return _createHashHistory__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/history/es/createMemoryHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"]; });

/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _PathUtils__WEBPACK_IMPORTED_MODULE_4__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return _PathUtils__WEBPACK_IMPORTED_MODULE_4__["createPath"]; });











/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/resolve-pathname/index.js":
/*!************************************************!*\
  !*** ./node_modules/resolve-pathname/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "./node_modules/value-equal/index.js":
/*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, appLoader, utils, metaEngine, init, config, load, getComponent, setHoc, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponent", function() { return getComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHoc", function() { return setHoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @whatsmk/app-loader */ "./node_modules/@whatsmk/app-loader/lib/index.js");
/* harmony import */ var _whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "appLoader", function() { return _whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _whatsmk_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @whatsmk/utils */ "./node_modules/@whatsmk/utils/lib/index.js");
/* harmony import */ var _whatsmk_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_whatsmk_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _whatsmk_utils__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @whatsmk/meta-engine */ "./node_modules/@whatsmk/meta-engine/lib/index.js");
/* harmony import */ var _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "metaEngine", function() { return _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default.a; });







 //默认配置fetch

_whatsmk_utils__WEBPACK_IMPORTED_MODULE_6___default.a.fetch.config({
  mock: true
});
_whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a.init({
  defaultComponent: _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default.a.defaultComponent,
  defaultAction: _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default.a.defaultAction,
  defaultReducer: _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default.a.defaultReducer
});
var Hoc;
var createElement = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
var getComponent = _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default.a.componentFactory.getComponent;
var isProduction = false; //初始化MK环境

function init(option) {
  _whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a.init(option);
  _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default.a.componentFactory.registerComponent("AppLoader", _whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a.AppLoader);
} //配置元数据引擎


function config(option) {
  _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default.a.config(option);
} //加载app


function load(_x) {
  return _load.apply(this, arguments);
} //设置高阶组件


function _load() {
  _load = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(app) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a.loadApp(app, isProduction);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _load.apply(this, arguments);
}

function setHoc(hoc) {
  Hoc = hoc;
}

function render(_x2, _x3) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(appName, targetDomId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (_whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a.existsApp(appName)) {
              _context2.next = 3;
              break;
            }

            _context2.next = 3;
            return _whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a.loadApp(appName, isProduction);

          case 3:
            if (Hoc) {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["render"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Hoc, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
                store: window.__mk_store__
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a.AppLoader, {
                name: appName
              }))), document.getElementById(targetDomId));
            } else {
              Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["render"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
                store: window.__mk_store__
              }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a.AppLoader, {
                name: appName
              })), document.getElementById(targetDomId));
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _render.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  appLoader: _whatsmk_app_loader__WEBPACK_IMPORTED_MODULE_5___default.a,
  utils: _whatsmk_utils__WEBPACK_IMPORTED_MODULE_6___default.a,
  metaEngine: _whatsmk_meta_engine__WEBPACK_IMPORTED_MODULE_7___default.a,
  init: init,
  config: config,
  load: load,
  getComponent: getComponent,
  setHoc: setHoc,
  createElement: createElement,
  render: render
});


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "immutable":
/*!******************************************************************************************************!*\
  !*** external {"root":"Immutable","commonjs2":"immutable","commonjs":"immutable","amd":"immutable"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"root":"_","commonjs2":"lodash","commonjs":"lodash","amd":"lodash"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "react-redux":
/*!*************************************************************************************************************!*\
  !*** external {"root":"ReactRedux","commonjs2":"react-redux","commonjs":"react-redux","amd":"react-redux"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ }),

/***/ "redux":
/*!**************************************************************************************!*\
  !*** external {"root":"Redux","commonjs2":"redux","commonjs":"redux","amd":"redux"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;

/***/ })

/******/ });
});
//# sourceMappingURL=mk-core.js.map