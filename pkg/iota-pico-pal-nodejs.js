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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 3 */
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

var platformError_1 = __webpack_require__(15);

var stringHelper_1 = __webpack_require__(1);

var crypto = __importStar(__webpack_require__(5));
/**
 * Implementation of a platform crypto for use in NodeJS.
 */


var PlatformCrypto =
/*#__PURE__*/
function () {
  /**
   * Create a new instance of PlatformCrypto.
   * @param publicKey The key to use for decoding data.
   * @param privateKey The key to use for encoding data.
   */
  function PlatformCrypto(publicKey, privateKey) {
    _classCallCheck(this, PlatformCrypto);

    this._privateKey = privateKey;
    this._publicKey = publicKey;
  }
  /**
   * Encrypt the given data.
   * @param data The data to encrypt.
   * @returns The encrypted data.
   */


  _createClass(PlatformCrypto, [{
    key: "encrypt",
    value: function encrypt(data) {
      if (stringHelper_1.StringHelper.isEmpty(this._privateKey)) {
        throw new platformError_1.PlatformError("The privateKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var buffer = new Buffer(data, "ascii");
      var encrypted = crypto.privateEncrypt(this._privateKey, buffer);
      return encrypted.toString("hex");
    }
    /**
     * Decrypt the given data.
     * @param data The data to decrypt.
     * @returns The decrypted data.
     */

  }, {
    key: "decrypt",
    value: function decrypt(data) {
      if (stringHelper_1.StringHelper.isEmpty(this._privateKey) && stringHelper_1.StringHelper.isEmpty(this._publicKey)) {
        throw new platformError_1.PlatformError("The privateKey or publicKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var buffer = new Buffer(data, "hex");
      var decrypted = crypto.publicDecrypt(this._publicKey || this._privateKey, buffer);
      return decrypted.toString("ascii");
    }
    /**
     * Sign the given data.
     * @param data The data to sign.
     * @returns The signature.
     */

  }, {
    key: "sign",
    value: function sign(data) {
      if (stringHelper_1.StringHelper.isEmpty(this._privateKey)) {
        throw new platformError_1.PlatformError("The privateKey must be a non empty string");
      }

      if (stringHelper_1.StringHelper.isEmpty(data)) {
        throw new platformError_1.PlatformError("The data must be a non empty string");
      }

      var signer = crypto.createSign("RSA-SHA256");
      signer.update(data);
      return signer.sign(this._privateKey, "hex");
    }
    /**
     * Verify the given data.
     * @param data The data to verify.
     * @param signature The signature to verify againt the data.
     * @returns True if the verification is successful.
     */

  }, {
    key: "verify",
    value: function verify(data, signature) {
      if (stringHelper_1.StringHelper.isEmpty(this._publicKey)) {
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
      return verifier.verify(this._publicKey, signature, "hex");
    }
  }]);

  return PlatformCrypto;
}();

exports.PlatformCrypto = PlatformCrypto;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var jsonHelper_1 = __webpack_require__(16);

var stringHelper_1 = __webpack_require__(1);
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

    _this = _possibleConstructorReturn(this, (CoreError.__proto__ || Object.getPrototypeOf(CoreError)).call(this, message));
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(2));

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

var networkError_1 = __webpack_require__(17);

var numberHelper_1 = __webpack_require__(18);

var objectHelper_1 = __webpack_require__(19);

var stringHelper_1 = __webpack_require__(1);

var nullLogger_1 = __webpack_require__(20);

var http = __importStar(__webpack_require__(21));

var https = __importStar(__webpack_require__(22));
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
     * @param additionalPath An additional path append to the endpoint path.
     * @param data The data to send.
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
    /* @internal */

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
/* 7 */
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

var crypto = __importStar(__webpack_require__(5));
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
/* 8 */
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

__export(__webpack_require__(9));

__export(__webpack_require__(3));

__export(__webpack_require__(6));

__export(__webpack_require__(7));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var networkClientFactory_1 = __webpack_require__(12);

var platformCryptoFactory_1 = __webpack_require__(13);

var rngServiceFactory_1 = __webpack_require__(14);

var platformCrypto_1 = __webpack_require__(3);

var networkClient_1 = __webpack_require__(6);

var rngService_1 = __webpack_require__(7);
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
                  networkClientFactory_1.NetworkClientFactory.instance().register("default", function (networkEndpoint) {
                    return new networkClient_1.NetworkClient(networkEndpoint);
                  });
                  rngServiceFactory_1.RngServiceFactory.instance().register("default", function () {
                    return new rngService_1.RngService();
                  });
                  platformCryptoFactory_1.PlatformCryptoFactory.instance().register("default", function (publicKey, privateKey) {
                    return new platformCrypto_1.PlatformCrypto(publicKey, privateKey);
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
/* 10 */
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

module.exports = __webpack_require__(11);

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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(0);
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

    return _possibleConstructorReturn(this, (NetworkClientFactory.__proto__ || Object.getPrototypeOf(NetworkClientFactory)).call(this));
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(0);
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

    return _possibleConstructorReturn(this, (PlatformCryptoFactory.__proto__ || Object.getPrototypeOf(PlatformCryptoFactory)).call(this));
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var factoryBase_1 = __webpack_require__(0);
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

    return _possibleConstructorReturn(this, (RngServiceFactory.__proto__ || Object.getPrototypeOf(RngServiceFactory)).call(this));
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(4);
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

    _this = _possibleConstructorReturn(this, (PlatformError.__proto__ || Object.getPrototypeOf(PlatformError)).call(this, message, additional, innerError));
    _this.domain = "Platform";
    return _this;
  }

  return PlatformError;
}(coreError_1.CoreError);

exports.PlatformError = PlatformError;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var coreError_1 = __webpack_require__(4);
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

    _this = _possibleConstructorReturn(this, (NetworkError.__proto__ || Object.getPrototypeOf(NetworkError)).call(this, message, additional, innerError));
    _this.domain = "Network";
    return _this;
  }

  return NetworkError;
}(coreError_1.CoreError);

exports.NetworkError = NetworkError;

/***/ }),
/* 18 */
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
/* 19 */
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
     * @param type The type of the object
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmN2FkYWM5OWNmOGU4ODY3OGMxNiIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ZhY3Rvcmllcy9mYWN0b3J5QmFzZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvc3RyaW5nSGVscGVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2NyeXB0by9wbGF0Zm9ybUNyeXB0by50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL2NvcmVFcnJvci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL25ldHdvcmsvbmV0d29ya0NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NlcnZpY2VzL3JuZ1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhbC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9yL3BsYXRmb3JtRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL2pzb25IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9lcnJvci9uZXR3b3JrRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9oZWxwZXJzL251bWJlckhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2hlbHBlcnMvb2JqZWN0SGVscGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbG9nZ2Vycy9udWxsTG9nZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7Ozs7Ozs7O0FBQUE7OztBQUNtQjtBQUNFLFNBQU0sU0FzRDNCO0FBQUM7QUEvQ2tCOzs7Ozs7Ozs7NkJBQWEsTUFBd0M7QUFDNUQsV0FBYyxjQUFPLE9BQU0sUUFDbkM7QUFBQztBQU1nQjs7Ozs7OzsrQkFBYTtBQUMxQixhQUFXLEtBQWMsY0FBTyxPQUNwQztBQUFDO0FBT1k7Ozs7Ozs7OzJCQUFhO0FBQ2hCLGFBQUssS0FBYyxjQUFPLE9B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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7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aUIsYUFBYSxhQUN2RjtBQUFDO0FBT3lCOzs7Ozs7OztpQ0FBWTtBQUMvQixVQUFPLFdBQVMsUUFBVSxXQUFlLFdBQUU7QUFDcEMsZUFDVjtBQUFNLGFBQUU7QUFDSixZQUFpQixlQUFHLE9BQWEsV0FBaUIsYUFBTyxPQUFhLGFBQU8sT0FBWSxZQUFZOztBQUNyRyxZQUFhLFVBQWMsYUFBTSxNQUFTOztBQUNwQyxlQUFTLFdBQVcsUUFBTyxTQUFPLENBQWpDLEdBQXlDLFFBQUssS0FDekQ7QUFDSjtBQUNIOzs7Ozs7QUE3Q0QsdUJBNkNDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDRDs7Ozs7Ozs7Ozs7Ozs7QUFNaUI7Ozs7OzJCQUFnQyxTQUM3QyxDQUFDO0FBT1M7Ozs7Ozs7O3dCQUFnQyxTQUMxQyxDQUFDO0FBT1U7Ozs7Ozs7O3lCQUFnQyxTQUMzQyxDQUFDO0FBT2E7Ozs7Ozs7OzRCQUFnQyxTQUM5QyxDQUFDO0FBUVc7Ozs7Ozs7OzswQkFBZ0IsU0FBMkIsS0FDdkQsQ0FDSDs7Ozs7O0FBekNELHFCQXlDQyxXOzs7Ozs7QUM5Q0QsaUM7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImlvdGEtcGljby1wYWwtbm9kZWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAaW90YS1waWNvL3BhbC1ub2RlanNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9wYWwtbm9kZWpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvUGFsTm9kZWpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmN2FkYWM5OWNmOGU4ODY3OGMxNiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gZ2VuZXJhdGUgdHlwZXMuXHJcbiAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgb2JqZWN0IHR5cGVzIGluIHRoZSBmYWN0b3J5LlxyXG4gKi9cclxuY2xhc3MgRmFjdG9yeUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLyogQGludGVybmFsICovXHJcbiAgICAgICAgdGhpcy5fdHlwZXMgPSB7fTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgdHlwZSB3aXRoIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHR5cGUgdG8gcmVnaXN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gdHlwZUNvbnN0cnVjdG9yIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKG5hbWUsIHR5cGVDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gPSB0eXBlQ29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVucmVnaXN0ZXIgYSB0eXBlIGZyb20gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byB1bnJlZ2lzdGVyLlxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlc1tuYW1lXTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRG9lcyB0aGUgZmFjdG9yeSBjb250YWluIGEgc3BlY2lmaWMgdHlwZS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGxvb2sgZm9yLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdHlwZSBleGlzdHMuXHJcbiAgICAgKi9cclxuICAgIGV4aXN0cyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5fdHlwZXNbbmFtZV0gIT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogTGlzdCB0aGUgdHlwZXMgaW4gdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdHlwZSB0byBsb29rIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR5cGUgZXhpc3RzLlxyXG4gICAgICovXHJcbiAgICB0eXBlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRJbnN0YW5jZSgpLl90eXBlcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhbiBvYmplY3QgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0eXBlIHRvIGNyZWF0ZS5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG4gICAgICogQHJldHVybnMgQSBuZXcgaW5zdGFuY2Ugb2YgdGhlIHR5cGUgaWYgaXQgZXhpc3RzLCBvciB1bmRlZmluZWQgaWYgaXQgZG9lcyBub3QuXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZShuYW1lLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLl90eXBlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX3R5cGVzW25hbWVdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GYWN0b3J5QmFzZSA9IEZhY3RvcnlCYXNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labUZqZEc5eWVVSmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMMlpoWTNSdmNubENZWE5sTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHM3TzBkQlIwYzdRVUZEU0R0SlFVRkJPMUZCUTBrc1pVRkJaVHRSUVVORkxGZEJRVTBzUjBGQk9FTXNSVUZCUlN4RFFVRkRPMGxCYzBRMVJTeERRVUZETzBsQmNFUkhPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1NVRkJXU3hGUVVGRkxHVkJRWE5ETzFGQlEyaEZMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRE8wbEJRM1JFTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeFZRVUZWTEVOQlFVTXNTVUZCV1R0UlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRE0wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1NVRkJXVHRSUVVOMFFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVVNN1NVRkRla1FzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeExRVUZMTzFGQlExSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRMnhFTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhKUVVGWkxFVkJRVVVzUjBGQlJ5eEpRVUZYTzFGQlEzUkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVTndReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU40UWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRekZETEVOQlFVTTdVVUZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOS0xFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEY2tJc1EwRkJRenRKUVVOTUxFTkJRVU03UTBGSlNqdEJRWGhFUkN4clEwRjNSRU1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZmFjdG9yaWVzL2ZhY3RvcnlCYXNlLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogU3RyaW5nIGhlbHBlciBtZXRob2RzLlxyXG4gKi9cclxuY2xhc3MgU3RyaW5nSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGEgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0IGZvciBpdHMgc3RyaW5neW5lc3MuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZmFsc2UgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSBcIltvYmplY3QgU3RyaW5nXVwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBzdHJpbmcgdGhhdCBpcyBlbXB0eS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIG5vIGVtcHR5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuICFTdHJpbmdIZWxwZXIuaXNTdHJpbmcodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHN0cmluZyBhbGwgQVNDSUkgY2hhcmFjdGVycy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBzdHJpbmcgdG8gdGVzdCBpZiBpcyBpcyBBU0NJSS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbGwgQVNDSUkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0FzY2lpKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IC9eW1xceDAwLVxceEZGXSokLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jb2RlIG5vbiBBU0NJSSBjaGFyYWN0ZXJzIHdpdGggY29udHJvbCBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdmFsdWUgdG8gZXNjYXBlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGVzY2FwZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZW5jb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1tcXHUwMDdGLVxcdUZGRkZdL2csIChjaHIpID0+IGBcXFxcdSR7KGAwMDAwJHtjaHIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNil9YCkuc3Vic3RyKC00KX1gKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIGNvbnRyb2wgY2hhcmFjdGVycyB0byBBU0NJSS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCBzdHJpbmcgdG8gY29udmVydCBiYWNrIHRvIEFTQ0lJLlxyXG4gICAgICogQHJldHVybnMgVGhlIGRlY29kZWQgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjb2RlTm9uQVNDSUkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nSGVscGVyLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnJlcGxhY2UoL1xcXFx1KFtcXGRcXHddezR9KS9naSwgKG1hdGNoLCBncnApID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZ3JwLCAxNikpKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0hlbHBlciA9IFN0cmluZ0hlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSeWFXNW5TR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YzNSeWFXNW5TR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVenRaUVVONFF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzYVVKQlFXbENMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVZVN1VVRkROVUlzVFVGQlRTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNdlJDeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJZVHRSUVVNdlFpeE5RVUZOTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzVTBGQlV6dFpRVU40UXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEV0QlFXRTdVVUZEZEVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVNdlNpeERRVUZETzBsQlJVUTdPenM3VDBGSlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJZVHRSUVVOMFF5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU5vU2l4RFFVRkRPME5CUTBvN1FVRXZRMFFzYjBOQkswTkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9oZWxwZXJzL3N0cmluZ0hlbHBlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwbGF0Zm9ybUVycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvcGxhdGZvcm1FcnJvclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0byA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiY3J5cHRvXCIpKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIGEgcGxhdGZvcm0gY3J5cHRvIGZvciB1c2UgaW4gTm9kZUpTLlxyXG4gKi9cclxuY2xhc3MgUGxhdGZvcm1DcnlwdG8ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUGxhdGZvcm1DcnlwdG8uXHJcbiAgICAgKiBAcGFyYW0gcHVibGljS2V5IFRoZSBrZXkgdG8gdXNlIGZvciBkZWNvZGluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIHByaXZhdGVLZXkgVGhlIGtleSB0byB1c2UgZm9yIGVuY29kaW5nIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpY0tleSwgcHJpdmF0ZUtleSkge1xyXG4gICAgICAgIHRoaXMuX3ByaXZhdGVLZXkgPSBwcml2YXRlS2V5O1xyXG4gICAgICAgIHRoaXMuX3B1YmxpY0tleSA9IHB1YmxpY0tleTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRW5jcnlwdCB0aGUgZ2l2ZW4gZGF0YS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGVuY3J5cHQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZW5jcnlwdGVkIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGVuY3J5cHQoZGF0YSkge1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLl9wcml2YXRlS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgcHJpdmF0ZUtleSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBkYXRhIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgQnVmZmVyKGRhdGEsIFwiYXNjaWlcIik7XHJcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkID0gY3J5cHRvLnByaXZhdGVFbmNyeXB0KHRoaXMuX3ByaXZhdGVLZXksIGJ1ZmZlcik7XHJcbiAgICAgICAgcmV0dXJuIGVuY3J5cHRlZC50b1N0cmluZyhcImhleFwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVjcnlwdCB0aGUgZ2l2ZW4gZGF0YS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGRlY3J5cHQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjcnlwdGVkIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGRlY3J5cHQoZGF0YSkge1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLl9wcml2YXRlS2V5KSAmJiBzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eSh0aGlzLl9wdWJsaWNLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBwcml2YXRlS2V5IG9yIHB1YmxpY0tleSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBkYXRhIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgQnVmZmVyKGRhdGEsIFwiaGV4XCIpO1xyXG4gICAgICAgIGNvbnN0IGRlY3J5cHRlZCA9IGNyeXB0by5wdWJsaWNEZWNyeXB0KHRoaXMuX3B1YmxpY0tleSB8fCB0aGlzLl9wcml2YXRlS2V5LCBidWZmZXIpO1xyXG4gICAgICAgIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoXCJhc2NpaVwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2lnbiB0aGUgZ2l2ZW4gZGF0YS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIHNpZ24uXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc2lnbmF0dXJlLlxyXG4gICAgICovXHJcbiAgICBzaWduKGRhdGEpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodGhpcy5fcHJpdmF0ZUtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIHByaXZhdGVLZXkgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShkYXRhKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgZGF0YSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gY3J5cHRvLmNyZWF0ZVNpZ24oXCJSU0EtU0hBMjU2XCIpO1xyXG4gICAgICAgIHNpZ25lci51cGRhdGUoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHNpZ25lci5zaWduKHRoaXMuX3ByaXZhdGVLZXksIFwiaGV4XCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJpZnkgdGhlIGdpdmVuIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byB2ZXJpZnkuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlIFRoZSBzaWduYXR1cmUgdG8gdmVyaWZ5IGFnYWludCB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZlcmlmaWNhdGlvbiBpcyBzdWNjZXNzZnVsLlxyXG4gICAgICovXHJcbiAgICB2ZXJpZnkoZGF0YSwgc2lnbmF0dXJlKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHRoaXMuX3B1YmxpY0tleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIHB1YmxpY0tleSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBkYXRhIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoc2lnbmF0dXJlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgc2lnbmF0dXJlIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2ZXJpZmllciA9IGNyeXB0by5jcmVhdGVWZXJpZnkoXCJSU0EtU0hBMjU2XCIpO1xyXG4gICAgICAgIHZlcmlmaWVyLnVwZGF0ZShkYXRhKTtcclxuICAgICAgICByZXR1cm4gdmVyaWZpZXIudmVyaWZ5KHRoaXMuX3B1YmxpY0tleSwgc2lnbmF0dXJlLCBcImhleFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXRmb3JtQ3J5cHRvID0gUGxhdGZvcm1DcnlwdG87XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhkR1p2Y20xRGNubHdkRzh1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZZM0o1Y0hSdkwzQnNZWFJtYjNKdFEzSjVjSFJ2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3TzBGQlFVRXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVWNlJTd3JRMEZCYVVNN1FVRkZha003TzBkQlJVYzdRVUZEU0R0SlFVOUpPenM3TzA5QlNVYzdTVUZEU0N4WlFVRlpMRk5CUVdsQ0xFVkJRVVVzVlVGQmJVSTdVVUZET1VNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVVUZET1VJc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eFRRVUZUTEVOQlFVTTdTVUZEYUVNc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTU3hQUVVGUExFTkJRVU1zU1VGQldUdFJRVU4yUWl4RlFVRkZMRU5CUVVNc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzcERMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETERKRFFVRXlReXhEUVVGRExFTkJRVU03VVVGRGVrVXNRMEZCUXp0UlFVTkVMRVZCUVVVc1EwRkJReXhEUVVGRExESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU0zUWl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xRkJRMjVGTEVOQlFVTTdVVUZEUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRla01zVFVGQlRTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTJ4RkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM0pETEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUMEZCVHl4RFFVRkRMRWxCUVZrN1VVRkRka0lzUlVGQlJTeERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGJFWXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zZDBSQlFYZEVMRU5CUVVNc1EwRkJRenRSUVVOMFJpeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemRDTEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1VVRkRia1VzUTBGQlF6dFJRVU5FTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTjJReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVOd1JpeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRWxCUVVrc1EwRkJReXhKUVVGWk8xRkJRM0JDTEVWQlFVVXNRMEZCUXl4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGVrTXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRSUVVONlJTeERRVUZETzFGQlEwUXNSVUZCUlN4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRemRDTEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1VVRkRia1VzUTBGQlF6dFJRVU5FTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdVVUZETDBNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNN1NVRkZSRHM3T3pzN1QwRkxSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEpRVUZaTEVWQlFVVXNVMEZCYVVJN1VVRkRla01zUlVGQlJTeERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVONFF5eE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXd3UTBGQk1FTXNRMEZCUXl4RFFVRkRPMUZCUTNoRkxFTkJRVU03VVVGRFJDeEZRVUZGTEVOQlFVTXNRMEZCUXl3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkROMElzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0UlFVTnVSU3hEUVVGRE8xRkJRMFFzUlVGQlJTeERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJ4RExFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMREJEUVVFd1F5eERRVUZETEVOQlFVTTdVVUZEZUVVc1EwRkJRenRSUVVORUxFMUJRVTBzVVVGQlVTeEhRVUZITEUxQlFVMHNRMEZCUXl4WlFVRlpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03VVVGRGJrUXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFJRVU4wUWl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU01UkN4RFFVRkRPME5CUTBvN1FVRjRSa1FzZDBOQmQwWkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9jcnlwdG8vcGxhdGZvcm1DcnlwdG8udHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGpzb25IZWxwZXJfMSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL2pzb25IZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG4vKipcclxuICogQSBjb3JlIGltcGxlbWVudGF0aW9uIG9mIGFuIGVycm9yLlxyXG4gKi9cclxuY2xhc3MgQ29yZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQ29yZUVycm9yLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsIEFkZGl0aW9uYWwgZGV0YWlscyBhYm91dCB0aGUgZXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gaW5uZXJFcnJvciBBZGQgaW5mb3JtYXRpb24gZnJvbSBpbm5lciBlcnJvciBpZiB0aGVyZSB3YXMgb25lLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsID0gYWRkaXRpb25hbCA/IGFkZGl0aW9uYWwgOiB7fTtcclxuICAgICAgICB0aGlzLmlubmVyRXJyb3IgPSBpbm5lckVycm9yO1xyXG4gICAgICAgIHRoaXMuZG9tYWluID0gXCJDb3JlXCI7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGFuIG9iamVjdCBjb3VsZCBiZSBhIENvcmVFcnJvci5cclxuICAgICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byBjaGVjayBpZiBpdCBpcyBhIENvcmVFcnJvci5cclxuICAgICAqIEByZXR1cm5zIHRydWUgSWYgdGhlIHRlc3RlZCBvYmplY3QgaXMgYSBDb3JlRXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0Vycm9yKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiBcIm1lc3NhZ2VcIiBpbiBvYmogJiYgXCJhZGRpdGlvbmFsXCIgaW4gb2JqO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgdGhlIGVycm9yIHRvIGEgcmVhZGFibGUgdmVyc2lvbi5cclxuICAgICAqL1xyXG4gICAgZm9ybWF0KCkge1xyXG4gICAgICAgIGxldCBvdXQgPSBcIlwiO1xyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodGhpcy5kb21haW4pKSB7XHJcbiAgICAgICAgICAgIG91dCArPSBgJHt0aGlzLmRvbWFpbn06IGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkodGhpcy5tZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBvdXQgKz0gYCR7dGhpcy5tZXNzYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmFkZGl0aW9uYWwpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKG91dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBgXFx0JHtrZXl9OiAke2pzb25IZWxwZXJfMS5Kc29uSGVscGVyLnN0cmluZ2lmeSh0aGlzLmFkZGl0aW9uYWxba2V5XSl9XFxuYDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Db3JlRXJyb3IgPSBDb3JlRXJyb3I7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXlaVVZ5Y205eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJWeWNtOXlMMk52Y21WRmNuSnZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNjMFJCUVcxRU8wRkJRMjVFTERCRVFVRjFSRHRCUVVWMlJEczdSMEZGUnp0QlFVTklMR1ZCUVhWQ0xGTkJRVkVzUzBGQlN6dEpRV2RDYUVNN096czdPMDlCUzBjN1NVRkRTQ3haUVVGWkxFOUJRV1VzUlVGQlJTeFZRVUZyUXl4RlFVRkZMRlZCUVd0Q08xRkJReTlGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVObUxFbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0UlFVTXZReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCVVR0UlFVTXhRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eExRVUZMTEZOQlFWTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1NVRkJTU3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNTVUZCU1N4VFFVRlRMRWxCUVVrc1IwRkJSeXhKUVVGSkxGbEJRVmtzU1VGQlNTeEhRVUZITEVOQlFVTTdTVUZEYmtnc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NUVUZCVFR0UlFVTlVMRWxCUVVrc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF6dFJRVVZpTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTTdVVUZET1VJc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOMFF5eEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRE4wSXNRMEZCUXp0UlFVVkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xRkJRekZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEycENMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU03V1VGRGFFSXNRMEZCUXp0WlFVTkVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJZc1IwRkJSeXhKUVVGSkxFdEJRVXNzUjBGQlJ5eExRVUZMTEhWQ1FVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRM1pGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTFBc1EwRkJRenRSUVVWRUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdTVUZEWml4RFFVRkRPME5CUTBvN1FVRXZSRVFzT0VKQkswUkRJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9lcnJvci9jb3JlRXJyb3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjcnlwdG9cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBuZXR3b3JrRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9uZXR3b3JrRXJyb3JcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IG51bGxMb2dnZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIik7XHJcbmNvbnN0IGh0dHAgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImh0dHBcIikpO1xyXG5jb25zdCBodHRwcyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiaHR0cHNcIikpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgYSBub2RlIGNsaWVudCBmb3IgdXNlIGluIE5vZGVKUy5cclxuICovXHJcbmNsYXNzIE5ldHdvcmtDbGllbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgTmV0d29ya0NsaWVudC5cclxuICAgICAqIEBwYXJhbSBuZXR3b3JrRW5kUG9pbnQgVGhlIGVuZHBvaW50IHRvIHVzZSBmb3IgdGhlIGNsaWVudC5cclxuICAgICAqIEBwYXJhbSBsb2dnZXIgTG9nZ2VyIHRvIHNlbmQgY29tbXVuaWNhdGlvbiBpbmZvIHRvLlxyXG4gICAgICogQHBhcmFtIHRpbWVvdXRNcyBUaGUgdGltZW91dCBpbiBtcyBiZWZvcmUgYWJvcnRpbmcuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5ldHdvcmtFbmRQb2ludCwgbG9nZ2VyLCB0aW1lb3V0TXMgPSAwLCBodHRwQ2xpZW50UmVxdWVzdCkge1xyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShuZXR3b3JrRW5kUG9pbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgbmV0d29ya0VuZFBvaW50IG11c3QgYmUgZGVmaW5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFudW1iZXJIZWxwZXJfMS5OdW1iZXJIZWxwZXIuaXNJbnRlZ2VyKHRpbWVvdXRNcykgfHwgdGltZW91dE1zIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKFwiVGhlIHRpbWVvdXRNcyBtdXN0IGJlID49IDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX25ldHdvcmtFbmRQb2ludCA9IG5ldHdvcmtFbmRQb2ludDtcclxuICAgICAgICB0aGlzLl90aW1lb3V0TXMgPSB0aW1lb3V0TXM7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyIHx8IG5ldyBudWxsTG9nZ2VyXzEuTnVsbExvZ2dlcigpO1xyXG4gICAgICAgIHRoaXMuX2h0dHBDbGllbnRSZXF1ZXN0ID0gaHR0cENsaWVudFJlcXVlc3QgfHwgKG5ldHdvcmtFbmRQb2ludC5nZXRQcm90b2NvbCgpID09PSBcImh0dHBcIiA/IGh0dHAucmVxdWVzdCA6IGh0dHBzLnJlcXVlc3QpO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5iYW5uZXIoXCJOZXR3b3JrIENsaWVudFwiLCB7IGVuZFBvaW50OiB0aGlzLl9uZXR3b3JrRW5kUG9pbnQgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCBkYXRhIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxQYXRoIEFuIGFkZGl0aW9uYWwgcGF0aCBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IHBhdGguXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbEhlYWRlcnMgRXh0cmEgaGVhZGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBvYmplY3QgcmV0dXJuZWQgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXQoYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OkdFVCBTZW5kXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmRvUmVxdWVzdChcIkdFVFwiLCB1bmRlZmluZWQsIGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycyk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IE5ldHdvcmtDbGllbnQ6OkdFVCBSZWNlaXZlZFwiLCByZXNwKTtcclxuICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUG9zdCBkYXRhIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxQYXRoIEFuIGFkZGl0aW9uYWwgcGF0aCBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IHBhdGguXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBzZW5kLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxIZWFkZXJzIEV4dHJhIGhlYWRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgb2JqZWN0IHJldHVybmVkIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcG9zdChkYXRhLCBhZGRpdGlvbmFsUGF0aCwgYWRkaXRpb25hbEhlYWRlcnMpIHtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6UE9TVCBTZW5kXCIsIGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmRvUmVxdWVzdChcIlBPU1RcIiwgZGF0YSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gTmV0d29ya0NsaWVudDo6UE9TVCBSZWNlaXZlZFwiLCByZXNwKTtcclxuICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGRhdGEgYXMgSlNPTiBhc3luY2hyb25vdXNseS5cclxuICAgICAqIEB0eXBlcGFyYW0gVSBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgcmV0dXJuZWQgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxQYXRoIEFuIGFkZGl0aW9uYWwgcGF0aCBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IHBhdGguXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbEhlYWRlcnMgRXh0cmEgaGVhZGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBvYmplY3QgcmV0dXJuZWQgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXRKc29uKGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycykge1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBOZXR3b3JrQ2xpZW50OjpHRVQgU2VuZFwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb1JlcXVlc3QoXCJHRVRcIiwgdW5kZWZpbmVkLCBhZGRpdGlvbmFsUGF0aCwgYWRkaXRpb25hbEhlYWRlcnMpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OkdFVCBSZWNlaXZlZFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OkdFVCBQYXJzZSBGYWlsZWRcIiwgcmVzcG9uc2VEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRocm93IChuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKFwiRmFpbGVkIEdFVCByZXF1ZXN0LCB1bmFibGUgdG8gcGFyc2UgcmVzcG9uc2VcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZFBvaW50OiB0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0VXJpKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlRGF0YVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBvc3QgZGF0YSBhcyBKU09OIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICogQHR5cGVwYXJhbSBUIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSBvYmplY3QgdG8gc2VuZC5cclxuICAgICAqIEB0eXBlcGFyYW0gVSBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgcmV0dXJuZWQgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsUGF0aCBBbiBhZGRpdGlvbmFsIHBhdGggYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBwYXRoLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxIZWFkZXJzIEV4dHJhIGhlYWRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgb2JqZWN0IHJldHVybmVkIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgcG9zdEpzb24oZGF0YSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OlBPU1QgU2VuZFwiKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gYWRkaXRpb25hbEhlYWRlcnMgfHwge307XHJcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRvUmVxdWVzdChcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGFkZGl0aW9uYWxQYXRoLCBoZWFkZXJzKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2VEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBOZXR3b3JrQ2xpZW50OjpQT1NUIFJlY2VpdmVkXCIsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6R0VUIFBhcnNlIEZhaWxlZFwiLCByZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgKG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJGYWlsZWQgUE9TVCByZXF1ZXN0LCB1bmFibGUgdG8gcGFyc2UgcmVzcG9uc2VcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZFBvaW50OiB0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0VXJpKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlRGF0YVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGFzeW5jIGRvUmVxdWVzdChtZXRob2QsIGRhdGEsIGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBhZGRpdGlvbmFsSGVhZGVycyB8fCB7fTtcclxuICAgICAgICAgICAgbGV0IHVyaSA9IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRVcmkoKTtcclxuICAgICAgICAgICAgbGV0IHBhdGggPSB0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0Um9vdFBhdGgoKTtcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShhZGRpdGlvbmFsUGF0aCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlwcGVkID0gYC8ke2FkZGl0aW9uYWxQYXRoLnJlcGxhY2UoL15cXC8qLywgXCJcIil9YDtcclxuICAgICAgICAgICAgICAgIHBhdGggKz0gc3RyaXBwZWQ7XHJcbiAgICAgICAgICAgICAgICB1cmkgKz0gc3RyaXBwZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHByb3RvY29sOiBgJHt0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0UHJvdG9jb2woKX06YCxcclxuICAgICAgICAgICAgICAgIGhvc3RuYW1lOiB0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0SG9zdCgpLFxyXG4gICAgICAgICAgICAgICAgcG9ydDogdGhpcy5fbmV0d29ya0VuZFBvaW50LmdldFBvcnQoKSxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLl90aW1lb3V0TXMgPiAwID8gdGhpcy5fdGltZW91dE1zIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IHRoaXMuX2h0dHBDbGllbnRSZXF1ZXN0KG9wdGlvbnMsIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcmVzLnNldEVuY29kaW5nKFwidXRmOFwiKTtcclxuICAgICAgICAgICAgICAgIHJlcy5vbihcImRhdGFcIiwgKHJlc3BvbnNlQm9keSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSArPSByZXNwb25zZUJvZHk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlcy5vbihcImVuZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IE5ldHdvcmtDbGllbnQ6OlJlY2VpdmVkIEZhaWxcIiwgeyBjb2RlOiByZXMuc3RhdHVzQ29kZSwgZGF0YTogcmVzcG9uc2VEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihgRmFpbGVkICR7bWV0aG9kfSByZXF1ZXN0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQ6IHVyaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUmVzcG9uc2VDb2RlOiByZXMuc3RhdHVzQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUmVzcG9uc2U6IHJlc3BvbnNlRGF0YSB8fCByZXMuc3RhdHVzTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXEub24oXCJlcnJvclwiLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoXCI8PT09IE5ldHdvcmtDbGllbnQ6OkVycm9yZWRcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihgRmFpbGVkICR7bWV0aG9kfSByZXF1ZXN0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZFBvaW50OiB1cmksXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JSZXNwb25zZTogZXJyXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXEub24oXCJ0aW1lb3V0XCIsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihcIjw9PT0gTmV0d29ya0NsaWVudDo6VGltZWQgT3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoYEZhaWxlZCAke21ldGhvZH0gcmVxdWVzdCwgdGltZWQgb3V0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZFBvaW50OiB1cmlcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHJlcS53cml0ZShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXEuZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5OZXR3b3JrQ2xpZW50ID0gTmV0d29ya0NsaWVudDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm1WMGQyOXlhME5zYVdWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5dVpYUjNiM0pyTDI1bGRIZHZjbXREYkdsbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdRVUZCUVN3d1JVRkJkVVU3UVVGRGRrVXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkpla1VzZDBWQlFYRkZPMEZCUTNKRkxESkRRVUUyUWp0QlFVTTNRaXcyUTBGQkswSTdRVUZGTDBJN08wZEJSVWM3UVVGRFNEdEpRVlZKT3pzN096dFBRVXRITzBsQlEwZ3NXVUZCV1N4bFFVRnBReXhGUVVGRkxFMUJRV2RDTEVWQlFVVXNXVUZCYjBJc1EwRkJReXhGUVVNeFJTeHBRa0ZCT0VvN1VVRkRkRXNzUlVGQlJTeERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNoRExFMUJRVTBzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVVUZEYkVVc1EwRkJRenRSUVVORUxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNNa0pCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFUXNUVUZCVFN4SlFVRkpMREpDUVVGWkxFTkJRVU1zTkVKQlFUUkNMRU5CUVVNc1EwRkJRenRSUVVONlJDeERRVUZETzFGQlEwUXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEhRVUZITEdWQlFXVXNRMEZCUXp0UlFVTjRReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNTVUZCU1N4SlFVRkpMSFZDUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NhVUpCUVdsQ0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNWMEZCVnl4RlFVRkZMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZGZWtnc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTXZSU3hEUVVGRE8wbEJSVVE3T3pzN08wOUJTMGM3U1VGRFNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMR05CUVhWQ0xFVkJRVVVzYVVKQlFXZEVPMUZCUTNSR0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdVVUZEYkVRc1RVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzWTBGQll5eEZRVUZGTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03VVVGRGRrWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zYTBOQlFXdERMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE5VUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVUTdPenM3T3p0UFFVMUhPMGxCUTBrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZaTEVWQlFVVXNZMEZCZFVJc1JVRkJSU3hwUWtGQlowUTdVVUZEY2tjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNLMEpCUVN0Q0xFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdVVUZEZWtRc1RVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFVkJRVVVzWTBGQll5eEZRVUZGTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03VVVGRGJrWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zYlVOQlFXMURMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGRE4wUXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJRenRKUVVOb1FpeERRVUZETzBsQlJVUTdPenM3T3p0UFFVMUhPMGxCUTBrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlNTeGpRVUYxUWl4RlFVRkZMR2xDUVVGblJEdFJRVU0zUml4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xRkJRMnhFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNZMEZCWXl4RlFVRkZMR2xDUVVGcFFpeERRVUZETzJGQlEzSkZMRWxCUVVrc1EwRkJReXhEUVVGRExGbEJRVmtzUlVGQlJTeEZRVUZGTzFsQlEyNUNMRWxCUVVrc1EwRkJRenRuUWtGRFJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTXhReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4clEwRkJhME1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRhRVVzVFVGQlRTeERRVUZKTEZGQlFWRXNRMEZCUXp0WlFVTjJRaXhEUVVGRE8xbEJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFdDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXh6UTBGQmMwTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRuUWtGRGVFVXNUVUZCU3l4RFFVRkRMRWxCUVVrc01rSkJRVmtzUTBGQlF5dzRRMEZCT0VNc1JVRkJSVHR2UWtGRGJrVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRM2hETEZGQlFWRXNSVUZCUlN4WlFVRlpPMmxDUVVONlFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5ZTEVOQlFVTTdTVUZGUkRzN096czdPenM3VDBGUlJ6dEpRVU5KTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVU4c1NVRkJUeXhGUVVGRkxHTkJRWFZDTEVWQlFVVXNhVUpCUVdkRU8xRkJRekZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN1VVRkZia1FzVFVGQlRTeFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFbEJRVWtzUlVGQlJTeERRVUZETzFGQlEzaERMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eHJRa0ZCYTBJc1EwRkJRenRSUVVVM1F5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hqUVVGakxFVkJRVVVzVDBGQlR5eERRVUZETzJGQlEzWkZMRWxCUVVrc1EwRkJReXhEUVVGRExGbEJRVmtzUlVGQlJTeEZRVUZGTzFsQlEyNUNMRWxCUVVrc1EwRkJRenRuUWtGRFJDeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzJkQ1FVTXhReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4dFEwRkJiVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRha1VzVFVGQlRTeERRVUZKTEZGQlFWRXNRMEZCUXp0WlFVTjJRaXhEUVVGRE8xbEJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFdDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXh6UTBGQmMwTXNSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenRuUWtGRGVFVXNUVUZCU3l4RFFVRkRMRWxCUVVrc01rSkJRVmtzUTBGQlF5d3JRMEZCSzBNc1JVRkJSVHR2UWtGRGNFVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRM2hETEZGQlFWRXNSVUZCUlN4WlFVRlpPMmxDUVVONlFpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlNMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5ZTEVOQlFVTTdTVUZGUkN4bFFVRmxPMGxCUTFBc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZqTEVWQlFVVXNTVUZCV1N4RlFVRkZMR05CUVhWQ0xFVkJRVVVzYVVKQlFXZEVPMUZCUXpOSUxFMUJRVTBzUTBGQlF5eEpRVUZKTEU5QlFVOHNRMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU16UXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkZlRU1zU1VGQlNTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMWxCUTNwRExFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0WlFVTXZReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRlRU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4alFVRmpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRPMmRDUVVNeFJDeEpRVUZKTEVsQlFVa3NVVUZCVVN4RFFVRkRPMmRDUVVOcVFpeEhRVUZITEVsQlFVa3NVVUZCVVN4RFFVRkRPMWxCUTNCQ0xFTkJRVU03V1VGRlJDeE5RVUZOTEU5QlFVOHNSMEZCUnp0blFrRkRXaXhSUVVGUkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVYzdaMEpCUTI1RUxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTjZReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZEY2tNc1NVRkJTU3hGUVVGRkxFbEJRVWs3WjBKQlExWXNUVUZCVFN4RlFVRkZMRTFCUVUwN1owSkJRMlFzVDBGQlR6dG5Ra0ZEVUN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTTdZVUZETjBRc1EwRkJRenRaUVVWR0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSVHRuUWtGRGFrUXNTVUZCU1N4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU4wUWl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJkQ1FVTjRRaXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hGUVVGRk8yOUNRVU0xUWl4WlFVRlpMRWxCUVVrc1dVRkJXU3hEUVVGRE8yZENRVU5xUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFNDeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVVU3YjBKQlEyWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPM2RDUVVONlFpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN2IwSkJRekZDTEVOQlFVTTdiMEpCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03ZDBKQlEwb3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zYlVOQlFXMURMRVZCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1dVRkJXU3hGUVVGRkxFTkJRVU1zUTBGQlF6dDNRa0ZEY2tjc1RVRkJUU3hEUVVGRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4VlFVRlZMRTFCUVUwc1ZVRkJWU3hGUVVGRk96UkNRVU5vUkN4UlFVRlJMRVZCUVVVc1IwRkJSenMwUWtGRFlpeHBRa0ZCYVVJc1JVRkJSU3hIUVVGSExFTkJRVU1zVlVGQlZUczBRa0ZEYWtNc1lVRkJZU3hGUVVGRkxGbEJRVmtzU1VGQlNTeEhRVUZITEVOQlFVTXNZVUZCWVR0NVFrRkRia1FzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUTFJc1EwRkJRenRuUWtGRFRDeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTlFMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMGdzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUlVGQlJUdG5Ra0ZEY0VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNOa0pCUVRaQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZGYkVRc1RVRkJUU3hEUVVGRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4VlFVRlZMRTFCUVUwc1ZVRkJWU3hGUVVGRk8yOUNRVU5vUkN4UlFVRlJMRVZCUVVVc1IwRkJSenR2UWtGRFlpeGhRVUZoTEVWQlFVVXNSMEZCUnp0cFFrRkRja0lzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEVWl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVU3WjBKQlEzUkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEN0Q1FVRXJRaXhEUVVGRExFTkJRVU03WjBKQlJYQkVMRTFCUVUwc1EwRkJReXhKUVVGSkxESkNRVUZaTEVOQlFVTXNWVUZCVlN4TlFVRk5MSEZDUVVGeFFpeEZRVUZGTzI5Q1FVTXpSQ3hSUVVGUkxFVkJRVVVzUjBGQlJ6dHBRa0ZEYUVJc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFVpeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTTVRaXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNCQ0xFTkJRVU03V1VGRFJDeEhRVUZITEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRaQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdRMEZEU2p0QlFXeE1SQ3h6UTBGclRFTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9uZXR3b3JrL25ldHdvcmtDbGllbnQudHMiLCJ2YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjcnlwdG8gPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImNyeXB0b1wiKSk7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiByYW5kb20gbnVtYmVyIGdlbmVyYXRpb24gc2VydmljZS5cclxuICovXHJcbmNsYXNzIFJuZ1NlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBhbiBhcnJheSBvZiByYW5kb20gbnVtYmVycy5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiBudW1iZXJzIHRvIGdlbmVyYXRlLlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgb2YgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzLlxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZShsZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvLnJhbmRvbUJ5dGVzKGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUm5nU2VydmljZSA9IFJuZ1NlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtNW5VMlZ5ZG1salpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5elpYSjJhV05sY3k5eWJtZFRaWEoyYVdObExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN08wRkJRMEVzSzBOQlFXbERPMEZCUldwRE96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NVVUZCVVN4RFFVRkRMRTFCUVdNN1VVRkRNVUlzVFVGQlRTeERRVUZETEVsQlFVa3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjBSQ3hEUVVGRE8wTkJRMG83UVVGVVJDeG5RMEZUUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvc2VydmljZXMvcm5nU2VydmljZS50cyIsImZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9wYWxcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9jcnlwdG8vcGxhdGZvcm1DcnlwdG9cIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9uZXR3b3JrL25ldHdvcmtDbGllbnRcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zZXJ2aWNlcy9ybmdTZXJ2aWNlXCIpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRIUVVWSE8wRkJRMGdzTWtKQlFYTkNPMEZCUTNSQ0xEWkRRVUYzUXp0QlFVTjRReXcyUTBGQmQwTTdRVUZEZUVNc01rTkJRWE5ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvaW5kZXgudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG5ldHdvcmtDbGllbnRGYWN0b3J5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5XCIpO1xyXG5jb25zdCBwbGF0Zm9ybUNyeXB0b0ZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvcGxhdGZvcm1DcnlwdG9GYWN0b3J5XCIpO1xyXG5jb25zdCBybmdTZXJ2aWNlRmFjdG9yeV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiKTtcclxuY29uc3QgcGxhdGZvcm1DcnlwdG9fMSA9IHJlcXVpcmUoXCIuL2NyeXB0by9wbGF0Zm9ybUNyeXB0b1wiKTtcclxuY29uc3QgbmV0d29ya0NsaWVudF8xID0gcmVxdWlyZShcIi4vbmV0d29yay9uZXR3b3JrQ2xpZW50XCIpO1xyXG5jb25zdCBybmdTZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9ybmdTZXJ2aWNlXCIpO1xyXG4vKipcclxuICogUGxhdGZvcm0gYWJzdHJhY3Rpb24gbGF5ZXIgZm9yIE5vZGVKUy5cclxuICovXHJcbmNsYXNzIFBBTCB7XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uIGZvciB0aGUgUEFMLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBpZiAoIVBBTC5faXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICBQQUwuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBuZXR3b3JrQ2xpZW50RmFjdG9yeV8xLk5ldHdvcmtDbGllbnRGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJkZWZhdWx0XCIsIChuZXR3b3JrRW5kcG9pbnQpID0+IG5ldyBuZXR3b3JrQ2xpZW50XzEuTmV0d29ya0NsaWVudChuZXR3b3JrRW5kcG9pbnQpKTtcclxuICAgICAgICAgICAgcm5nU2VydmljZUZhY3RvcnlfMS5SbmdTZXJ2aWNlRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZGVmYXVsdFwiLCAoKSA9PiBuZXcgcm5nU2VydmljZV8xLlJuZ1NlcnZpY2UoKSk7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtQ3J5cHRvRmFjdG9yeV8xLlBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZGVmYXVsdFwiLCAocHVibGljS2V5LCBwcml2YXRlS2V5KSA9PiBuZXcgcGxhdGZvcm1DcnlwdG9fMS5QbGF0Zm9ybUNyeXB0byhwdWJsaWNLZXksIHByaXZhdGVLZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcbi8qIEBpbnRlcm5hbCAqL1xyXG5QQUwuX2lzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuZXhwb3J0cy5QQUwgPSBQQUw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHRnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDNCaGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc09FWkJRVEpHTzBGQlF6TkdMR2RIUVVFMlJqdEJRVU0zUml4M1JrRkJjVVk3UVVGRmNrWXNORVJCUVhsRU8wRkJRM3BFTERKRVFVRjNSRHRCUVVONFJDeHpSRUZCYlVRN1FVRkZia1E3TzBkQlJVYzdRVUZEU0R0SlFVbEpPenRQUVVWSE8wbEJRMGtzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZPMUZCUXpGQ0xFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFSXNSMEZCUnl4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRE1VSXNNa05CUVc5Q0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExHVkJRV2xETEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc05rSkJRV0VzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUXk5SUxIRkRRVUZwUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3gxUWtGQlZTeEZRVUZGTEVOQlFVTXNRMEZCUXp0WlFVTjZSU3cyUTBGQmNVSXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRlZCUVZVc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTd3JRa0ZCWXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF5OUlMRU5CUVVNN1VVRkZSQ3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMGxCUXpkQ0xFTkJRVU03TzBGQlprUXNaVUZCWlR0QlFVTkJMR3RDUVVGakxFZEJRVmtzUzBGQlN5eERRVUZETzBGQlJtNUVMR3RDUVdsQ1F5SjlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL3BhbC50cyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCIuL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBuZXR3b3JrIGNsaWVudHMuXHJcbiAqL1xyXG5jbGFzcyBOZXR3b3JrQ2xpZW50RmFjdG9yeSBleHRlbmRzIGZhY3RvcnlCYXNlXzEuRmFjdG9yeUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBEb24ndCBhbGxvdyBtYW51YWwgY29uc3RydWN0aW9uIG9mIHRoZSBmYWN0b3J5LlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgaW5zdGFuY2Ugb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZmFjdG9yeSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICghTmV0d29ya0NsaWVudEZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIE5ldHdvcmtDbGllbnRGYWN0b3J5Ll9pbnN0YW5jZSA9IG5ldyBOZXR3b3JrQ2xpZW50RmFjdG9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmV0d29ya0NsaWVudEZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gTmV0d29ya0NsaWVudEZhY3RvcnkuaW5zdGFuY2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5ldHdvcmtDbGllbnRGYWN0b3J5ID0gTmV0d29ya0NsaWVudEZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJtVjBkMjl5YTBOc2FXVnVkRVpoWTNSdmNua3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdlptRmpkRzl5YVdWekwyNWxkSGR2Y210RGJHbGxiblJHWVdOMGIzSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGRFFTd3JRMEZCTkVNN1FVRkZOVU03TzBkQlJVYzdRVUZEU0N3d1FrRkJhME1zVTBGQlVTeDVRa0ZCTWtJN1NVRkpha1U3T3p0UFFVZEhPMGxCUTBnN1VVRkRTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVR0UlFVTnNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEc5Q1FVRnZRaXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEYkVNc2IwSkJRVzlDTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc2IwSkJRVzlDTEVWQlFVVXNRMEZCUXp0UlFVTm9SU3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOTUxGZEJRVmM3VVVGRGFrSXNUVUZCVFN4RFFVRkRMRzlDUVVGdlFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUXpORExFTkJRVU03UTBGRFNqdEJRVE5DUkN4dlJFRXlRa01pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBmYWN0b3J5QmFzZV8xID0gcmVxdWlyZShcIi4vZmFjdG9yeUJhc2VcIik7XHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGdlbmVyYXRlIHJuZyBzZXJ2aWNlLlxyXG4gKi9cclxuY2xhc3MgUGxhdGZvcm1DcnlwdG9GYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5faW5zdGFuY2UgPSBuZXcgUGxhdGZvcm1DcnlwdG9GYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQbGF0Zm9ybUNyeXB0b0ZhY3RvcnkuX2luc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyogQGludGVybmFsICovXHJcbiAgICBnZXRJbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gUGxhdGZvcm1DcnlwdG9GYWN0b3J5Lmluc3RhbmNlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbGF0Zm9ybUNyeXB0b0ZhY3RvcnkgPSBQbGF0Zm9ybUNyeXB0b0ZhY3Rvcnk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhkR1p2Y20xRGNubHdkRzlHWVdOMGIzSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwyWmhZM1J2Y21sbGN5OXdiR0YwWm05eWJVTnllWEIwYjBaaFkzUnZjbmt1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVTkJMQ3REUVVFMFF6dEJRVVUxUXpzN1IwRkZSenRCUVVOSUxESkNRVUZ0UXl4VFFVRlJMSGxDUVVFMFFqdEpRVWx1UlRzN08wOUJSMGM3U1VGRFNEdFJRVU5KTEV0QlFVc3NSVUZCUlN4RFFVRkRPMGxCUTFvc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhSUVVGUk8xRkJRMnhDTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOdVF5eHhRa0ZCY1VJc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeHhRa0ZCY1VJc1JVRkJSU3hEUVVGRE8xRkJRMnhGTEVOQlFVTTdVVUZEUkN4TlFVRk5MRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUXpORExFTkJRVU03U1VGRlJDeGxRVUZsTzBsQlEwd3NWMEZCVnp0UlFVTnFRaXhOUVVGTkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03U1VGRE5VTXNRMEZCUXp0RFFVTktPMEZCTTBKRUxITkVRVEpDUXlKOVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeS50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZmFjdG9yeUJhc2VfMSA9IHJlcXVpcmUoXCIuL2ZhY3RvcnlCYXNlXCIpO1xyXG4vKipcclxuICogRmFjdG9yeSB0byBnZW5lcmF0ZSBybmcgc2VydmljZS5cclxuICovXHJcbmNsYXNzIFJuZ1NlcnZpY2VGYWN0b3J5IGV4dGVuZHMgZmFjdG9yeUJhc2VfMS5GYWN0b3J5QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIERvbid0IGFsbG93IG1hbnVhbCBjb25zdHJ1Y3Rpb24gb2YgdGhlIGZhY3RvcnkuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbnN0YW5jZSBvZiB0aGUgZmFjdG9yeS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBmYWN0b3J5IGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKCFSbmdTZXJ2aWNlRmFjdG9yeS5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUm5nU2VydmljZUZhY3RvcnkuX2luc3RhbmNlID0gbmV3IFJuZ1NlcnZpY2VGYWN0b3J5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBSbmdTZXJ2aWNlRmFjdG9yeS5faW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICAvKiBAaW50ZXJuYWwgKi9cclxuICAgIGdldEluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBSbmdTZXJ2aWNlRmFjdG9yeS5pbnN0YW5jZSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUm5nU2VydmljZUZhY3RvcnkgPSBSbmdTZXJ2aWNlRmFjdG9yeTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY201blUyVnlkbWxqWlVaaFkzUnZjbmt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZabUZqZEc5eWFXVnpMM0p1WjFObGNuWnBZMlZHWVdOMGIzSjVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGRFFTd3JRMEZCTkVNN1FVRkZOVU03TzBkQlJVYzdRVUZEU0N4MVFrRkJLMElzVTBGQlVTeDVRa0ZCZDBJN1NVRkpNMFE3T3p0UFFVZEhPMGxCUTBnN1VVRkRTU3hMUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5hTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVVUZCVVR0UlFVTnNRaXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEdsQ1FVRnBRaXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZETDBJc2FVSkJRV2xDTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc2FVSkJRV2xDTEVWQlFVVXNRMEZCUXp0UlFVTXhSQ3hEUVVGRE8xRkJRMFFzVFVGQlRTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGTkJRVk1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRc1pVRkJaVHRKUVVOTUxGZEJRVmM3VVVGRGFrSXNUVUZCVFN4RFFVRkRMR2xDUVVGcFFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNoRExFTkJRVU03UTBGRFNqdEJRVE5DUkN3NFEwRXlRa01pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZmFjdG9yaWVzL3JuZ1NlcnZpY2VGYWN0b3J5LnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgcGxhdGZvcm0gaW1wbGVtZW50YXRpb24gb2YgYW4gZXJyb3IuXHJcbiAqL1xyXG5jbGFzcyBQbGF0Zm9ybUVycm9yIGV4dGVuZHMgY29yZUVycm9yXzEuQ29yZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIFBsYXRmb3JtRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiUGxhdGZvcm1cIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXRmb3JtRXJyb3IgPSBQbGF0Zm9ybUVycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoZEdadmNtMUZjbkp2Y2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlsY25KdmNpOXdiR0YwWm05eWJVVnljbTl5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRU3d5UTBGQmQwTTdRVUZGZUVNN08wZEJSVWM3UVVGRFNDeHRRa0ZCTWtJc1UwRkJVU3h4UWtGQlV6dEpRVU40UXpzN096czdUMEZMUnp0SlFVTklMRmxCUVZrc1QwRkJaU3hGUVVGRkxGVkJRV3RETEVWQlFVVXNWVUZCYTBJN1VVRkRMMFVzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03VVVGRGRrTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU03U1VGRE4wSXNRMEZCUXp0RFFVTktPMEZCV0VRc2MwTkJWME1pZlE9PVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvZXJyb3IvcGxhdGZvcm1FcnJvci50cyIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIEpzb24gaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBKc29uSGVscGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RyaW5naWZ5IGFuIG9iamVjdCB3aXRoIHJlY3Vyc2lvbiBicmVha2luZy5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LCB0byBiZSBjb252ZXJ0ZWQuXHJcbiAgICAgKiBAcGFyYW0gcmVwbGFjZXIgQSBmdW5jdGlvbiB0aGF0IHRyYW5zZm9ybXMgdGhlIHJlc3VsdHMuXHJcbiAgICAgKiBAcGFyYW0gc3BhY2UgQWRkcyBpbmRlbnRhdGlvbiwgd2hpdGUgc3BhY2UsIGFuZCBsaW5lIGJyZWFrIGNoYXJhY3RlcnMgdG8gdGhlIHJldHVybi12YWx1ZSBKU09OIHRleHQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gcmVhZC5cclxuICAgICAqIEByZXR1cm5zIFN0cmluZyB2ZXJzaW9uIG9mIHRoZSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xyXG4gICAgICAgIC8vIGVsaW1pbmF0ZXMgYW55IHJlY3Vyc2lvbiBpbiB0aGUgc3RyaW5naWZ5XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBbXTtcclxuICAgICAgICBjb25zdCByZWN1c2lvblJlcGxhY2VyID0gKGtleSwgcmVwbGFjZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIHJlcGxhY2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGUuaW5kZXhPZihyZXBsYWNlVmFsdWUpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNpcmN1bGFyIHJlZmVyZW5jZSBmb3VuZCwgZGlzY2FyZCBrZXlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5wdXNoKHJlcGxhY2VWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VyID8gcmVwbGFjZXIoa2V5LCByZXBsYWNlVmFsdWUpIDogcmVwbGFjZVZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZWN1c2lvblJlcGxhY2VyLCBzcGFjZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Kc29uSGVscGVyID0gSnNvbkhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYW5OdmJraGxiSEJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlvWld4d1pYSnpMMnB6YjI1SVpXeHdaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPenRIUVVWSE8wRkJRMGc3U1VGRFNUczdPenM3TzA5QlRVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVlVzUlVGQlJTeFJRVUV5UXl4RlFVRkZMRXRCUVhWQ08xRkJRM0JITERSRFFVRTBRenRSUVVNMVF5eE5RVUZOTEV0QlFVc3NSMEZCVlN4RlFVRkZMRU5CUVVNN1VVRkZlRUlzVFVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFZEJRVmNzUlVGQlJTeFpRVUZwUWl4RlFVRkZMRVZCUVVVN1dVRkRlRVFzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4WlFVRlpMRXRCUVVzc1VVRkJVU3hKUVVGSkxFdEJRVXNzUzBGQlN5eEpRVUZKTEVsQlFVa3NXVUZCV1N4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEyNUdMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTnlReXgzUTBGQmQwTTdiMEpCUTNoRExFMUJRVTBzUTBGQlF6dG5Ra0ZEV0N4RFFVRkRPMmRDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVTktMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdaMEpCUXpkQ0xFTkJRVU03V1VGRFRDeERRVUZETzFsQlJVUXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETzFGQlEycEZMRU5CUVVNc1EwRkJRenRSUVVWR0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSU3huUWtGQlowSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVNeFJDeERRVUZETzBOQlEwbzdRVUV6UWtRc1owTkJNa0pESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9qc29uSGVscGVyLnRzIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb3JlRXJyb3JfMSA9IHJlcXVpcmUoXCIuL2NvcmVFcnJvclwiKTtcclxuLyoqXHJcbiAqIEEgbmV0d29yayBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlcnJvci5cclxuICovXHJcbmNsYXNzIE5ldHdvcmtFcnJvciBleHRlbmRzIGNvcmVFcnJvcl8xLkNvcmVFcnJvciB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBOZXR3b3JrRXJyb3IuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWwgQWRkaXRpb25hbCBkZXRhaWxzIGFib3V0IHRoZSBlcnJvci5cclxuICAgICAqIEBwYXJhbSBpbm5lckVycm9yIEFkZCBpbmZvcm1hdGlvbiBmcm9tIGlubmVyIGVycm9yIGlmIHRoZXJlIHdhcyBvbmUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGFkZGl0aW9uYWwsIGlubmVyRXJyb3IpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBhZGRpdGlvbmFsLCBpbm5lckVycm9yKTtcclxuICAgICAgICB0aGlzLmRvbWFpbiA9IFwiTmV0d29ya1wiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTmV0d29ya0Vycm9yID0gTmV0d29ya0Vycm9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libVYwZDI5eWEwVnljbTl5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMMlZ5Y205eUwyNWxkSGR2Y210RmNuSnZjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNNa05CUVhkRE8wRkJSWGhET3p0SFFVVkhPMEZCUTBnc2EwSkJRVEJDTEZOQlFWRXNjVUpCUVZNN1NVRkRka003T3pzN08wOUJTMGM3U1VGRFNDeFpRVUZaTEU5QlFXVXNSVUZCUlN4VlFVRnJReXhGUVVGRkxGVkJRV3RDTzFGQlF5OUZMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMUZCUTNaRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRPMGxCUXpWQ0xFTkJRVU03UTBGRFNqdEJRVmhFTEc5RFFWZERJbjA9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9lcnJvci9uZXR3b3JrRXJyb3IudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBOdW1iZXIgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYW4gaW50ZWdlci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdCBmb3IgaXRzIGludGVnZXJuZXNzLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgaW50ZWdlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiAhTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBudW1iZXIuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QgZm9yIGl0cyBudW1iZXJ5bmVzcy5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIG51bWJlci5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIElzIHRoZSB2YWx1ZSBhIGZsb2F0IG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlRmxvYXQuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBudW1iZXIgaXMgZm9ybWF0dGVkIGNvcnJlY3RseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRmxvYXRTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCpcXC4/XFxkKyQvLnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgYSBpbnRlZ2VyIG51bWJlciBmb3JtYXR0ZWQgYXMgYSBzdHJpbmcsIGNhbiBiZSB1c2VkIGZvciBiaWcgbnVtYmVycyB0aGF0IHdvdWxkIG92ZXJmbG93IHBhcnNlSW50LlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGZvcm1hdHRlZCBjb3JyZWN0bHkuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0ludGVnZXJTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gL14tP1xcZCskLy50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bWJlckhlbHBlciA9IE51bWJlckhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYm5WdFltVnlTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12Ym5WdFltVnlTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCVlR0UlFVTTVRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTnlSaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTNRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFOUJRVThzUzBGQlN5eExRVUZMTEZGQlFWRXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU5vU1N4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQllUdFJRVU55UXl4TlFVRk5MRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNTMEZCWVR0UlFVTjJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBOQlEwbzdRVUZ3UTBRc2IwTkJiME5ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9udW1iZXJIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBPYmplY3QgaGVscGVyIG1ldGhvZHMuXHJcbiAqL1xyXG5jbGFzcyBPYmplY3RIZWxwZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgdmFsdWUgZW1wdHkuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgT2JqZWN0IHRvIHRlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBlbXB0eS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBPYmplY3QgdG8gdGVzdC5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBmYWxzZSA6IHR5cGVvZiAodmFsdWUpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhlIHZhbHVlIGFuIG9iamVjdCBpZiBnaXZlbiB0eXBlLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIE9iamVjdCB0byB0ZXN0LlxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIHR5cGUgb2YgdGhlIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHRoZSBzcGVjaWZpZWQgdHlwZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzVHlwZSh2YWx1ZSwgdHlwZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVDbGFzc05hbWUgPSBPYmplY3RIZWxwZXIuZ2V0Q2xhc3NOYW1lKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWVDbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZUNsYXNzTmFtZSA9PT0gT2JqZWN0SGVscGVyLmdldENsYXNzTmFtZSh0eXBlQ29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGNsYXNzIG5hbWUgb2YgYW4gb2JqZWN0IGlmIGl0IGhhcyBvbmUuXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdG8gZ2V0IHRoZSBjbGFzcyBuYW1lIGZvci5cclxuICAgICAqIEByZXR1cm5zIFRoZSBjbGFzcyBuYW1lIGlmIGl0IGhhcyBvbmUgb3IgdW5kZWZpbmVkIGlmIG5vdC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENsYXNzTmFtZShvYmplY3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIiA/IG9iamVjdC50b1N0cmluZygpIDogb2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBjb25zdHJ1Y3Rvci5tYXRjaCgvXFx3Ky9nKTtcclxuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkgPyByZXN1bHRzWzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9iamVjdEhlbHBlciA9IE9iamVjdEhlbHBlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYjJKcVpXTjBTR1ZzY0dWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJobGJIQmxjbk12YjJKcVpXTjBTR1ZzY0dWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVRzN1IwRkZSenRCUVVOSU8wbEJRMGs3T3pzN1QwRkpSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCVlR0UlFVTTFRaXhOUVVGTkxFTkJRVU1zUzBGQlN5eExRVUZMTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1UwRkJVeXhEUVVGRE8wbEJRMnBFTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGVk8xRkJRemRDTEUxQlFVMHNRMEZCUXl4TFFVRkxMRXRCUVVzc1NVRkJTU3hKUVVGSkxFdEJRVXNzUzBGQlN5eFRRVUZUTzFsQlEzaERMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhSUVVGUkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRM1JGTEVOQlFVTTdTVUZGUkRzN096czdUMEZMUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlZTeEZRVUZGTEdWQlFYbENPMUZCUTNSRUxFMUJRVTBzWTBGQll5eEhRVUZITEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGVFUXNUVUZCVFN4RFFVRkRMR05CUVdNc1MwRkJTeXhUUVVGVExFbEJRVWtzWTBGQll5eExRVUZMTEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03U1VGRGVrY3NRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVmM3VVVGRGJFTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFbEJRVWtzU1VGQlNTeE5RVUZOTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVNeFF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNKQ0xFTkJRVU03VVVGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTktMRTFCUVUwc1YwRkJWeXhIUVVGSExFOUJRVThzVFVGQlRTeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzFsQlEzSkhMRTFCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRNVU1zVFVGQlRTeERRVUZETEVOQlFVTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMUZCUTNCRkxFTkJRVU03U1VGRFRDeERRVUZETzBOQlEwbzdRVUUzUTBRc2IwTkJOa05ESW4wPVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi8uLi9zcmMvaGVscGVycy9vYmplY3RIZWxwZXIudHMiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBJTG9nZ2VyIHdoaWNoIGlzIHNpbGVudC5cclxuICovXHJcbmNsYXNzIE51bGxMb2dnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGJhbm5lciB0byB0aGUgbG9nZ2VyLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gbG9nLlxyXG4gICAgICogQHBhcmFtIGFyZ3MgQWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGxvZy5cclxuICAgICAqL1xyXG4gICAgYmFubmVyKG1lc3NhZ2UsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCBsb2cgdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGxvZyhtZXNzYWdlLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgaW5mb3JtYXRpb24gdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIGluZm8obWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIHdhcm5pbmcgdG8gdGhlIGxvZ2dlci5cclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGxvZy5cclxuICAgICAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBsb2cuXHJcbiAgICAgKi9cclxuICAgIHdhcm5pbmcobWVzc2FnZSwgLi4uYXJncykge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kIGVycm9yIHRvIHRoZSBsb2dnZXIuXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gZXJyIEFuIGVycm9yIG9iamVjdCB0byBsb2cuXHJcbiAgICAgKiBAcGFyYW0gYXJncyBBZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gbG9nLlxyXG4gICAgICovXHJcbiAgICBlcnJvcihtZXNzYWdlLCBlcnIsIC4uLmFyZ3MpIHtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk51bGxMb2dnZXIgPSBOdWxsTG9nZ2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liblZzYkV4dloyZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXNiMmRuWlhKekwyNTFiR3hNYjJkblpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVWQk96dEhRVVZITzBGQlEwZzdTVUZEU1RzN096dFBRVWxITzBsQlEwa3NUVUZCVFN4RFFVRkRMRTlCUVdVc1JVRkJSU3hIUVVGSExFbEJRVmM3U1VGRE4wTXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU1N4SFFVRkhMRU5CUVVNc1QwRkJaU3hGUVVGRkxFZEJRVWNzU1VGQlZ6dEpRVU14UXl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTkpMRWxCUVVrc1EwRkJReXhQUVVGbExFVkJRVVVzUjBGQlJ5eEpRVUZYTzBsQlF6TkRMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBrc1QwRkJUeXhEUVVGRExFOUJRV1VzUlVGQlJTeEhRVUZITEVsQlFWYzdTVUZET1VNc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzUzBGQlN5eERRVUZETEU5QlFXVXNSVUZCUlN4SFFVRlRMRVZCUVVVc1IwRkJSeXhKUVVGWE8wbEJRM1pFTEVOQlFVTTdRMEZEU2p0QlFYcERSQ3huUTBGNVEwTWlmUT09XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uLy4uL3NyYy9sb2dnZXJzL251bGxMb2dnZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImh0dHBzXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=