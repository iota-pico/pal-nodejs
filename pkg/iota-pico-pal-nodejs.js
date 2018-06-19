(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pal-nodejs", [], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pal-nodejs"] = factory();
	else
		root["IotaPicoPalNodejs"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../core/dist/error/coreError.js":
/*!***************************************!*\
  !*** ../core/dist/error/coreError.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var jsonHelper_1 = __webpack_require__(/*! ../helpers/jsonHelper */ "../core/dist/helpers/jsonHelper.js");

var stringHelper_1 = __webpack_require__(/*! ../helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");
/**
 * A core implementation of an error.
 */


var CoreError =
/*#__PURE__*/
function (_extendableBuiltin2) {
  _inherits(CoreError, _extendableBuiltin2);

  /**
   * Create an instance of CoreError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function CoreError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, CoreError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CoreError).call(this, message));
    _this.additional = additional ? additional : {};
    _this.innerError = innerError;
    _this.domain = "Core";
    return _this;
  }
  /**
   * Check if an object could be a CoreError.
   * @param obj The object to check if it is a CoreError.
   * @returns true If the tested object is a CoreError.
   */


  _createClass(CoreError, [{
    key: "format",

    /**
     * Format the error to a readable version.
     * @returns Formatted version of the error.
     */
    value: function format() {
      var _this2 = this;

      var out = "";

      if (!stringHelper_1.StringHelper.isEmpty(this.domain)) {
        out += "".concat(this.domain, ": ");
      }

      if (!stringHelper_1.StringHelper.isEmpty(this.message)) {
        out += "".concat(this.message);
      }

      var keys = Object.keys(this.additional);

      if (keys.length > 0) {
        if (out.length > 0) {
          out += "\n";
        }

        keys.forEach(function (key) {
          out += "\t".concat(key, ": ").concat(jsonHelper_1.JsonHelper.stringify(_this2.additional[key]), "\n");
        });
      }

      return out;
    }
  }], [{
    key: "isError",
    value: function isError(obj) {
      return obj !== undefined && obj !== null && _typeof(obj) === "object" && "message" in obj && "additional" in obj;
    }
  }]);

  return CoreError;
}(_extendableBuiltin(Error));

exports.CoreError = CoreError;

/***/ }),

/***/ "../core/dist/error/networkError.js":
/*!******************************************!*\
  !*** ../core/dist/error/networkError.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! ./coreError */ "../core/dist/error/coreError.js");
/**
 * A network implementation of an error.
 */


var NetworkError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(NetworkError, _coreError_1$CoreErro);

  /**
   * Create an instance of NetworkError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function NetworkError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, NetworkError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NetworkError).call(this, message, additional, innerError));
    _this.domain = "Network";
    return _this;
  }

  return NetworkError;
}(coreError_1.CoreError);

exports.NetworkError = NetworkError;

/***/ }),

/***/ "../core/dist/error/platformError.js":
/*!*******************************************!*\
  !*** ../core/dist/error/platformError.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(/*! ./coreError */ "../core/dist/error/coreError.js");
/**
 * A platform implementation of an error.
 */


var PlatformError =
/*#__PURE__*/
function (_coreError_1$CoreErro) {
  _inherits(PlatformError, _coreError_1$CoreErro);

  /**
   * Create an instance of PlatformError.
   * @param message The message for the error.
   * @param additional Additional details about the error.
   * @param innerError Add information from inner error if there was one.
   */
  function PlatformError(message, additional, innerError) {
    var _this;

    _classCallCheck(this, PlatformError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlatformError).call(this, message, additional, innerError));
    _this.domain = "Platform";
    return _this;
  }

  return PlatformError;
}(coreError_1.CoreError);

exports.PlatformError = PlatformError;

/***/ }),

/***/ "../core/dist/factories/factoryBase.js":
/*!*********************************************!*\
  !*** ../core/dist/factories/factoryBase.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */

var FactoryBase =
/*#__PURE__*/
function () {
  function FactoryBase() {
    _classCallCheck(this, FactoryBase);

    /* @internal */
    this._types = {};
  }
  /**
   * Register a new type with the factory.
   * @param name The name of the type to register.
   * @param typeConstructor The constructor for the type.
   */


  _createClass(FactoryBase, [{
    key: "register",
    value: function register(name, typeConstructor) {
      this.getInstance()._types[name] = typeConstructor;
    }
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      delete this.getInstance()._types[name];
    }
    /**
     * Does the factory contain a specific type.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "exists",
    value: function exists(name) {
      return this.getInstance()._types[name] !== undefined;
    }
    /**
     * List the types in the factory.
     * @param name The name of the type to look for.
     * @returns True if the type exists.
     */

  }, {
    key: "types",
    value: function types() {
      return Object.keys(this.getInstance()._types);
    }
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @param args Any parameters to pass to the constructor.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */

  }, {
    key: "create",
    value: function create(name) {
      var instance = this.getInstance();

      if (instance._types[name]) {
        var _instance$_types;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_instance$_types = instance._types)[name].apply(_instance$_types, args);
      } else {
        return undefined;
      }
    }
  }]);

  return FactoryBase;
}();

exports.FactoryBase = FactoryBase;

/***/ }),

/***/ "../core/dist/factories/networkClientFactory.js":
/*!******************************************************!*\
  !*** ../core/dist/factories/networkClientFactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "../core/dist/factories/factoryBase.js");
/**
 * Factory to generate network clients.
 */


var NetworkClientFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(NetworkClientFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function NetworkClientFactory() {
    _classCallCheck(this, NetworkClientFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(NetworkClientFactory).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(NetworkClientFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return NetworkClientFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!NetworkClientFactory._instance) {
        NetworkClientFactory._instance = new NetworkClientFactory();
      }

      return NetworkClientFactory._instance;
    }
  }]);

  return NetworkClientFactory;
}(factoryBase_1.FactoryBase);

exports.NetworkClientFactory = NetworkClientFactory;

/***/ }),

/***/ "../core/dist/factories/platformCryptoFactory.js":
/*!*******************************************************!*\
  !*** ../core/dist/factories/platformCryptoFactory.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "../core/dist/factories/factoryBase.js");
/**
 * Factory to generate rng service.
 */


var PlatformCryptoFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(PlatformCryptoFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function PlatformCryptoFactory() {
    _classCallCheck(this, PlatformCryptoFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlatformCryptoFactory).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(PlatformCryptoFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return PlatformCryptoFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!PlatformCryptoFactory._instance) {
        PlatformCryptoFactory._instance = new PlatformCryptoFactory();
      }

      return PlatformCryptoFactory._instance;
    }
  }]);

  return PlatformCryptoFactory;
}(factoryBase_1.FactoryBase);

exports.PlatformCryptoFactory = PlatformCryptoFactory;

/***/ }),

/***/ "../core/dist/factories/rngServiceFactory.js":
/*!***************************************************!*\
  !*** ../core/dist/factories/rngServiceFactory.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(/*! ./factoryBase */ "../core/dist/factories/factoryBase.js");
/**
 * Factory to generate rng service.
 */


var RngServiceFactory =
/*#__PURE__*/
function (_factoryBase_1$Factor) {
  _inherits(RngServiceFactory, _factoryBase_1$Factor);

  /**
   * Don't allow manual construction of the factory.
   * @internal
   */
  function RngServiceFactory() {
    _classCallCheck(this, RngServiceFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(RngServiceFactory).call(this));
  }
  /**
   * Get the instance of the factory.
   * @returns The factory instance.
   */


  _createClass(RngServiceFactory, [{
    key: "getInstance",

    /* @internal */
    value: function getInstance() {
      return RngServiceFactory.instance();
    }
  }], [{
    key: "instance",
    value: function instance() {
      if (!RngServiceFactory._instance) {
        RngServiceFactory._instance = new RngServiceFactory();
      }

      return RngServiceFactory._instance;
    }
  }]);

  return RngServiceFactory;
}(factoryBase_1.FactoryBase);

exports.RngServiceFactory = RngServiceFactory;

/***/ }),

/***/ "../core/dist/helpers/jsonHelper.js":
/*!******************************************!*\
  !*** ../core/dist/helpers/jsonHelper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Json helper methods.
 */

var JsonHelper =
/*#__PURE__*/
function () {
  function JsonHelper() {
    _classCallCheck(this, JsonHelper);
  }

  _createClass(JsonHelper, null, [{
    key: "stringify",

    /**
     * Stringify an object with recursion breaking.
     * @param value A JavaScript value, usually an object or array, to be converted.
     * @param replacer A function that transforms the results.
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @returns String version of the object.
     */
    value: function stringify(value, replacer, space) {
      // eliminates any recursion in the stringify
      var cache = [];

      var recusionReplacer = function recusionReplacer(key, replaceValue) {
        if (_typeof(replaceValue) === "object" && value !== null && replaceValue !== undefined) {
          if (cache.indexOf(replaceValue) !== -1) {
            // circular reference found, discard key
            return;
          } else {
            cache.push(replaceValue);
          }
        }

        return replacer ? replacer(key, replaceValue) : replaceValue;
      };

      return JSON.stringify(value, recusionReplacer, space);
    }
  }]);

  return JsonHelper;
}();

exports.JsonHelper = JsonHelper;

/***/ }),

/***/ "../core/dist/helpers/numberHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/numberHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Number helper methods.
 */

var NumberHelper =
/*#__PURE__*/
function () {
  function NumberHelper() {
    _classCallCheck(this, NumberHelper);
  }

  _createClass(NumberHelper, null, [{
    key: "isInteger",

    /**
     * Is the value an integer.
     * @param value Object to test for its integerness.
     * @returns True if the object is a integer.
     */
    value: function isInteger(value) {
      return Number.isInteger(value) && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a number.
     * @param value Object to test for its numberyness.
     * @returns True if the object is a number.
     */

  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return value !== undefined && value !== null && typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
    }
    /**
     * Is the value a float number formatted as a string, can be used for big numbers that would overflow parseFloat.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isFloatString",
    value: function isFloatString(value) {
      return /^-?\d*\.?\d+$/.test(value);
    }
    /**
     * Is the value a integer number formatted as a string, can be used for big numbers that would overflow parseInt.
     * @param value The value to check
     * @returns True if the number is formatted correctly.
     */

  }, {
    key: "isIntegerString",
    value: function isIntegerString(value) {
      return /^-?\d+$/.test(value);
    }
  }]);

  return NumberHelper;
}();

exports.NumberHelper = NumberHelper;

/***/ }),

/***/ "../core/dist/helpers/objectHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/objectHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Object helper methods.
 */

var ObjectHelper =
/*#__PURE__*/
function () {
  function ObjectHelper() {
    _classCallCheck(this, ObjectHelper);
  }

  _createClass(ObjectHelper, null, [{
    key: "isEmpty",

    /**
     * Is the value empty.
     * @param value Object to test.
     * @returns True if the value is empty.
     */
    value: function isEmpty(value) {
      return value === null || value === undefined;
    }
    /**
     * Is the value an object.
     * @param value Object to test.
     * @returns True if the value is an object.
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return value === null || value === undefined ? false : _typeof(value) === "object" && !Array.isArray(value);
    }
    /**
     * Is the value an object if given type.
     * @param value Object to test.
     * @param typeConstructor A callback method which returns an instance of the object.
     * @returns True if the value is an object of the specified type.
     */

  }, {
    key: "isType",
    value: function isType(value, typeConstructor) {
      var valueClassName = ObjectHelper.getClassName(value);
      return valueClassName !== undefined && valueClassName === ObjectHelper.getClassName(typeConstructor);
    }
    /**
     * Get the class name of an object if it has one.
     * @param object The object to get the class name for.
     * @returns The class name if it has one or undefined if not.
     */

  }, {
    key: "getClassName",
    value: function getClassName(object) {
      if (object === null || object === undefined) {
        return undefined;
      } else {
        var _constructor = typeof object === "function" ? object.toString() : object.constructor.toString();

        var results = _constructor.match(/\w+/g);

        return results && results.length > 1 ? results[1] : undefined;
      }
    }
  }]);

  return ObjectHelper;
}();

exports.ObjectHelper = ObjectHelper;

/***/ }),

/***/ "../core/dist/helpers/stringHelper.js":
/*!********************************************!*\
  !*** ../core/dist/helpers/stringHelper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String helper methods.
 */

var StringHelper =
/*#__PURE__*/
function () {
  function StringHelper() {
    _classCallCheck(this, StringHelper);
  }

  _createClass(StringHelper, null, [{
    key: "isString",

    /**
     * Is the value a string.
     * @param value Object to test for its stringyness.
     * @returns True if the object is a string.
     */
    value: function isString(value) {
      return value === null || value === undefined ? false : Object.prototype.toString.call(value) === "[object String]";
    }
    /**
     * Is the value a string that is empty.
     * @param value Object to test for its no emptyness.
     * @returns True if the object is an empty string.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !StringHelper.isString(value) || value.length === 0;
    }
    /**
     * Is the string all ASCII characters.
     * @param value string to test if is is ASCII.
     * @returns True if the object is all ASCII.
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      return value === null || value === undefined ? false : /^[\x00-\xFF]*$/.test(value);
    }
    /**
     * Encode non ASCII characters with control characters.
     * @param value The string value to escape.
     * @returns The escaped version of the string.
     */

  }, {
    key: "encodeNonASCII",
    value: function encodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/[\u007F-\uFFFF]/g, function (chr) {
        return "\\u".concat("0000".concat(chr.charCodeAt(0).toString(16)).substr(-4));
      }) : undefined;
    }
    /**
     * Decode control characters to ASCII.
     * @param value The encoded string to convert back to ASCII.
     * @returns The decoded version of the string.
     */

  }, {
    key: "decodeNonASCII",
    value: function decodeNonASCII(value) {
      return StringHelper.isString(value) ? value.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
      }) : undefined;
    }
  }]);

  return StringHelper;
}();

exports.StringHelper = StringHelper;

/***/ }),

/***/ "../core/dist/loggers/nullLogger.js":
/*!******************************************!*\
  !*** ../core/dist/loggers/nullLogger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Implementation of ILogger which is silent.
 */

var NullLogger =
/*#__PURE__*/
function () {
  function NullLogger() {
    _classCallCheck(this, NullLogger);
  }

  _createClass(NullLogger, [{
    key: "banner",

    /**
     * Send banner to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */
    value: function banner(message) {}
    /**
     * Send log to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "log",
    value: function log(message) {}
    /**
     * Send information to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "info",
    value: function info(message) {}
    /**
     * Send warning to the logger.
     * @param message The message to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "warning",
    value: function warning(message) {}
    /**
     * Send error to the logger.
     * @param message The message to log.
     * @param err An error object to log.
     * @param args Additional parameters to log.
     */

  }, {
    key: "error",
    value: function error(message, err) {}
  }]);

  return NullLogger;
}();

exports.NullLogger = NullLogger;

/***/ }),

/***/ "./dist/crypto/platformCrypto.js":
/*!***************************************!*\
  !*** ./dist/crypto/platformCrypto.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var platformError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/platformError */ "../core/dist/error/platformError.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");

var crypto = __importStar(__webpack_require__(/*! crypto */ "crypto"));
/**
 * Implementation of a platform crypto for use in NodeJS.
 */


var PlatformCrypto =
/*#__PURE__*/
function () {
  function PlatformCrypto() {
    _classCallCheck(this, PlatformCrypto);
  }

  _createClass(PlatformCrypto, [{
    key: "encrypt",

    /**
     * Encrypt the given data.
     * @param privateKey The key to use for encrypting data.
     * @param data The data to encrypt.
     * @returns The encrypted data.
     */
    value: function encrypt(privateKey, data) {
      if (stringHelper_1.StringHelper.isEmpty(privateKey)) {
        throw new platformError_1.PlatformError("The privateKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var buffer = new Buffer(data, "ascii");
      var encrypted = crypto.privateEncrypt(privateKey, buffer);
      return encrypted.toString("hex");
    }
    /**
     * Decrypt the given data.
     * @param publicKey The key to use for decrypting data.
     * @param data The data to decrypt.
     * @returns The decrypted data.
     */

  }, {
    key: "decrypt",
    value: function decrypt(publicKey, data) {
      if (stringHelper_1.StringHelper.isEmpty(publicKey)) {
        throw new platformError_1.PlatformError("The publicKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var buffer = new Buffer(data, "hex");
      var decrypted = crypto.publicDecrypt(publicKey, buffer);
      return decrypted.toString("ascii");
    }
    /**
     * Sign the given data.
     * @param privateKey The key to use for signing data.
     * @param data The data to sign.
     * @returns The signature.
     */

  }, {
    key: "sign",
    value: function sign(privateKey, data) {
      if (stringHelper_1.StringHelper.isEmpty(privateKey)) {
        throw new platformError_1.PlatformError("The privateKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var signer = crypto.createSign("RSA-SHA256");
      signer.update(data);
      return signer.sign(privateKey, "hex");
    }
    /**
     * Verify the given data.
     * @param publicKey The key to use for verifying data.
     * @param data The data to verify.
     * @param signature The signature to verify againt the data.
     * @returns True if the verification is successful.
     */

  }, {
    key: "verify",
    value: function verify(publicKey, data, signature) {
      if (stringHelper_1.StringHelper.isEmpty(publicKey)) {
        throw new platformError_1.PlatformError("The publicKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(signature)) {
        throw new platformError_1.PlatformError("The signature must be a non empty string");
      }

      var verifier = crypto.createVerify("RSA-SHA256");
      verifier.update(data);
      return verifier.verify(publicKey, signature, "hex");
    }
    /**
     * Hash the data.
     * @param algo The algorithm to use.
     * @param data The data to hash.
     * @param dataType The type of the input data utf8, ascii, latin1.
     * @param encoding The encoding to return the data latin1, hex, base64.
     * @returns The hash of the data.
     */

  }, {
    key: "hash",
    value: function hash(algo, data, dataType, encoding) {
      if (stringHelper_1.StringHelper.isEmpty(algo)) {
        throw new platformError_1.PlatformError("The algo must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      return crypto.createHash(algo).update(data, dataType).digest(encoding);
    }
    /**
     * HMAC the data.
     * @param algo The algorithm to use.
     * @param key The key to hash the data with.
     * @param data The data to hash.
     * @param dataType The type of the input data utf8, ascii, latin1.
     * @param encoding The encoding to return the data latin1, hex, base64.
     * @returns The hash of the data.
     */

  }, {
    key: "hmac",
    value: function hmac(algo, key, data, dataType, encoding) {
      if (stringHelper_1.StringHelper.isEmpty(algo)) {
        throw new platformError_1.PlatformError("The algo must be a non empty string");
      }

      if (objectHelper_1.ObjectHelper.isEmpty(key)) {
        throw new platformError_1.PlatformError("The key must be non empty");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      return crypto.createHmac(algo, key).update(data, dataType).digest(encoding);
    }
  }]);

  return PlatformCrypto;
}();

exports.PlatformCrypto = PlatformCrypto;

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combined index of all the modules.
 */

__export(__webpack_require__(/*! ./pal */ "./dist/pal.js"));

__export(__webpack_require__(/*! ./crypto/platformCrypto */ "./dist/crypto/platformCrypto.js"));

__export(__webpack_require__(/*! ./network/networkClient */ "./dist/network/networkClient.js"));

__export(__webpack_require__(/*! ./services/rngService */ "./dist/services/rngService.js"));

/***/ }),

/***/ "./dist/network/networkClient.js":
/*!***************************************!*\
  !*** ./dist/network/networkClient.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var networkError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/networkError */ "../core/dist/error/networkError.js");

var numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "../core/dist/helpers/numberHelper.js");

var objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "../core/dist/helpers/objectHelper.js");

var stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "../core/dist/helpers/stringHelper.js");

var nullLogger_1 = __webpack_require__(/*! @iota-pico/core/dist/loggers/nullLogger */ "../core/dist/loggers/nullLogger.js");

var http = __importStar(__webpack_require__(/*! http */ "http"));

var https = __importStar(__webpack_require__(/*! https */ "https"));
/**
 * Implementation of a node client for use in NodeJS.
 */


var NetworkClient =
/*#__PURE__*/
function () {
  /**
   * Create an instance of NetworkClient.
   * @param networkEndPoint The endpoint to use for the client.
   * @param logger Logger to send communication info to.
   * @param timeoutMs The timeout in ms before aborting.
   * @param httpClientRequest The client request object, usually not required.
   */
  function NetworkClient(networkEndPoint, logger) {
    var timeoutMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var httpClientRequest = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, NetworkClient);

    if (objectHelper_1.ObjectHelper.isEmpty(networkEndPoint)) {
      throw new networkError_1.NetworkError("The networkEndPoint must be defined");
    }

    if (!numberHelper_1.NumberHelper.isInteger(timeoutMs) || timeoutMs < 0) {
      throw new networkError_1.NetworkError("The timeoutMs must be >= 0");
    }

    this._networkEndPoint = networkEndPoint;
    this._timeoutMs = timeoutMs;
    this._logger = logger || new nullLogger_1.NullLogger();
    this._httpClientRequest = httpClientRequest || (networkEndPoint.getProtocol() === "http" ? http.request : https.request);

    this._logger.banner("Network Client", {
      endPoint: this._networkEndPoint
    });
  }
  /**
   * Get data asynchronously.
   * @param additionalPath An additional path append to the endpoint path.
   * @param additionalHeaders Extra headers to send with the request.
   * @returns Promise which resolves to the object returned or rejects with error.
   */


  _createClass(NetworkClient, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(additionalPath, additionalHeaders) {
        var resp;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._logger.info("===> NetworkClient::GET Send");

                _context.next = 3;
                return this.doRequest("GET", undefined, additionalPath, additionalHeaders);

              case 3:
                resp = _context.sent;

                this._logger.info("<=== NetworkClient::GET Received", resp);

                return _context.abrupt("return", resp);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function get(_x, _x2) {
        return _get.apply(this, arguments);
      };
    }()
    /**
     * Post data asynchronously.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(data, additionalPath, additionalHeaders) {
        var resp;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._logger.info("===> NetworkClient::POST Send", data);

                _context2.next = 3;
                return this.doRequest("POST", data, additionalPath, additionalHeaders);

              case 3:
                resp = _context2.sent;

                this._logger.info("<=== NetworkClient::POST Received", resp);

                return _context2.abrupt("return", resp);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function post(_x3, _x4, _x5) {
        return _post.apply(this, arguments);
      };
    }()
    /**
     * Get data as JSON asynchronously.
     * @typeparam U The generic type for the returned object.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */

  }, {
    key: "getJson",
    value: function () {
      var _getJson = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(additionalPath, additionalHeaders) {
        var _this = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._logger.info("===> NetworkClient::GET Send");

                return _context3.abrupt("return", this.doRequest("GET", undefined, additionalPath, additionalHeaders).then(function (responseData) {
                  try {
                    var response = JSON.parse(responseData);

                    _this._logger.info("===> NetworkClient::GET Received", response);

                    return response;
                  } catch (err) {
                    _this._logger.info("===> NetworkClient::GET Parse Failed", responseData);

                    throw new networkError_1.NetworkError("Failed GET request, unable to parse response", {
                      endPoint: _this._networkEndPoint.getUri(),
                      response: responseData
                    });
                  }
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getJson(_x6, _x7) {
        return _getJson.apply(this, arguments);
      };
    }()
    /**
     * Post data as JSON asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */

  }, {
    key: "postJson",
    value: function () {
      var _postJson = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(data, additionalPath, additionalHeaders) {
        var _this2 = this;

        var headers;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this._logger.info("===> NetworkClient::POST Send");

                headers = additionalHeaders || {};
                headers["Content-Type"] = "application/json";
                return _context4.abrupt("return", this.doRequest("POST", JSON.stringify(data), additionalPath, headers).then(function (responseData) {
                  try {
                    var response = JSON.parse(responseData);

                    _this2._logger.info("===> NetworkClient::POST Received", response);

                    return response;
                  } catch (err) {
                    _this2._logger.info("===> NetworkClient::GET Parse Failed", responseData);

                    throw new networkError_1.NetworkError("Failed POST request, unable to parse response", {
                      endPoint: _this2._networkEndPoint.getUri(),
                      response: responseData
                    });
                  }
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function postJson(_x8, _x9, _x10) {
        return _postJson.apply(this, arguments);
      };
    }()
    /**
     * Perform a request asynchronously.
     * @param method The method to send the data with.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */

  }, {
    key: "doRequest",
    value: function () {
      var _doRequest = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(method, data, additionalPath, additionalHeaders) {
        var _this3 = this;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  var headers = additionalHeaders || {};

                  var uri = _this3._networkEndPoint.getUri();

                  var path = _this3._networkEndPoint.getRootPath();

                  if (!stringHelper_1.StringHelper.isEmpty(additionalPath)) {
                    var stripped = "/".concat(additionalPath.replace(/^\/*/, ""));
                    path += stripped;
                    uri += stripped;
                  }

                  var options = {
                    protocol: "".concat(_this3._networkEndPoint.getProtocol(), ":"),
                    hostname: _this3._networkEndPoint.getHost(),
                    port: _this3._networkEndPoint.getPort(),
                    path: path,
                    method: method,
                    headers: headers,
                    timeout: _this3._timeoutMs > 0 ? _this3._timeoutMs : undefined
                  };

                  var req = _this3._httpClientRequest(options, function (res) {
                    var responseData = "";
                    res.setEncoding("utf8");
                    res.on("data", function (responseBody) {
                      responseData += responseBody;
                    });
                    res.on("end", function () {
                      if (res.statusCode === 200) {
                        resolve(responseData);
                      } else {
                        _this3._logger.info("<=== NetworkClient::Received Fail", {
                          code: res.statusCode,
                          data: responseData
                        });

                        reject(new networkError_1.NetworkError("Failed ".concat(method, " request"), {
                          endPoint: uri,
                          errorResponseCode: res.statusCode,
                          errorResponse: responseData || res.statusMessage
                        }));
                      }
                    });
                  });

                  req.on("error", function (err) {
                    _this3._logger.error("<=== NetworkClient::Errored");

                    reject(new networkError_1.NetworkError("Failed ".concat(method, " request"), {
                      endPoint: uri,
                      errorResponse: err
                    }));
                  });
                  req.on("timeout", function (err) {
                    _this3._logger.error("<=== NetworkClient::Timed Out");

                    reject(new networkError_1.NetworkError("Failed ".concat(method, " request, timed out"), {
                      endPoint: uri
                    }));
                  });

                  if (!objectHelper_1.ObjectHelper.isEmpty(data)) {
                    req.write(data);
                  }

                  req.end();
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function doRequest(_x11, _x12, _x13, _x14) {
        return _doRequest.apply(this, arguments);
      };
    }()
  }]);

  return NetworkClient;
}();

exports.NetworkClient = NetworkClient;

/***/ }),

/***/ "./dist/pal.js":
/*!*********************!*\
  !*** ./dist/pal.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var networkClientFactory_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/networkClientFactory */ "../core/dist/factories/networkClientFactory.js");

var platformCryptoFactory_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/platformCryptoFactory */ "../core/dist/factories/platformCryptoFactory.js");

var rngServiceFactory_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/rngServiceFactory */ "../core/dist/factories/rngServiceFactory.js");

var platformCrypto_1 = __webpack_require__(/*! ./crypto/platformCrypto */ "./dist/crypto/platformCrypto.js");

var networkClient_1 = __webpack_require__(/*! ./network/networkClient */ "./dist/network/networkClient.js");

var rngService_1 = __webpack_require__(/*! ./services/rngService */ "./dist/services/rngService.js");
/**
 * Platform abstraction layer for NodeJS.
 */


var PAL =
/*#__PURE__*/
function () {
  function PAL() {
    _classCallCheck(this, PAL);
  }

  _createClass(PAL, null, [{
    key: "initialize",

    /**
     * Perform any initialization for the PAL.
     * @returns Promise.
     */
    value: function () {
      var _initialize = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!PAL._isInitialized) {
                  PAL._isInitialized = true;
                  networkClientFactory_1.NetworkClientFactory.instance().register("default", function (networkEndpoint, logger, timeoutMs) {
                    return new networkClient_1.NetworkClient(networkEndpoint, logger, timeoutMs);
                  });
                  rngServiceFactory_1.RngServiceFactory.instance().register("default", function () {
                    return new rngService_1.RngService();
                  });
                  platformCryptoFactory_1.PlatformCryptoFactory.instance().register("default", function () {
                    return new platformCrypto_1.PlatformCrypto();
                  });
                }

                return _context.abrupt("return", Promise.resolve());

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function initialize() {
        return _initialize.apply(this, arguments);
      };
    }()
  }]);

  return PAL;
}();
/* @internal */


PAL._isInitialized = false;
exports.PAL = PAL;

/***/ }),

/***/ "./dist/services/rngService.js":
/*!*************************************!*\
  !*** ./dist/services/rngService.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var crypto = __importStar(__webpack_require__(/*! crypto */ "crypto"));
/**
 * Implementation of random number generation service.
 */


var RngService =
/*#__PURE__*/
function () {
  function RngService() {
    _classCallCheck(this, RngService);
  }

  _createClass(RngService, [{
    key: "generate",

    /**
     * Generate an array of random numbers.
     * @param length The number of numbers to generate.
     * @returns Array of random number generators.
     */
    value: function generate(length) {
      return new Uint8Array(crypto.randomBytes(length));
    }
  }]);

  return RngService;
}();

exports.RngService = RngService;

/***/ }),

/***/ "./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/@babel/runtime/7.0.0-beta.49/node_modules/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************************************************************************/
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
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js");

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

/***/ "./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.registry.npmjs.org/regenerator-runtime/0.11.1/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************************************/
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
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
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
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uLi8uLi9zcmMvZXJyb3IvbmV0d29ya0Vycm9yLnRzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzLy4uLy4uL3NyYy9lcnJvci9wbGF0Zm9ybUVycm9yLnRzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzLy4uLy4uL3NyYy9mYWN0b3JpZXMvZmFjdG9yeUJhc2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi4vLi4vc3JjL2ZhY3Rvcmllcy9uZXR3b3JrQ2xpZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uLi8uLi9zcmMvZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uLi8uLi9zcmMvZmFjdG9yaWVzL3JuZ1NlcnZpY2VGYWN0b3J5LnRzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi4vLi4vc3JjL2hlbHBlcnMvbnVtYmVySGVscGVyLnRzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzLy4uLy4uL3NyYy9oZWxwZXJzL29iamVjdEhlbHBlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uLi8uLi9zcmMvaGVscGVycy9zdHJpbmdIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi4vLi4vc3JjL2xvZ2dlcnMvbnVsbExvZ2dlci50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uLi8uLi9zcmMvY3J5cHRvL3BsYXRmb3JtQ3J5cHRvLnRzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzLy4uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uLi8uLi9zcmMvbmV0d29yay9uZXR3b3JrQ2xpZW50LnRzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzLy4uL3NyYy9wYWwudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi4vLi4vc3JjL3NlcnZpY2VzL3JuZ1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi9ub2RlX21vZHVsZXMvLnJlZ2lzdHJ5Lm5wbWpzLm9yZy9AYmFiZWwvcnVudGltZS83LjAuMC1iZXRhLjQ5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uL25vZGVfbW9kdWxlcy8ucmVnaXN0cnkubnBtanMub3JnL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvMC4xMS4xL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzLy4vbm9kZV9tb2R1bGVzLy5yZWdpc3RyeS5ucG1qcy5vcmcvcmVnZW5lcmF0b3ItcnVudGltZS8wLjExLjEvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzL2V4dGVybmFsIFwiaHR0cHNcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFB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QUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3Qjs7Ozs7Ozs7Ozs7O0FDdHRCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJpb3RhLXBpY28tcGFsLW5vZGVqcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQGlvdGEtcGljby9wYWwtbm9kZWpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBpb3RhLXBpY28vcGFsLW5vZGVqc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJJb3RhUGljb1BhbE5vZGVqc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGpzb25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2pzb25IZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogQSBjb3JlIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgQ29yZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsID0gYWRkaXRpb25hbCA/IGFkZGl0aW9uYWwgOiB7fTtcclxuICAgICAgICB0aGlzLmlubmVyRXJyb3IgPSBpbm5lckVycm9yO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJDb3JlXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGFuIG9iamVjdCBjb3VsZCBiZSBhIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVjayBpZiBpdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqIEByZXR1cm5zIHRydWUgSWYgdGhlIHRlc3RlZCBvYmplY3QgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Vycm9yKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBcIm1lc3NhZ2VcIiBpbiBvYmogJiYgXCJhZGRpdGlvbmFsXCIgaW4gb2JqO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgdGhlIGVycm9yIHRvIGEgcmVhZGFibGUgdmVyc2lvbi5cclxuICAgICAqIEByZXR1cm5zIEZvcm1hdHRlZCB2ZXJzaW9uIG9mIHRoZSBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZm9ybWF0KCkge1xyXG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodGhpcy5kb21haW4pKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLmRvbWFpbn06IGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodGhpcy5tZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5tZXNzYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFkZGl0aW9uYWwpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKG91dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBgXFx0JHtrZXl9OiAke2pzb25IZWxwZXJfMS5Kc29uSGVscGVyLnN0cmluZ2lmeSh0aGlzLmFkZGl0aW9uYWxba2V5XSl9XFxuYDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db3JlRXJyb3IgPSBDb3JlRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXlaVVZ5Y205eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJWeWNtOXlMMk52Y21WRmNuSnZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNjMFJCUVcxRU8wRkJRMjVFTERCRVFVRjFSRHRCUVVWMlJEczdSMEZGUnp0QlFVTklMR1ZCUVhWQ0xGTkJRVkVzUzBGQlN6dEpRV2RDYUVNN096czdPMDlCUzBjN1NVRkRTQ3haUVVGWkxFOUJRV1VzUlVGQlJTeFZRVUZyUXl4RlFVRkZMRlZCUVd0Q08xRkJReTlGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVObUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0UlFVTXZReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCVVR0UlFVTXhRaXhQUVVGUExFZEJRVWNzUzBGQlN5eFRRVUZUTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWxCUVVrc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVsQlFVa3NVMEZCVXl4SlFVRkpMRWRCUVVjc1NVRkJTU3haUVVGWkxFbEJRVWtzUjBGQlJ5eERRVUZETzBsQlEyNUlMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4TlFVRk5PMUZCUTFRc1NVRkJTU3hIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETzFGQlJXSXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOd1F5eEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU03VTBGRE4wSTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRk8xbEJRM0pETEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFRRVU0xUWp0UlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRekZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGFrSXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEYUVJc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF6dGhRVU5tTzFsQlEwUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdG5Ra0ZEWml4SFFVRkhMRWxCUVVrc1MwRkJTeXhIUVVGSExFdEJRVXNzZFVKQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkRka1VzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEVGp0UlFVVkVMRTlCUVU4c1IwRkJSeXhEUVVGRE8wbEJRMllzUTBGQlF6dERRVU5LTzBGQmFFVkVMRGhDUVdkRlF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIi4vY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBuZXR3b3JrIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgTmV0d29ya0Vycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIE5ldHdvcmtFcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJOZXR3b3JrXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OZXR3b3JrRXJyb3IgPSBOZXR3b3JrRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJtVjBkMjl5YTBWeWNtOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyVnljbTl5TDI1bGRIZHZjbXRGY25KdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc01rTkJRWGRETzBGQlJYaERPenRIUVVWSE8wRkJRMGdzYTBKQlFUQkNMRk5CUVZFc2NVSkJRVk03U1VGRGRrTTdPenM3TzA5QlMwYzdTVUZEU0N4WlFVRlpMRTlCUVdVc1JVRkJSU3hWUVVGclF5eEZRVUZGTEZWQlFXdENPMUZCUXk5RkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRM1pETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhEUVVGRE8wbEJRelZDTEVOQlFVTTdRMEZEU2p0QlFWaEVMRzlEUVZkREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvcmVFcnJvcl8xID0gcmVxdWlyZShcIi4vY29yZUVycm9yXCIpO1xyXG4vKipcclxuICogQSBwbGF0Zm9ybSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIFBsYXRmb3JtRXJyb3IgZXh0ZW5kcyBjb3JlRXJyb3JfMS5Db3JlRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgUGxhdGZvcm1FcnJvci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIGZvciB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbCBBZGRpdGlvbmFsIGRldGFpbHMgYWJvdXQgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGlubmVyRXJyb3IgQWRkIGluZm9ybWF0aW9uIGZyb20gaW5uZXIgZXJyb3IgaWYgdGhlcmUgd2FzIG9uZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgYWRkaXRpb25hbCwgaW5uZXJFcnJvcikge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJQbGF0Zm9ybVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGxhdGZvcm1FcnJvciA9IFBsYXRmb3JtRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhkR1p2Y20xRmNuSnZjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWxjbkp2Y2k5d2JHRjBabTl5YlVWeWNtOXlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFTd3lRMEZCZDBNN1FVRkZlRU03TzBkQlJVYzdRVUZEU0N4dFFrRkJNa0lzVTBGQlVTeHhRa0ZCVXp0SlFVTjRRenM3T3pzN1QwRkxSenRKUVVOSUxGbEJRVmtzVDBGQlpTeEZRVUZGTEZWQlFXdERMRVZCUVVVc1ZVRkJhMEk3VVVGREwwVXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTVUZETjBJc1EwRkJRenREUVVOS08wRkJXRVFzYzBOQlYwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSB0eXBlcy5cclxuICogQHR5cGVwYXJhbSBUIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSBvYmplY3QgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAqL1xyXG5jbGFzcyBGYWN0b3J5QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgICAgICB0aGlzLl90eXBlcyA9IHt9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB0eXBlIHdpdGggdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byByZWdpc3Rlci5cclxuICAgICAqIEBwYXJhbSB0eXBlQ29uc3RydWN0b3IgVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIobmFtZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSA9IHR5cGVDb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVW5yZWdpc3RlciBhIHR5cGUgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIHVucmVnaXN0ZXIuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIobmFtZSkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzW25hbWVdO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEb2VzIHRoZSBmYWN0b3J5IGNvbnRhaW4gYSBzcGVjaWZpYyB0eXBlLlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gbG9vayBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB0eXBlIGV4aXN0cy5cclxuICAgICAqL1xyXG4gICAgZXhpc3RzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IHRoZSB0eXBlcyBpbiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIHR5cGVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldEluc3RhbmNlKCkuX3R5cGVzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIGFuIG9iamVjdCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gY3JlYXRlLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQW55IHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKiBAcmV0dXJucyBBIG5ldyBpbnN0YW5jZSBvZiB0aGUgdHlwZSBpZiBpdCBleGlzdHMsIG9yIHVuZGVmaW5lZCBpZiBpdCBkb2VzIG5vdC5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlKG5hbWUsIC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuX3R5cGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fdHlwZXNbbmFtZV0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLkZhY3RvcnlCYXNlID0gRmFjdG9yeUJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVptRmpkRzl5ZVVKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyWmhZM1J2Y25sQ1lYTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdPMGRCUjBjN1FVRkRTRHRKUVVGQk8xRkJRMGtzWlVGQlpUdFJRVU5GTEZkQlFVMHNSMEZCT0VNc1JVRkJSU3hEUVVGRE8wbEJjMFExUlN4RFFVRkRPMGxCY0VSSE96czdPMDlCU1VjN1NVRkRTU3hSUVVGUkxFTkJRVU1zU1VGQldTeEZRVUZGTEdWQlFYTkRPMUZCUTJoRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzWlVGQlpTeERRVUZETzBsQlEzUkVMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU1N4VlFVRlZMRU5CUVVNc1NVRkJXVHRSUVVNeFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZETTBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zU1VGQldUdFJRVU4wUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRM3BFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NTMEZCU3p0UlFVTlNMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFbEJRVmtzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEZEVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVOMlFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjZRenRoUVVGTk8xbEJRMGdzVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1NVRkRUQ3hEUVVGRE8wTkJTVW83UVVGNFJFUXNhME5CZDBSREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiLi9mYWN0b3J5QmFzZVwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgbmV0d29yayBjbGllbnRzLlxyXG4gKi9cclxuY2xhc3MgTmV0d29ya0NsaWVudEZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIU5ldHdvcmtDbGllbnRGYWN0b3J5Ll9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBOZXR3b3JrQ2xpZW50RmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgTmV0d29ya0NsaWVudEZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE5ldHdvcmtDbGllbnRGYWN0b3J5Ll9pbnN0YW5jZTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIE5ldHdvcmtDbGllbnRGYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OZXR3b3JrQ2xpZW50RmFjdG9yeSA9IE5ldHdvcmtDbGllbnRGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libVYwZDI5eWEwTnNhV1Z1ZEVaaFkzUnZjbmt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMjVsZEhkdmNtdERiR2xsYm5SR1lXTjBiM0o1TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkRRU3dyUTBGQk5FTTdRVUZGTlVNN08wZEJSVWM3UVVGRFNDd3dRa0ZCYTBNc1UwRkJVU3g1UWtGQk1rSTdTVUZKYWtVN096dFBRVWRITzBsQlEwZzdVVUZEU1N4TFFVRkxMRVZCUVVVc1EwRkJRenRKUVVOYUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVVVGQlVUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTJwRExHOUNRVUZ2UWl4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxHOUNRVUZ2UWl4RlFVRkZMRU5CUVVNN1UwRkRMMFE3VVVGRFJDeFBRVUZQTEc5Q1FVRnZRaXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOTUxGZEJRVmM3VVVGRGFrSXNUMEZCVHl4dlFrRkJiMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTXpReXhEUVVGRE8wTkJRMG83UVVFelFrUXNiMFJCTWtKREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZhY3RvcnlCYXNlXzEgPSByZXF1aXJlKFwiLi9mYWN0b3J5QmFzZVwiKTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgcm5nIHNlcnZpY2UuXHJcbiAqL1xyXG5jbGFzcyBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkgZXh0ZW5kcyBmYWN0b3J5QmFzZV8xLkZhY3RvcnlCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogRG9uJ3QgYWxsb3cgbWFudWFsIGNvbnN0cnVjdGlvbiBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluc3RhbmNlIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGZhY3RvcnkgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIVBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUGxhdGZvcm1DcnlwdG9GYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXRmb3JtQ3J5cHRvRmFjdG9yeSA9IFBsYXRmb3JtQ3J5cHRvRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0d4aGRHWnZjbTFEY25sd2RHOUdZV04wYjNKNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJaaFkzUnZjbWxsY3k5d2JHRjBabTl5YlVOeWVYQjBiMFpoWTNSdmNua3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVOQkxDdERRVUUwUXp0QlFVVTFRenM3UjBGRlJ6dEJRVU5JTERKQ1FVRnRReXhUUVVGUkxIbENRVUUwUWp0SlFVbHVSVHM3TzA5QlIwYzdTVUZEU0R0UlFVTkpMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMW9zUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTzFGQlEyeENMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkRiRU1zY1VKQlFYRkNMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzY1VKQlFYRkNMRVZCUVVVc1EwRkJRenRUUVVOcVJUdFJRVU5FTEU5QlFVOHNjVUpCUVhGQ0xFTkJRVU1zVTBGQlV5eERRVUZETzBsQlF6TkRMRU5CUVVNN1NVRkZSQ3hsUVVGbE8wbEJRMHdzVjBGQlZ6dFJRVU5xUWl4UFFVRlBMSEZDUVVGeFFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXpWRExFTkJRVU03UTBGRFNqdEJRVE5DUkN4elJFRXlRa01pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCIuL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBybmcgc2VydmljZS5cclxuICovXHJcbmNsYXNzIFJuZ1NlcnZpY2VGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFSbmdTZXJ2aWNlRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUm5nU2VydmljZUZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFJuZ1NlcnZpY2VGYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSbmdTZXJ2aWNlRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBSbmdTZXJ2aWNlRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUm5nU2VydmljZUZhY3RvcnkgPSBSbmdTZXJ2aWNlRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY201blUyVnlkbWxqWlVaaFkzUnZjbmt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMM0p1WjFObGNuWnBZMlZHWVdOMGIzSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGRFFTd3JRMEZCTkVNN1FVRkZOVU03TzBkQlJVYzdRVUZEU0N4MVFrRkJLMElzVTBGQlVTeDVRa0ZCZDBJN1NVRkpNMFE3T3p0UFFVZEhPMGxCUTBnN1VVRkRTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRemxDTEdsQ1FVRnBRaXhEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEdsQ1FVRnBRaXhGUVVGRkxFTkJRVU03VTBGRGVrUTdVVUZEUkN4UFFVRlBMR2xDUVVGcFFpeERRVUZETEZOQlFWTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVFzWlVGQlpUdEpRVU5NTEZkQlFWYzdVVUZEYWtJc1QwRkJUeXhwUWtGQmFVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVONFF5eERRVUZETzBOQlEwbzdRVUV6UWtRc09FTkJNa0pESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEpzb24gaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBKc29uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5naWZ5IGFuIG9iamVjdCB3aXRoIHJlY3Vyc2lvbiBicmVha2luZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LCB0byBiZSBjb252ZXJ0ZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVwbGFjZXIgQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgdGhlIHJlc3VsdHMuXHJcbiAgICAgKiBAcGFyYW0gc3BhY2UgQWRkcyBpbmRlbnRhdGlvbiwgd2hpdGUgc3BhY2UsIGFuZCBsaW5lIGJyZWFrIGNoYXJhY3RlcnMgdG8gdGhlIHJldHVybi12YWx1ZSBKU09OIHRleHQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyB2ZXJzaW9uIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xyXG4gICAgICAgIC8vIGVsaW1pbmF0ZXMgYW55IHJlY3Vyc2lvbiBpbiB0aGUgc3RyaW5naWZ5XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBbXTtcclxuICAgICAgICBjb25zdCByZWN1c2lvblJlcGxhY2VyID0gKGtleSwgcmVwbGFjZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHJlcGxhY2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaW5kZXhPZihyZXBsYWNlVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHJlcGxhY2VWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VyID8gcmVwbGFjZXIoa2V5LCByZXBsYWNlVmFsdWUpIDogcmVwbGFjZVZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZWN1c2lvblJlcGxhY2VyLCBzcGFjZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Kc29uSGVscGVyID0gSnNvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5OdmJraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMnB6YjI1SVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVlVzUlVGQlJTeFJRVUV5UXl4RlFVRkZMRXRCUVhWQ08xRkJRM0JITERSRFFVRTBRenRSUVVNMVF5eE5RVUZOTEV0QlFVc3NSMEZCVlN4RlFVRkZMRU5CUVVNN1VVRkZlRUlzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFZEJRVmNzUlVGQlJTeFpRVUZwUWl4RlFVRkZMRVZCUVVVN1dVRkRlRVFzU1VGQlNTeFBRVUZQTEZsQlFWa3NTMEZCU3l4UlFVRlJMRWxCUVVrc1MwRkJTeXhMUVVGTExFbEJRVWtzU1VGQlNTeFpRVUZaTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVOc1JpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTNCRExIZERRVUYzUXp0dlFrRkRlRU1zVDBGQlR6dHBRa0ZEVmp0eFFrRkJUVHR2UWtGRFNDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8ybENRVU0xUWp0aFFVTktPMWxCUlVRc1QwRkJUeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXp0UlFVTnFSU3hEUVVGRExFTkJRVU03VVVGRlJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxHZENRVUZuUWl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRekZFTEVOQlFVTTdRMEZEU2p0QlFUTkNSQ3huUTBFeVFrTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogTnVtYmVyIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVySGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIGludGVnZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBpbnRlZ2VybmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGludGVnZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgJiYgIU51bWJlci5pc05hTih2YWx1ZSkgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgbnVtYmVyeW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBmbG9hdCBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUZsb2F0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Zsb2F0U3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQqXFwuP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgaW50ZWdlciBudW1iZXIgZm9ybWF0dGVkIGFzIGEgc3RyaW5nLCBjYW4gYmUgdXNlZCBmb3IgYmlnIG51bWJlcnMgdGhhdCB3b3VsZCBvdmVyZmxvdyBwYXJzZUludC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2tcclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG51bWJlciBpcyBmb3JtYXR0ZWQgY29ycmVjdGx5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eLT9cXGQrJC8udGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OdW1iZXJIZWxwZXIgPSBOdW1iZXJIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnRZbVZ5U0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmJuVnRZbVZ5U0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlZUdFJRVU01UWl4UFFVRlBMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGNrWXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVlU3VVVGRE4wSXNUMEZCVHl4TFFVRkxMRXRCUVVzc1UwRkJVeXhKUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTJoSkxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRmhPMUZCUTNKRExFOUJRVThzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4bFFVRmxMRU5CUVVNc1MwRkJZVHRSUVVOMlF5eFBRVUZQTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGFrTXNRMEZCUXp0RFFVTktPMEZCY0VORUxHOURRVzlEUXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIE9iamVjdCBoZWxwZXIgbWV0aG9kcy5cclxuICovXHJcbmNsYXNzIE9iamVjdEhlbHBlciB7XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGVtcHR5LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IGZhbHNlIDogdHlwZW9mICh2YWx1ZSkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gb2JqZWN0IGlmIGdpdmVuIHR5cGUuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIEEgY2FsbGJhY2sgbWV0aG9kIHdoaWNoIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIG9iamVjdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1R5cGUodmFsdWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlQ2xhc3NOYW1lID0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlQ2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgdmFsdWVDbGFzc05hbWUgPT09IE9iamVjdEhlbHBlci5nZXRDbGFzc05hbWUodHlwZUNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjbGFzcyBuYW1lIG9mIGFuIG9iamVjdCBpZiBpdCBoYXMgb25lLlxyXG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0IHRvIGdldCB0aGUgY2xhc3MgbmFtZSBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY2xhc3MgbmFtZSBpZiBpdCBoYXMgb25lIG9yIHVuZGVmaW5lZCBpZiBub3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRDbGFzc05hbWUob2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB0eXBlb2Ygb2JqZWN0ID09PSBcImZ1bmN0aW9uXCIgPyBvYmplY3QudG9TdHJpbmcoKSA6IG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gY29uc3RydWN0b3IubWF0Y2goL1xcdysvZyk7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpID8gcmVzdWx0c1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5PYmplY3RIZWxwZXIgPSBPYmplY3RIZWxwZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWIySnFaV04wU0dWc2NHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyaGxiSEJsY25NdmIySnFaV04wU0dWc2NHVnlMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUczdSMEZGUnp0QlFVTklPMGxCUTBrN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlZUdFJRVU0xUWl4UFFVRlBMRXRCUVVzc1MwRkJTeXhKUVVGSkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNN1dVRkRlRU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEZEVVc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRlZMRVZCUVVVc1pVRkJlVUk3VVVGRGRFUXNUVUZCVFN4alFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRExGbEJRVmtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjRSQ3hQUVVGUExHTkJRV01zUzBGQlN5eFRRVUZUTEVsQlFVa3NZMEZCWXl4TFFVRkxMRmxCUVZrc1EwRkJReXhaUVVGWkxFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdTVUZEZWtjc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEUxQlFWYzdVVUZEYkVNc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN1dVRkRla01zVDBGQlR5eFRRVUZUTEVOQlFVTTdVMEZEY0VJN1lVRkJUVHRaUVVOSUxFMUJRVTBzVjBGQlZ5eEhRVUZITEU5QlFVOHNUVUZCVFN4TFFVRkxMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMWxCUTNKSExFMUJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03V1VGRE1VTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRUUVVOdVJUdEpRVU5NTEVOQlFVTTdRMEZEU2p0QlFUZERSQ3h2UTBFMlEwTWlmUT09IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpcyBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FzY2lpKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDdGLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhQUVVGUExFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NTMEZCU3l4TFFVRkxMRk5CUVZNN1dVRkRlRU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExHbENRVUZwUWl4RFFVRkRPMGxCUXpsRkxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRlZPMUZCUXpWQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUXk5RUxFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRmhPMUZCUXk5Q0xFOUJRVThzUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRV0U3VVVGRGRFTXNUMEZCVHl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZETDBvc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1QwRkJUeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTJoS0xFTkJRVU03UTBGRFNqdEJRUzlEUkN4dlEwRXJRME1pZlE9PSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIElMb2dnZXIgd2hpY2ggaXMgc2lsZW50LlxyXG4gKi9cclxuY2xhc3MgTnVsbExvZ2dlciB7XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgYmFubmVyIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBiYW5uZXIobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGxvZyB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgbG9nKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBpbmZvcm1hdGlvbiB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgaW5mbyhtZXNzYWdlLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgd2FybmluZyB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgd2FybmluZyhtZXNzYWdlLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgZXJyb3IgdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBlcnIgQW4gZXJyb3Igb2JqZWN0IHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGVycm9yKG1lc3NhZ2UsIGVyciwgLi4uYXJncykge1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTnVsbExvZ2dlciA9IE51bGxMb2dnZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJuVnNiRXh2WjJkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5c2IyZG5aWEp6TDI1MWJHeE1iMmRuWlhJdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVVZCT3p0SFFVVkhPMEZCUTBnN1NVRkRTVHM3T3p0UFFVbEhPMGxCUTBrc1RVRkJUU3hEUVVGRExFOUJRV1VzUlVGQlJTeEhRVUZITEVsQlFWYzdTVUZETjBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hIUVVGSExFTkJRVU1zVDBGQlpTeEZRVUZGTEVkQlFVY3NTVUZCVnp0SlFVTXhReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFbEJRVWtzUTBGQlF5eFBRVUZsTEVWQlFVVXNSMEZCUnl4SlFVRlhPMGxCUXpORExFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGtzVDBGQlR5eERRVUZETEU5QlFXVXNSVUZCUlN4SFFVRkhMRWxCUVZjN1NVRkRPVU1zUTBGQlF6dEpRVVZFT3pzN096dFBRVXRITzBsQlEwa3NTMEZCU3l4RFFVRkRMRTlCUVdVc1JVRkJSU3hIUVVGVExFVkJRVVVzUjBGQlJ5eEpRVUZYTzBsQlEzWkVMRU5CUVVNN1EwRkRTanRCUVhwRFJDeG5RMEY1UTBNaWZRPT0iLCJ2YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgcGxhdGZvcm1FcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL3BsYXRmb3JtRXJyb3JcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJjcnlwdG9cIikpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgYSBwbGF0Zm9ybSBjcnlwdG8gZm9yIHVzZSBpbiBOb2RlSlMuXHJcbiAqL1xyXG5jbGFzcyBQbGF0Zm9ybUNyeXB0byB7XHJcbiAgICAvKipcclxuICAgICAqIEVuY3J5cHQgdGhlIGdpdmVuIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gcHJpdmF0ZUtleSBUaGUga2V5IHRvIHVzZSBmb3IgZW5jcnlwdGluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZW5jcnlwdC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlbmNyeXB0ZWQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZW5jcnlwdChwcml2YXRlS2V5LCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHByaXZhdGVLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBwcml2YXRlS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoZGF0YSwgXCJhc2NpaVwiKTtcclxuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBjcnlwdG8ucHJpdmF0ZUVuY3J5cHQocHJpdmF0ZUtleSwgYnVmZmVyKTtcclxuICAgICAgICByZXR1cm4gZW5jcnlwdGVkLnRvU3RyaW5nKFwiaGV4XCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyeXB0IHRoZSBnaXZlbiBkYXRhLlxyXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUga2V5IHRvIHVzZSBmb3IgZGVjcnlwdGluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZGVjcnlwdC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNyeXB0ZWQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZGVjcnlwdChwdWJsaWNLZXksIGRhdGEpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkocHVibGljS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgcHVibGljS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoZGF0YSwgXCJoZXhcIik7XHJcbiAgICAgICAgY29uc3QgZGVjcnlwdGVkID0gY3J5cHRvLnB1YmxpY0RlY3J5cHQocHVibGljS2V5LCBidWZmZXIpO1xyXG4gICAgICAgIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoXCJhc2NpaVwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2lnbiB0aGUgZ2l2ZW4gZGF0YS5cclxuICAgICAqIEBwYXJhbSBwcml2YXRlS2V5IFRoZSBrZXkgdG8gdXNlIGZvciBzaWduaW5nIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBzaWduLlxyXG4gICAgICogQHJldHVybnMgVGhlIHNpZ25hdHVyZS5cclxuICAgICAqL1xyXG4gICAgc2lnbihwcml2YXRlS2V5LCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHByaXZhdGVLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBwcml2YXRlS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IGNyeXB0by5jcmVhdGVTaWduKFwiUlNBLVNIQTI1NlwiKTtcclxuICAgICAgICBzaWduZXIudXBkYXRlKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBzaWduZXIuc2lnbihwcml2YXRlS2V5LCBcImhleFwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVmVyaWZ5IHRoZSBnaXZlbiBkYXRhLlxyXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUga2V5IHRvIHVzZSBmb3IgdmVyaWZ5aW5nIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byB2ZXJpZnkuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlIFRoZSBzaWduYXR1cmUgdG8gdmVyaWZ5IGFnYWludCB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZlcmlmaWNhdGlvbiBpcyBzdWNjZXNzZnVsLlxyXG4gICAgICovXHJcbiAgICB2ZXJpZnkocHVibGljS2V5LCBkYXRhLCBzaWduYXR1cmUpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkocHVibGljS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgcHVibGljS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShzaWduYXR1cmUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBzaWduYXR1cmUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZlcmlmaWVyID0gY3J5cHRvLmNyZWF0ZVZlcmlmeShcIlJTQS1TSEEyNTZcIik7XHJcbiAgICAgICAgdmVyaWZpZXIudXBkYXRlKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiB2ZXJpZmllci52ZXJpZnkocHVibGljS2V5LCBzaWduYXR1cmUsIFwiaGV4XCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBIYXNoIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIGFsZ28gVGhlIGFsZ29yaXRobSB0byB1c2UuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBoYXNoLlxyXG4gICAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSB0eXBlIG9mIHRoZSBpbnB1dCBkYXRhIHV0ZjgsIGFzY2lpLCBsYXRpbjEuXHJcbiAgICAgKiBAcGFyYW0gZW5jb2RpbmcgVGhlIGVuY29kaW5nIHRvIHJldHVybiB0aGUgZGF0YSBsYXRpbjEsIGhleCwgYmFzZTY0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGhhc2ggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGhhc2goYWxnbywgZGF0YSwgZGF0YVR5cGUsIGVuY29kaW5nKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGFsZ28pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBhbGdvIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaChhbGdvKVxyXG4gICAgICAgICAgICAudXBkYXRlKGRhdGEsIGRhdGFUeXBlKVxyXG4gICAgICAgICAgICAuZGlnZXN0KGVuY29kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSE1BQyB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSBhbGdvIFRoZSBhbGdvcml0aG0gdG8gdXNlLlxyXG4gICAgICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGhhc2ggdGhlIGRhdGEgd2l0aC5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gZGF0YVR5cGUgVGhlIHR5cGUgb2YgdGhlIGlucHV0IGRhdGEgdXRmOCwgYXNjaWksIGxhdGluMS5cclxuICAgICAqIEBwYXJhbSBlbmNvZGluZyBUaGUgZW5jb2RpbmcgdG8gcmV0dXJuIHRoZSBkYXRhIGxhdGluMSwgaGV4LCBiYXNlNjQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaGFzaCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgaG1hYyhhbGdvLCBrZXksIGRhdGEsIGRhdGFUeXBlLCBlbmNvZGluZykge1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShhbGdvKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgYWxnbyBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGtleSBtdXN0IGJlIG5vbiBlbXB0eVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBkYXRhIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhtYWMoYWxnbywga2V5KVxyXG4gICAgICAgICAgICAudXBkYXRlKGRhdGEsIGRhdGFUeXBlKVxyXG4gICAgICAgICAgICAuZGlnZXN0KGVuY29kaW5nKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXRmb3JtQ3J5cHRvID0gUGxhdGZvcm1DcnlwdG87XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhkR1p2Y20xRGNubHdkRzh1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZZM0o1Y0hSdkwzQnNZWFJtYjNKdFEzSjVjSFJ2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3TzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkZla1VzSzBOQlFXbERPMEZCUldwRE96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096czdUMEZMUnp0SlFVTkpMRTlCUVU4c1EwRkJReXhWUVVGclFpeEZRVUZGTEVsQlFWazdVVUZETTBNc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRaUVVOc1F5eE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXd5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMU5CUTNoRk8xRkJRMFFzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0xUWl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlEwUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNwRExFMUJRVTBzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6VkVMRTlCUVU4c1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnlReXhEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeFBRVUZQTEVOQlFVTXNVMEZCYVVJc1JVRkJSU3hKUVVGWk8xRkJRekZETEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdXVUZEYWtNc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU4yUlR0UlFVTkVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkROVUlzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRSUVVORUxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU4yUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNeFJDeFBRVUZQTEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGRrTXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1NVRkJTU3hEUVVGRExGVkJRV3RDTEVWQlFVVXNTVUZCV1R0UlFVTjRReXhKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRFJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VTBGRGJFVTdVVUZEUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMUZCUXk5RExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRjRUlzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEZOQlFXbENMRVZCUVVVc1NVRkJXU3hGUVVGRkxGTkJRV2xDTzFGQlF6VkVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1dVRkRha01zVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc01FTkJRVEJETEVOQlFVTXNRMEZCUXp0VFFVTjJSVHRSUVVORUxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JUdFJRVU5FTEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdXVUZEYWtNc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU4yUlR0UlFVTkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1VVRkRia1FzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMFFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjRSQ3hEUVVGRE8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTkpMRWxCUVVrc1EwRkJReXhKUVVGWkxFVkJRMW9zU1VGQlV5eEZRVU5VTEZGQlFYTkRMRVZCUTNSRExGRkJRWE5ETzFGQlF6bERMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkROVUlzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRSUVVORUxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JUdFJRVVZFTEU5QlFVOHNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU03WVVGRFlpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJRenRoUVVOMFFpeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVVZFT3pzN096czdPenRQUVZGSE8wbEJRMGtzU1VGQlNTeERRVUZETEVsQlFWa3NSVUZEV2l4SFFVRlJMRVZCUTFJc1NVRkJVeXhGUVVOVUxGRkJRWE5ETEVWQlEzUkRMRkZCUVhORE8xRkJRemxETEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZETlVJc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5zUlR0UlFVTkVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRNMElzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc01rSkJRVEpDTEVOQlFVTXNRMEZCUXp0VFFVTjRSRHRSUVVORUxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JUdFJRVVZFTEU5QlFVOHNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETzJGQlEyeENMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETzJGQlEzUkNMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPME5CUTBvN1FVRnFTVVFzZDBOQmFVbERJbjA9IiwiZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIENvbWJpbmVkIGluZGV4IG9mIGFsbCB0aGUgbW9kdWxlcy5cclxuICovXHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3BhbFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2NyeXB0by9wbGF0Zm9ybUNyeXB0b1wiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL25ldHdvcmsvbmV0d29ya0NsaWVudFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NlcnZpY2VzL3JuZ1NlcnZpY2VcIikpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEhRVVZITzBGQlEwZ3NNa0pCUVhOQ08wRkJRM1JDTERaRFFVRjNRenRCUVVONFF5dzJRMEZCZDBNN1FVRkRlRU1zTWtOQlFYTkRJbjA9IiwidmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5ldHdvcmtFcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL25ldHdvcmtFcnJvclwiKTtcclxuY29uc3QgbnVtYmVySGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuY29uc3QgbnVsbExvZ2dlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2xvZ2dlcnMvbnVsbExvZ2dlclwiKTtcclxuY29uc3QgaHR0cCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiaHR0cFwiKSk7XHJcbmNvbnN0IGh0dHBzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJodHRwc1wiKSk7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIG5vZGUgY2xpZW50IGZvciB1c2UgaW4gTm9kZUpTLlxyXG4gKi9cclxuY2xhc3MgTmV0d29ya0NsaWVudCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBOZXR3b3JrQ2xpZW50LlxyXG4gICAgICogQHBhcmFtIG5ldHdvcmtFbmRQb2ludCBUaGUgZW5kcG9pbnQgdG8gdXNlIGZvciB0aGUgY2xpZW50LlxyXG4gICAgICogQHBhcmFtIGxvZ2dlciBMb2dnZXIgdG8gc2VuZCBjb21tdW5pY2F0aW9uIGluZm8gdG8uXHJcbiAgICAgKiBAcGFyYW0gdGltZW91dE1zIFRoZSB0aW1lb3V0IGluIG1zIGJlZm9yZSBhYm9ydGluZy5cclxuICAgICAqIEBwYXJhbSBodHRwQ2xpZW50UmVxdWVzdCBUaGUgY2xpZW50IHJlcXVlc3Qgb2JqZWN0LCB1c3VhbGx5IG5vdCByZXF1aXJlZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmV0d29ya0VuZFBvaW50LCBsb2dnZXIsIHRpbWVvdXRNcyA9IDAsIGh0dHBDbGllbnRSZXF1ZXN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KG5ldHdvcmtFbmRQb2ludCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIlRoZSBuZXR3b3JrRW5kUG9pbnQgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodGltZW91dE1zKSB8fCB0aW1lb3V0TXMgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgdGltZW91dE1zIG11c3QgYmUgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbmV0d29ya0VuZFBvaW50ID0gbmV0d29ya0VuZFBvaW50O1xyXG4gICAgICAgIHRoaXMuX3RpbWVvdXRNcyA9IHRpbWVvdXRNcztcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXIgfHwgbmV3IG51bGxMb2dnZXJfMS5OdWxsTG9nZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5faHR0cENsaWVudFJlcXVlc3QgPSBodHRwQ2xpZW50UmVxdWVzdCB8fCAobmV0d29ya0VuZFBvaW50LmdldFByb3RvY29sKCkgPT09IFwiaHR0cFwiID8gaHR0cC5yZXF1ZXN0IDogaHR0cHMucmVxdWVzdCk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmJhbm5lcihcIk5ldHdvcmsgQ2xpZW50XCIsIHsgZW5kUG9pbnQ6IHRoaXMuX25ldHdvcmtFbmRQb2ludCB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGRhdGEgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbFBhdGggQW4gYWRkaXRpb25hbCBwYXRoIGFwcGVuZCB0byB0aGUgZW5kcG9pbnQgcGF0aC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsSGVhZGVycyBFeHRyYSBoZWFkZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIG9iamVjdCByZXR1cm5lZCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldChhZGRpdGlvbmFsUGF0aCwgYWRkaXRpb25hbEhlYWRlcnMpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6R0VUIFNlbmRcIik7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuZG9SZXF1ZXN0KFwiR0VUXCIsIHVuZGVmaW5lZCwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gTmV0d29ya0NsaWVudDo6R0VUIFJlY2VpdmVkXCIsIHJlc3ApO1xyXG4gICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3N0IGRhdGEgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBzZW5kLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxQYXRoIEFuIGFkZGl0aW9uYWwgcGF0aCBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IHBhdGguXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbEhlYWRlcnMgRXh0cmEgaGVhZGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBvYmplY3QgcmV0dXJuZWQgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBwb3N0KGRhdGEsIGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBOZXR3b3JrQ2xpZW50OjpQT1NUIFNlbmRcIiwgZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuZG9SZXF1ZXN0KFwiUE9TVFwiLCBkYXRhLCBhZGRpdGlvbmFsUGF0aCwgYWRkaXRpb25hbEhlYWRlcnMpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBOZXR3b3JrQ2xpZW50OjpQT1NUIFJlY2VpdmVkXCIsIHJlc3ApO1xyXG4gICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZGF0YSBhcyBKU09OIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICogQHR5cGVwYXJhbSBVIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSByZXR1cm5lZCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbFBhdGggQW4gYWRkaXRpb25hbCBwYXRoIGFwcGVuZCB0byB0aGUgZW5kcG9pbnQgcGF0aC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsSGVhZGVycyBFeHRyYSBoZWFkZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIG9iamVjdCByZXR1cm5lZCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldEpzb24oYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OkdFVCBTZW5kXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvUmVxdWVzdChcIkdFVFwiLCB1bmRlZmluZWQsIGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycylcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6R0VUIFJlY2VpdmVkXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6R0VUIFBhcnNlIEZhaWxlZFwiLCByZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJGYWlsZWQgR0VUIHJlcXVlc3QsIHVuYWJsZSB0byBwYXJzZSByZXNwb25zZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQ6IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRVcmkoKSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VEYXRhXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUG9zdCBkYXRhIGFzIEpTT04gYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIG9iamVjdCB0byBzZW5kLlxyXG4gICAgICogQHR5cGVwYXJhbSBVIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSByZXR1cm5lZCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBzZW5kLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxQYXRoIEFuIGFkZGl0aW9uYWwgcGF0aCBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IHBhdGguXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbEhlYWRlcnMgRXh0cmEgaGVhZGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBvYmplY3QgcmV0dXJuZWQgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBwb3N0SnNvbihkYXRhLCBhZGRpdGlvbmFsUGF0aCwgYWRkaXRpb25hbEhlYWRlcnMpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6UE9TVCBTZW5kXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBhZGRpdGlvbmFsSGVhZGVycyB8fCB7fTtcclxuICAgICAgICBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9SZXF1ZXN0KFwiUE9TVFwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgYWRkaXRpb25hbFBhdGgsIGhlYWRlcnMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OlBPU1QgUmVjZWl2ZWRcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBOZXR3b3JrQ2xpZW50OjpHRVQgUGFyc2UgRmFpbGVkXCIsIHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAobmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIkZhaWxlZCBQT1NUIHJlcXVlc3QsIHVuYWJsZSB0byBwYXJzZSByZXNwb25zZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQ6IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRVcmkoKSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VEYXRhXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHJlcXVlc3QgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gc2VuZCB0aGUgZGF0YSB3aXRoLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsUGF0aCBBbiBhZGRpdGlvbmFsIHBhdGggYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBwYXRoLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxIZWFkZXJzIEV4dHJhIGhlYWRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgb2JqZWN0IHJldHVybmVkIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZG9SZXF1ZXN0KG1ldGhvZCwgZGF0YSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGFkZGl0aW9uYWxIZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgICAgICBsZXQgdXJpID0gdGhpcy5fbmV0d29ya0VuZFBvaW50LmdldFVyaSgpO1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRSb290UGF0aCgpO1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGFkZGl0aW9uYWxQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaXBwZWQgPSBgLyR7YWRkaXRpb25hbFBhdGgucmVwbGFjZSgvXlxcLyovLCBcIlwiKX1gO1xyXG4gICAgICAgICAgICAgICAgcGF0aCArPSBzdHJpcHBlZDtcclxuICAgICAgICAgICAgICAgIHVyaSArPSBzdHJpcHBlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvdG9jb2w6IGAke3RoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRQcm90b2NvbCgpfTpgLFxyXG4gICAgICAgICAgICAgICAgaG9zdG5hbWU6IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRIb3N0KCksXHJcbiAgICAgICAgICAgICAgICBwb3J0OiB0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0UG9ydCgpLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuX3RpbWVvdXRNcyA+IDAgPyB0aGlzLl90aW1lb3V0TXMgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgcmVxID0gdGhpcy5faHR0cENsaWVudFJlcXVlc3Qob3B0aW9ucywgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICByZXMuc2V0RW5jb2RpbmcoXCJ1dGY4XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVzLm9uKFwiZGF0YVwiLCAocmVzcG9uc2VCb2R5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhICs9IHJlc3BvbnNlQm9keTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVzLm9uKFwiZW5kXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gTmV0d29ya0NsaWVudDo6UmVjZWl2ZWQgRmFpbFwiLCB7IGNvZGU6IHJlcy5zdGF0dXNDb2RlLCBkYXRhOiByZXNwb25zZURhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKGBGYWlsZWQgJHttZXRob2R9IHJlcXVlc3RgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogdXJpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JSZXNwb25zZUNvZGU6IHJlcy5zdGF0dXNDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JSZXNwb25zZTogcmVzcG9uc2VEYXRhIHx8IHJlcy5zdGF0dXNNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcS5vbihcImVycm9yXCIsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihcIjw9PT0gTmV0d29ya0NsaWVudDo6RXJyb3JlZFwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKGBGYWlsZWQgJHttZXRob2R9IHJlcXVlc3RgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQ6IHVyaSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvclJlc3BvbnNlOiBlcnJcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcS5vbihcInRpbWVvdXRcIiwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKFwiPD09PSBOZXR3b3JrQ2xpZW50OjpUaW1lZCBPdXRcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihgRmFpbGVkICR7bWV0aG9kfSByZXF1ZXN0LCB0aW1lZCBvdXRgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQ6IHVyaVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgcmVxLndyaXRlKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcS5lbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5ldHdvcmtDbGllbnQgPSBOZXR3b3JrQ2xpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libVYwZDI5eWEwTnNhV1Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl1WlhSM2IzSnJMMjVsZEhkdmNtdERiR2xsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN1FVRkJRU3d3UlVGQmRVVTdRVUZEZGtVc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGSmVrVXNkMFZCUVhGRk8wRkJRM0pGTERKRFFVRTJRanRCUVVNM1FpdzJRMEZCSzBJN1FVRkZMMEk3TzBkQlJVYzdRVUZEU0R0SlFWVkpPenM3T3pzN1QwRk5SenRKUVVOSUxGbEJRVmtzWlVGQmFVTXNSVUZCUlN4TlFVRm5RaXhGUVVGRkxGbEJRVzlDTEVOQlFVTXNSVUZETVVVc2FVSkJRVGhLTzFGQlEzUkxMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRVZCUVVVN1dVRkRka01zVFVGQlRTeEpRVUZKTERKQ1FVRlpMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTnFSVHRSUVVORUxFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeFRRVUZUTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNKRUxFMUJRVTBzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRFJDUVVFMFFpeERRVUZETEVOQlFVTTdVMEZEZUVRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1pVRkJaU3hEUVVGRE8xRkJRM2hETEVsQlFVa3NRMEZCUXl4VlFVRlZMRWRCUVVjc1UwRkJVeXhEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hKUVVGSkxFbEJRVWtzZFVKQlFWVXNSVUZCUlN4RFFVRkRPMUZCUXpGRExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhwUWtGQmFVSXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhYUVVGWExFVkJRVVVzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVWNlNDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJReTlGTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zWTBGQmRVSXNSVUZCUlN4cFFrRkJaMFE3VVVGRGRFWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zT0VKQlFUaENMRU5CUVVNc1EwRkJRenRSUVVOc1JDeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNSVUZCUlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0UlFVTjJSaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4clEwRkJhME1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5vUWl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRlpMRVZCUVVVc1kwRkJkVUlzUlVGQlJTeHBRa0ZCWjBRN1VVRkRja2NzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc0swSkJRU3RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRla1FzVFVGQlRTeEpRVUZKTEVkQlFVY3NUVUZCVFN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVWQlFVVXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdVVUZEYmtZc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNiVU5CUVcxRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETjBRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRGFFSXNRMEZCUXp0SlFVVkVPenM3T3pzN1QwRk5SenRKUVVOSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVa3NZMEZCZFVJc1JVRkJSU3hwUWtGQlowUTdVVUZETjBZc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNPRUpCUVRoQ0xFTkJRVU1zUTBGQlF6dFJRVU5zUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEZOQlFWTXNSVUZCUlN4alFVRmpMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTTdZVUZEY2tVc1NVRkJTU3hEUVVGRExFTkJRVU1zV1VGQldTeEZRVUZGTEVWQlFVVTdXVUZEYmtJc1NVRkJTVHRuUWtGRFFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTXhReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4clEwRkJhME1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRhRVVzVDBGQlZTeFJRVUZSTEVOQlFVTTdZVUZEZEVJN1dVRkJReXhQUVVGUExFZEJRVWNzUlVGQlJUdG5Ra0ZEVml4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eHpRMEZCYzBNc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVVc1RVRkJTeXhEUVVGRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl3NFEwRkJPRU1zUlVGQlJUdHZRa0ZEYmtVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVU3YjBKQlEzaERMRkZCUVZFc1JVRkJSU3haUVVGWk8ybENRVU42UWl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOUU8xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEV0N4RFFVRkRPMGxCUlVRN096czdPenM3TzA5QlVVYzdTVUZEU1N4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGUExFbEJRVThzUlVGQlJTeGpRVUYxUWl4RlFVRkZMR2xDUVVGblJEdFJRVU14Unl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5d3JRa0ZCSzBJc1EwRkJReXhEUVVGRE8xRkJSVzVFTEUxQlFVMHNUMEZCVHl4SFFVRkhMR2xDUVVGcFFpeEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTjRReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03VVVGRk4wTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxHTkJRV01zUlVGQlJTeFBRVUZQTEVOQlFVTTdZVUZEZGtVc1NVRkJTU3hEUVVGRExFTkJRVU1zV1VGQldTeEZRVUZGTEVWQlFVVTdXVUZEYmtJc1NVRkJTVHRuUWtGRFFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTXhReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4dFEwRkJiVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRha1VzVDBGQlZTeFJRVUZSTEVOQlFVTTdZVUZEZEVJN1dVRkJReXhQUVVGUExFZEJRVWNzUlVGQlJUdG5Ra0ZEVml4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eHpRMEZCYzBNc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVVc1RVRkJTeXhEUVVGRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl3clEwRkJLME1zUlVGQlJUdHZRa0ZEY0VVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVU3YjBKQlEzaERMRkZCUVZFc1JVRkJSU3haUVVGWk8ybENRVU42UWl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOUU8xRkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEV0N4RFFVRkRPMGxCUlVRN096czdPenM3VDBGUFJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJZeXhGUVVGRkxFbEJRVmtzUlVGQlJTeGpRVUYxUWl4RlFVRkZMR2xDUVVGblJEdFJRVU14U0N4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGVExFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUXpORExFMUJRVTBzVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhKUVVGSkxFVkJRVVVzUTBGQlF6dFpRVVY0UXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03V1VGRGVrTXNTVUZCU1N4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xbEJReTlETEVsQlFVa3NRMEZCUXl3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlR0blFrRkRka01zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4alFVRmpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVNeFJDeEpRVUZKTEVsQlFVa3NVVUZCVVN4RFFVRkRPMmRDUVVOcVFpeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRPMkZCUTI1Q08xbEJSVVFzVFVGQlRTeFBRVUZQTEVkQlFVYzdaMEpCUTFvc1VVRkJVU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITzJkQ1FVTnVSQ3hSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZEZWtNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVU3WjBKQlEzSkRMRWxCUVVrc1JVRkJSU3hKUVVGSk8yZENRVU5XTEUxQlFVMHNSVUZCUlN4TlFVRk5PMmRDUVVOa0xFOUJRVTg3WjBKQlExQXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTzJGQlF6ZEVMRU5CUVVNN1dVRkZSaXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVN1owSkJRMnBFTEVsQlFVa3NXVUZCV1N4SFFVRkhMRVZCUVVVc1EwRkJRenRuUWtGRGRFSXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZUVJc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1JVRkJSVHR2UWtGRE5VSXNXVUZCV1N4SlFVRkpMRmxCUVZrc1EwRkJRenRuUWtGRGFrTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMGdzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGRk8yOUNRVU5tTEVsQlFVa3NSMEZCUnl4RFFVRkRMRlZCUVZVc1MwRkJTeXhIUVVGSExFVkJRVVU3ZDBKQlEzaENMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dHhRa0ZEZWtJN2VVSkJRVTA3ZDBKQlEwZ3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zYlVOQlFXMURMRVZCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1dVRkJXU3hGUVVGRkxFTkJRVU1zUTBGQlF6dDNRa0ZEY2tjc1RVRkJUU3hEUVVGRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4VlFVRlZMRTFCUVUwc1ZVRkJWU3hGUVVGRk96UkNRVU5vUkN4UlFVRlJMRVZCUVVVc1IwRkJSenMwUWtGRFlpeHBRa0ZCYVVJc1JVRkJSU3hIUVVGSExFTkJRVU1zVlVGQlZUczBRa0ZEYWtNc1lVRkJZU3hGUVVGRkxGbEJRVmtzU1VGQlNTeEhRVUZITEVOQlFVTXNZVUZCWVR0NVFrRkRia1FzUTBGQlF5eERRVUZETEVOQlFVTTdjVUpCUTFBN1owSkJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVUN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlEzQkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETERaQ1FVRTJRaXhEUVVGRExFTkJRVU03WjBKQlJXeEVMRTFCUVUwc1EwRkJReXhKUVVGSkxESkNRVUZaTEVOQlFVTXNWVUZCVlN4TlFVRk5MRlZCUVZVc1JVRkJSVHR2UWtGRGFFUXNVVUZCVVN4RlFVRkZMRWRCUVVjN2IwSkJRMklzWVVGQllTeEZRVUZGTEVkQlFVYzdhVUpCUTNKQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFsQlExSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRTQ3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRk8yZENRVU4wUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5d3JRa0ZCSzBJc1EwRkJReXhEUVVGRE8yZENRVVZ3UkN4TlFVRk5MRU5CUVVNc1NVRkJTU3d5UWtGQldTeERRVUZETEZWQlFWVXNUVUZCVFN4eFFrRkJjVUlzUlVGQlJUdHZRa0ZETTBRc1VVRkJVU3hGUVVGRkxFZEJRVWM3YVVKQlEyaENMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMUlzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEU0N4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1owSkJRemRDTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WVVGRGJrSTdXVUZEUkN4SFFVRkhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFpDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1EwRkRTanRCUVRGTVJDeHpRMEV3VEVNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5ldHdvcmtDbGllbnRGYWN0b3J5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5XCIpO1xyXG5jb25zdCBwbGF0Zm9ybUNyeXB0b0ZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvcGxhdGZvcm1DcnlwdG9GYWN0b3J5XCIpO1xyXG5jb25zdCBybmdTZXJ2aWNlRmFjdG9yeV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiKTtcclxuY29uc3QgcGxhdGZvcm1DcnlwdG9fMSA9IHJlcXVpcmUoXCIuL2NyeXB0by9wbGF0Zm9ybUNyeXB0b1wiKTtcclxuY29uc3QgbmV0d29ya0NsaWVudF8xID0gcmVxdWlyZShcIi4vbmV0d29yay9uZXR3b3JrQ2xpZW50XCIpO1xyXG5jb25zdCBybmdTZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9ybmdTZXJ2aWNlXCIpO1xyXG4vKipcclxuICogUGxhdGZvcm0gYWJzdHJhY3Rpb24gbGF5ZXIgZm9yIE5vZGVKUy5cclxuICovXHJcbmNsYXNzIFBBTCB7XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uIGZvciB0aGUgUEFMLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgaWYgKCFQQUwuX2lzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgUEFMLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbmV0d29ya0NsaWVudEZhY3RvcnlfMS5OZXR3b3JrQ2xpZW50RmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZGVmYXVsdFwiLCAobmV0d29ya0VuZHBvaW50LCBsb2dnZXIsIHRpbWVvdXRNcykgPT4gbmV3IG5ldHdvcmtDbGllbnRfMS5OZXR3b3JrQ2xpZW50KG5ldHdvcmtFbmRwb2ludCwgbG9nZ2VyLCB0aW1lb3V0TXMpKTtcclxuICAgICAgICAgICAgcm5nU2VydmljZUZhY3RvcnlfMS5SbmdTZXJ2aWNlRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZGVmYXVsdFwiLCAoKSA9PiBuZXcgcm5nU2VydmljZV8xLlJuZ1NlcnZpY2UoKSk7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtQ3J5cHRvRmFjdG9yeV8xLlBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZGVmYXVsdFwiLCAoKSA9PiBuZXcgcGxhdGZvcm1DcnlwdG9fMS5QbGF0Zm9ybUNyeXB0bygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QQUwuX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuZXhwb3J0cy5QQUwgPSBQQUw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDNCaGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc09FWkJRVEpHTzBGQlF6TkdMR2RIUVVFMlJqdEJRVU0zUml4M1JrRkJjVVk3UVVGSGNrWXNORVJCUVhsRU8wRkJRM3BFTERKRVFVRjNSRHRCUVVONFJDeHpSRUZCYlVRN1FVRkZia1E3TzBkQlJVYzdRVUZEU0R0SlFVbEpPenM3VDBGSFJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMR05CUVdNc1JVRkJSVHRaUVVOeVFpeEhRVUZITEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVNeFFpd3lRMEZCYjBJc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1pVRkJhVU1zUlVGQlJTeE5RVUZsTEVWQlFVVXNVMEZCYVVJc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTdzJRa0ZCWVN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hOUVVGTkxFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTjBUQ3h4UTBGQmFVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc2RVSkJRVlVzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZWtVc05rTkJRWEZDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMQ3RDUVVGakxFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzQkdPMUZCUlVRc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdTVUZETjBJc1EwRkJRenM3UVVGb1FrUXNaVUZCWlR0QlFVTkJMR3RDUVVGakxFZEJRVmtzUzBGQlN5eERRVUZETzBGQlJtNUVMR3RDUVd0Q1F5SjkiLCJ2YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY3J5cHRvID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJjcnlwdG9cIikpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgcmFuZG9tIG51bWJlciBnZW5lcmF0aW9uIHNlcnZpY2UuXHJcbiAqL1xyXG5jbGFzcyBSbmdTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgYW4gYXJyYXkgb2YgcmFuZG9tIG51bWJlcnMuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgbnVtYmVycyB0byBnZW5lcmF0ZS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9ycy5cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGUobGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGNyeXB0by5yYW5kb21CeXRlcyhsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJuZ1NlcnZpY2UgPSBSbmdTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbTVuVTJWeWRtbGpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpaWEoyYVdObGN5OXlibWRUWlhKMmFXTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPMEZCUTBFc0swTkJRV2xETzBGQlJXcERPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenRQUVVsSE8wbEJRMGtzVVVGQlVTeERRVUZETEUxQlFXTTdVVUZETVVJc1QwRkJUeXhKUVVGSkxGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGRFUXNRMEZCUXp0RFFVTktPMEZCVkVRc1owTkJVME1pZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==