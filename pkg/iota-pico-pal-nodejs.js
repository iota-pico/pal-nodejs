(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@iota-pico/core/dist/error/networkError"), require("@iota-pico/core/dist/error/platformError"), require("@iota-pico/core/dist/factories/networkClientFactory"), require("@iota-pico/core/dist/factories/platformCryptoFactory"), require("@iota-pico/core/dist/factories/rngServiceFactory"), require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/core/dist/helpers/stringHelper"), require("@iota-pico/core/dist/loggers/nullLogger"));
	else if(typeof define === 'function' && define.amd)
		define("@iota-pico/pal-nodejs", ["@iota-pico/core/dist/error/networkError", "@iota-pico/core/dist/error/platformError", "@iota-pico/core/dist/factories/networkClientFactory", "@iota-pico/core/dist/factories/platformCryptoFactory", "@iota-pico/core/dist/factories/rngServiceFactory", "@iota-pico/core/dist/helpers/numberHelper", "@iota-pico/core/dist/helpers/objectHelper", "@iota-pico/core/dist/helpers/stringHelper", "@iota-pico/core/dist/loggers/nullLogger"], factory);
	else if(typeof exports === 'object')
		exports["@iota-pico/pal-nodejs"] = factory(require("@iota-pico/core/dist/error/networkError"), require("@iota-pico/core/dist/error/platformError"), require("@iota-pico/core/dist/factories/networkClientFactory"), require("@iota-pico/core/dist/factories/platformCryptoFactory"), require("@iota-pico/core/dist/factories/rngServiceFactory"), require("@iota-pico/core/dist/helpers/numberHelper"), require("@iota-pico/core/dist/helpers/objectHelper"), require("@iota-pico/core/dist/helpers/stringHelper"), require("@iota-pico/core/dist/loggers/nullLogger"));
	else
		root["IotaPicoPalNodejs"] = factory(root["@iota-pico/core/dist/error/networkError"], root["@iota-pico/core/dist/error/platformError"], root["@iota-pico/core/dist/factories/networkClientFactory"], root["@iota-pico/core/dist/factories/platformCryptoFactory"], root["@iota-pico/core/dist/factories/rngServiceFactory"], root["@iota-pico/core/dist/helpers/numberHelper"], root["@iota-pico/core/dist/helpers/objectHelper"], root["@iota-pico/core/dist/helpers/stringHelper"], root["@iota-pico/core/dist/loggers/nullLogger"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_networkError__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_platformError__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_factories_networkClientFactory__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_factories_platformCryptoFactory__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_factories_rngServiceFactory__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_stringHelper__, __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_loggers_nullLogger__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist.es6/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist.es6/crypto/platformCrypto.js":
/*!*******************************************!*\
  !*** ./dist.es6/crypto/platformCrypto.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const platformError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/platformError */ "@iota-pico/core/dist/error/platformError");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "@iota-pico/core/dist/helpers/stringHelper");
const crypto = tslib_1.__importStar(__webpack_require__(/*! crypto */ "crypto"));
/**
 * Implementation of a platform crypto for use in NodeJS.
 */
class PlatformCrypto {
    /**
     * Encrypt the given data.
     * @param privateKey The key to use for encrypting data.
     * @param data The data to encrypt.
     * @returns The encrypted data.
     */
    encrypt(privateKey, data) {
        if (stringHelper_1.StringHelper.isEmpty(privateKey)) {
            throw new platformError_1.PlatformError("The privateKey must be a non empty string");
        }
        if (stringHelper_1.StringHelper.isEmpty(data)) {
            throw new platformError_1.PlatformError("The data must be a non empty string");
        }
        const buffer = new Buffer(data, "ascii");
        const encrypted = crypto.privateEncrypt(privateKey, buffer);
        return encrypted.toString("hex");
    }
    /**
     * Decrypt the given data.
     * @param publicKey The key to use for decrypting data.
     * @param data The data to decrypt.
     * @returns The decrypted data.
     */
    decrypt(publicKey, data) {
        if (stringHelper_1.StringHelper.isEmpty(publicKey)) {
            throw new platformError_1.PlatformError("The publicKey must be a non empty string");
        }
        if (stringHelper_1.StringHelper.isEmpty(data)) {
            throw new platformError_1.PlatformError("The data must be a non empty string");
        }
        const buffer = new Buffer(data, "hex");
        const decrypted = crypto.publicDecrypt(publicKey, buffer);
        return decrypted.toString("ascii");
    }
    /**
     * Sign the given data.
     * @param privateKey The key to use for signing data.
     * @param data The data to sign.
     * @returns The signature.
     */
    sign(privateKey, data) {
        if (stringHelper_1.StringHelper.isEmpty(privateKey)) {
            throw new platformError_1.PlatformError("The privateKey must be a non empty string");
        }
        if (stringHelper_1.StringHelper.isEmpty(data)) {
            throw new platformError_1.PlatformError("The data must be a non empty string");
        }
        const signer = crypto.createSign("RSA-SHA256");
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
    verify(publicKey, data, signature) {
        if (stringHelper_1.StringHelper.isEmpty(publicKey)) {
            throw new platformError_1.PlatformError("The publicKey must be a non empty string");
        }
        if (stringHelper_1.StringHelper.isEmpty(data)) {
            throw new platformError_1.PlatformError("The data must be a non empty string");
        }
        if (stringHelper_1.StringHelper.isEmpty(signature)) {
            throw new platformError_1.PlatformError("The signature must be a non empty string");
        }
        const verifier = crypto.createVerify("RSA-SHA256");
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
    hash(algo, data, dataType, encoding) {
        if (stringHelper_1.StringHelper.isEmpty(algo)) {
            throw new platformError_1.PlatformError("The algo must be a non empty string");
        }
        if (stringHelper_1.StringHelper.isEmpty(data)) {
            throw new platformError_1.PlatformError("The data must be a non empty string");
        }
        return crypto.createHash(algo)
            .update(data, dataType)
            .digest(encoding);
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
    hmac(algo, key, data, dataType, encoding) {
        if (stringHelper_1.StringHelper.isEmpty(algo)) {
            throw new platformError_1.PlatformError("The algo must be a non empty string");
        }
        if (objectHelper_1.ObjectHelper.isEmpty(key)) {
            throw new platformError_1.PlatformError("The key must be non empty");
        }
        if (stringHelper_1.StringHelper.isEmpty(data)) {
            throw new platformError_1.PlatformError("The data must be a non empty string");
        }
        return crypto.createHmac(algo, key)
            .update(data, dataType)
            .digest(encoding);
    }
}
exports.PlatformCrypto = PlatformCrypto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1DcnlwdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY3J5cHRvL3BsYXRmb3JtQ3J5cHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFFekUsdURBQWlDO0FBRWpDOztHQUVHO0FBQ0gsTUFBYSxjQUFjO0lBQ3ZCOzs7OztPQUtHO0lBQ0ksT0FBTyxDQUFDLFVBQWtCLEVBQUUsSUFBWTtRQUMzQyxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE1BQU0sSUFBSSw2QkFBYSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDbEU7UUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUQsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FBQyxTQUFpQixFQUFFLElBQVk7UUFDMUMsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksNkJBQWEsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksNkJBQWEsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENB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

/***/ }),

/***/ "./dist.es6/index.js":
/*!***************************!*\
  !*** ./dist.es6/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * Combined index of all the modules.
 */
tslib_1.__exportStar(__webpack_require__(/*! ./pal */ "./dist.es6/pal.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./crypto/platformCrypto */ "./dist.es6/crypto/platformCrypto.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./network/networkClient */ "./dist.es6/network/networkClient.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./services/rngService */ "./dist.es6/services/rngService.js"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILGdEQUFzQjtBQUN0QixrRUFBd0M7QUFDeEMsa0VBQXdDO0FBQ3hDLGdFQUFzQyJ9

/***/ }),

/***/ "./dist.es6/network/networkClient.js":
/*!*******************************************!*\
  !*** ./dist.es6/network/networkClient.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const networkError_1 = __webpack_require__(/*! @iota-pico/core/dist/error/networkError */ "@iota-pico/core/dist/error/networkError");
const numberHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/numberHelper */ "@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/objectHelper */ "@iota-pico/core/dist/helpers/objectHelper");
const stringHelper_1 = __webpack_require__(/*! @iota-pico/core/dist/helpers/stringHelper */ "@iota-pico/core/dist/helpers/stringHelper");
const nullLogger_1 = __webpack_require__(/*! @iota-pico/core/dist/loggers/nullLogger */ "@iota-pico/core/dist/loggers/nullLogger");
const http = tslib_1.__importStar(__webpack_require__(/*! http */ "http"));
const https = tslib_1.__importStar(__webpack_require__(/*! https */ "https"));
/**
 * Implementation of a node client for use in NodeJS.
 */
class NetworkClient {
    /**
     * Create an instance of NetworkClient.
     * @param networkEndPoint The endpoint to use for the client.
     * @param logger Logger to send communication info to.
     * @param timeoutMs The timeout in ms before aborting.
     * @param httpClientRequest The client request object, usually not required.
     */
    constructor(networkEndPoint, logger, timeoutMs = 0, httpClientRequest) {
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
        this._logger.banner("Network Client", { endPoint: this._networkEndPoint });
    }
    /**
     * Get data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    get(additionalPath, additionalHeaders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._logger.info("===> NetworkClient::GET Send");
            const resp = yield this.doRequest("GET", undefined, additionalPath, additionalHeaders);
            this._logger.info("<=== NetworkClient::GET Received", resp);
            return resp;
        });
    }
    /**
     * Post data asynchronously.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    post(data, additionalPath, additionalHeaders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._logger.info("===> NetworkClient::POST Send", data);
            const resp = yield this.doRequest("POST", data, additionalPath, additionalHeaders);
            this._logger.info("<=== NetworkClient::POST Received", resp);
            return resp;
        });
    }
    /**
     * Get data as JSON asynchronously.
     * @typeparam U The generic type for the returned object.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    getJson(additionalPath, additionalHeaders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._logger.info("===> NetworkClient::GET Send");
            return this.doRequest("GET", undefined, additionalPath, additionalHeaders)
                .then((responseData) => {
                try {
                    const response = JSON.parse(responseData);
                    this._logger.info("===> NetworkClient::GET Received", response);
                    return response;
                }
                catch (err) {
                    this._logger.info("===> NetworkClient::GET Parse Failed", responseData);
                    throw (new networkError_1.NetworkError("Failed GET request, unable to parse response", {
                        endPoint: this._networkEndPoint.getUri(),
                        response: responseData
                    }));
                }
            });
        });
    }
    /**
     * Post data as JSON asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    postJson(data, additionalPath, additionalHeaders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._logger.info("===> NetworkClient::POST Send");
            const headers = additionalHeaders || {};
            headers["Content-Type"] = "application/json";
            return this.doRequest("POST", JSON.stringify(data), additionalPath, headers)
                .then((responseData) => {
                try {
                    const response = JSON.parse(responseData);
                    this._logger.info("===> NetworkClient::POST Received", response);
                    return response;
                }
                catch (err) {
                    this._logger.info("===> NetworkClient::GET Parse Failed", responseData);
                    throw (new networkError_1.NetworkError("Failed POST request, unable to parse response", {
                        endPoint: this._networkEndPoint.getUri(),
                        response: responseData
                    }));
                }
            });
        });
    }
    /**
     * Perform a request asynchronously.
     * @param method The method to send the data with.
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    doRequest(method, data, additionalPath, additionalHeaders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const headers = additionalHeaders || {};
                let uri = this._networkEndPoint.getUri();
                let path = this._networkEndPoint.getRootPath();
                if (!stringHelper_1.StringHelper.isEmpty(additionalPath)) {
                    const stripped = `/${additionalPath.replace(/^\/*/, "")}`;
                    path += stripped;
                    uri += stripped;
                }
                const options = {
                    protocol: `${this._networkEndPoint.getProtocol()}:`,
                    hostname: this._networkEndPoint.getHost(),
                    port: this._networkEndPoint.getPort(),
                    path: path,
                    method: method,
                    headers,
                    timeout: this._timeoutMs > 0 ? this._timeoutMs : undefined
                };
                const req = this._httpClientRequest(options, (res) => {
                    let responseData = "";
                    res.setEncoding("utf8");
                    res.on("data", (responseBody) => {
                        responseData += responseBody;
                    });
                    res.on("end", () => {
                        if (res.statusCode === 200) {
                            resolve(responseData);
                        }
                        else {
                            this._logger.info("<=== NetworkClient::Received Fail", { code: res.statusCode, data: responseData });
                            reject(new networkError_1.NetworkError(`Failed ${method} request`, {
                                endPoint: uri,
                                errorResponseCode: res.statusCode,
                                errorResponse: responseData || res.statusMessage
                            }));
                        }
                    });
                });
                req.on("error", (err) => {
                    this._logger.error("<=== NetworkClient::Errored");
                    reject(new networkError_1.NetworkError(`Failed ${method} request`, {
                        endPoint: uri,
                        errorResponse: err
                    }));
                });
                req.on("timeout", (err) => {
                    this._logger.error("<=== NetworkClient::Timed Out");
                    reject(new networkError_1.NetworkError(`Failed ${method} request, timed out`, {
                        endPoint: uri
                    }));
                });
                if (!objectHelper_1.ObjectHelper.isEmpty(data)) {
                    req.write(data);
                }
                req.end();
            });
        });
    }
}
exports.NetworkClient = NetworkClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrL25ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFJekUsd0VBQXFFO0FBQ3JFLG1EQUE2QjtBQUM3QixxREFBK0I7QUFFL0I7O0dBRUc7QUFDSCxNQUFhLGFBQWE7SUFVdEI7Ozs7OztPQU1HO0lBQ0gsWUFBWSxlQUFpQyxFQUFFLE1BQWdCLEVBQUUsWUFBb0IsQ0FBQyxFQUMxRSxpQkFBOEo7UUFDdEssSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN2QyxNQUFNLElBQUksMkJBQVksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDckQsTUFBTSxJQUFJLDJCQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1UsR0FBRyxDQUFDLGNBQXVCLEVBQUUsaUJBQWdEOztZQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVEOzs7Ozs7T0FNRztJQUNVLElBQUksQ0FBQyxJQUFZLEVBQUUsY0FBdUIsRUFBRSxpQkFBZ0Q7O1lBQ3JHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVEOzs7Ozs7T0FNRztJQUNVLE9BQU8sQ0FBSSxjQUF1QixFQUFFLGlCQUFnRDs7WUFDN0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUNsRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7aUJBQ3JFLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUNuQixJQUFJO29CQUNBLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNoRSxPQUFVLFFBQVEsQ0FBQztpQkFDdEI7Z0JBQUMsT0FBTyxHQUFHLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLEVBQUUsWUFBWSxDQUFDLENBQUM7b0JBQ3hFLE1BQUssQ0FBQyxJQUFJLDJCQUFZLENBQUMsOENBQThDLEVBQUU7d0JBQ25FLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO3dCQUN4QyxRQUFRLEVBQUUsWUFBWTtxQkFDekIsQ0FBQyxDQUFDLENBQUM7aUJBQ1A7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7S0FBQTtJQUVEOzs7Ozs7OztPQVFHO0lBQ1UsUUFBUSxDQUFPLElBQU8sRUFBRSxjQUF1QixFQUFFLGlCQUFnRDs7WUFDMUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUVuRCxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsSUFBSSxFQUFFLENBQUM7WUFDeEMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO1lBRTdDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDO2lCQUN2RSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDbkIsSUFBSTtvQkFDQSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDakUsT0FBVSxRQUFRLENBQUM7aUJBQ3RCO2dCQUFDLE9BQU8sR0FBRyxFQUFFO29CQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUN4RSxNQUFLLENBQUMsSUFBSSwyQkFBWSxDQUFDLCtDQUErQyxFQUFFO3dCQUNwRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTt3QkFDeEMsUUFBUSxFQUFFLFlBQVk7cUJBQ3pCLENBQUMsQ0FBQyxDQUFDO2lCQUNQO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO0tBQUE7SUFFRDs7Ozs7OztPQU9HO0lBQ1UsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFZLEVBQUUsY0FBdUIsRUFBRSxpQkFBZ0Q7O1lBQzFILE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQzNDLE1BQU0sT0FBTyxHQUFHLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztnQkFFeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN6QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQy9DLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUMxRCxJQUFJLElBQUksUUFBUSxDQUFDO29CQUNqQixHQUFHLElBQUksUUFBUSxDQUFDO2lCQUNuQjtnQkFFRCxNQUFNLE9BQU8sR0FBRztvQkFDWixRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUc7b0JBQ25ELFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUN6QyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDckMsSUFBSSxFQUFFLElBQUk7b0JBQ1YsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTztvQkFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7aUJBQzdELENBQUM7Z0JBRUYsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNqRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ3RCLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUU7d0JBQzVCLFlBQVksSUFBSSxZQUFZLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxDQUFDO29CQUNILEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTt3QkFDZixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFOzRCQUN4QixPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQ3pCOzZCQUFNOzRCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7NEJBQ3JHLE1BQU0sQ0FBQyxJQUFJLDJCQUFZLENBQUMsVUFBVSxNQUFNLFVBQVUsRUFBRTtnQ0FDaEQsUUFBUSxFQUFFLEdBQUc7Z0NBQ2IsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLFVBQVU7Z0NBQ2pDLGFBQWEsRUFBRSxZQUFZLElBQUksR0FBRyxDQUFDLGFBQWE7NkJBQ25ELENBQUMsQ0FBQyxDQUFDO3lCQUNQO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNILEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7b0JBRWxELE1BQU0sQ0FBQyxJQUFJLDJCQUFZLENBQUMsVUFBVSxNQUFNLFVBQVUsRUFBRTt3QkFDaEQsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsYUFBYSxFQUFFLEdBQUc7cUJBQ3JCLENBQUMsQ0FBQyxDQUFDO2dCQUNSLENBQUMsQ0FBQyxDQUFDO2dCQUNILEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7b0JBRXBELE1BQU0sQ0FBQyxJQUFJLDJCQUFZLENBQUMsVUFBVSxNQUFNLHFCQUFxQixFQUFFO3dCQUMzRCxRQUFRLEVBQUUsR0FBRztxQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM3QixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNuQjtnQkFDRCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNKO0FBMUxELHNDQTBMQyJ9

/***/ }),

/***/ "./dist.es6/pal.js":
/*!*************************!*\
  !*** ./dist.es6/pal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const networkClientFactory_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/networkClientFactory */ "@iota-pico/core/dist/factories/networkClientFactory");
const platformCryptoFactory_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/platformCryptoFactory */ "@iota-pico/core/dist/factories/platformCryptoFactory");
const rngServiceFactory_1 = __webpack_require__(/*! @iota-pico/core/dist/factories/rngServiceFactory */ "@iota-pico/core/dist/factories/rngServiceFactory");
const platformCrypto_1 = __webpack_require__(/*! ./crypto/platformCrypto */ "./dist.es6/crypto/platformCrypto.js");
const networkClient_1 = __webpack_require__(/*! ./network/networkClient */ "./dist.es6/network/networkClient.js");
const rngService_1 = __webpack_require__(/*! ./services/rngService */ "./dist.es6/services/rngService.js");
/**
 * Platform abstraction layer for NodeJS.
 */
class PAL {
    /**
     * Perform any initialization for the PAL.
     * @returns Promise.
     */
    static initialize() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!PAL._isInitialized) {
                PAL._isInitialized = true;
                networkClientFactory_1.NetworkClientFactory.instance().register("default", (networkEndpoint, logger, timeoutMs) => new networkClient_1.NetworkClient(networkEndpoint, logger, timeoutMs));
                rngServiceFactory_1.RngServiceFactory.instance().register("default", () => new rngService_1.RngService());
                platformCryptoFactory_1.PlatformCryptoFactory.instance().register("default", () => new platformCrypto_1.PlatformCrypto());
            }
            return Promise.resolve();
        });
    }
}
/* @internal */
PAL._isInitialized = false;
exports.PAL = PAL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3BhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhGQUEyRjtBQUMzRixnR0FBNkY7QUFDN0Ysd0ZBQXFGO0FBR3JGLDREQUF5RDtBQUN6RCwyREFBd0Q7QUFDeEQsc0RBQW1EO0FBRW5EOztHQUVHO0FBQ0gsTUFBYSxHQUFHO0lBSVo7OztPQUdHO0lBQ0ksTUFBTSxDQUFPLFVBQVU7O1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFO2dCQUNyQixHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDMUIsMkNBQW9CLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLGVBQWlDLEVBQUUsTUFBZSxFQUFFLFNBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksNkJBQWEsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RMLHFDQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSx1QkFBVSxFQUFFLENBQUMsQ0FBQztnQkFDekUsNkNBQXFCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLCtCQUFjLEVBQUUsQ0FBQyxDQUFDO2FBQ3BGO1lBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQztLQUFBOztBQWhCRCxlQUFlO0FBQ0Esa0JBQWMsR0FBWSxLQUFLLENBQUM7QUFGbkQsa0JBa0JDIn0=

/***/ }),

/***/ "./dist.es6/services/rngService.js":
/*!*****************************************!*\
  !*** ./dist.es6/services/rngService.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const crypto = tslib_1.__importStar(__webpack_require__(/*! crypto */ "crypto"));
/**
 * Implementation of random number generation service.
 */
class RngService {
    /**
     * Generate an array of random numbers.
     * @param length The number of numbers to generate.
     * @returns Array of random number generators.
     */
    generate(length) {
        return new Uint8Array(crypto.randomBytes(length));
    }
}
exports.RngService = RngService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm5nU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9ybmdTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQWlDO0FBRWpDOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBQ25COzs7O09BSUc7SUFDSSxRQUFRLENBQUMsTUFBYztRQUMxQixPQUFPLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0o7QUFURCxnQ0FTQyJ9

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "@iota-pico/core/dist/error/networkError":
/*!**********************************************************!*\
  !*** external "@iota-pico/core/dist/error/networkError" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_networkError__;

/***/ }),

/***/ "@iota-pico/core/dist/error/platformError":
/*!***********************************************************!*\
  !*** external "@iota-pico/core/dist/error/platformError" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_error_platformError__;

/***/ }),

/***/ "@iota-pico/core/dist/factories/networkClientFactory":
/*!**********************************************************************!*\
  !*** external "@iota-pico/core/dist/factories/networkClientFactory" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_factories_networkClientFactory__;

/***/ }),

/***/ "@iota-pico/core/dist/factories/platformCryptoFactory":
/*!***********************************************************************!*\
  !*** external "@iota-pico/core/dist/factories/platformCryptoFactory" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_factories_platformCryptoFactory__;

/***/ }),

/***/ "@iota-pico/core/dist/factories/rngServiceFactory":
/*!*******************************************************************!*\
  !*** external "@iota-pico/core/dist/factories/rngServiceFactory" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_factories_rngServiceFactory__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/numberHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/numberHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_numberHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/objectHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/objectHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_objectHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/helpers/stringHelper":
/*!************************************************************!*\
  !*** external "@iota-pico/core/dist/helpers/stringHelper" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_helpers_stringHelper__;

/***/ }),

/***/ "@iota-pico/core/dist/loggers/nullLogger":
/*!**********************************************************!*\
  !*** external "@iota-pico/core/dist/loggers/nullLogger" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__iota_pico_core_dist_loggers_nullLogger__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi9kaXN0LmVzNi9jcnlwdG8vcGxhdGZvcm1DcnlwdG8uanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi9kaXN0LmVzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uL2Rpc3QuZXM2L25ldHdvcmsvbmV0d29ya0NsaWVudC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uL2Rpc3QuZXM2L3BhbC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uL2Rpc3QuZXM2L3NlcnZpY2VzL3JuZ1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvbmV0d29ya0Vycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9wbGF0Zm9ybUVycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvbmV0d29ya0NsaWVudEZhY3RvcnlcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvbG9nZ2Vycy9udWxsTG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcImh0dHBzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxnREFBTztBQUMvQix3QkFBd0IsbUJBQU8sQ0FBQywwRkFBMEM7QUFDMUUsdUJBQXVCLG1CQUFPLENBQUMsNEZBQTJDO0FBQzFFLHVCQUF1QixtQkFBTyxDQUFDLDRGQUEyQztBQUMxRSxvQ0FBb0MsbUJBQU8sQ0FBQyxzQkFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdXZIOzs7Ozs7Ozs7OztBQzlIM0MsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsZ0RBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsZ0NBQU87QUFDcEMscUJBQXFCLG1CQUFPLENBQUMsb0VBQXlCO0FBQ3RELHFCQUFxQixtQkFBTyxDQUFDLG9FQUF5QjtBQUN0RCxxQkFBcUIsbUJBQU8sQ0FBQyxnRUFBdUI7QUFDcEQsMkNBQTJDLG1POzs7Ozs7Ozs7OztBQ1QzQyw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxnREFBTztBQUMvQix1QkFBdUIsbUJBQU8sQ0FBQyx3RkFBeUM7QUFDeEUsdUJBQXVCLG1CQUFPLENBQUMsNEZBQTJDO0FBQzFFLHVCQUF1QixtQkFBTyxDQUFDLDRGQUEyQztBQUMxRSx1QkFBdUIsbUJBQU8sQ0FBQyw0RkFBMkM7QUFDMUUscUJBQXFCLG1CQUFPLENBQUMsd0ZBQXlDO0FBQ3RFLGtDQUFrQyxtQkFBTyxDQUFDLGtCQUFNO0FBQ2hELG1DQUFtQyxtQkFBTyxDQUFDLG9CQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtDQUFrQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUNBQW1DO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9DQUFvQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRiwyQ0FBMkM7QUFDL0gsNkVBQTZFLE9BQU87QUFDcEY7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EscUVBQXFFLE9BQU87QUFDNUU7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFFQUFxRSxPQUFPO0FBQzVFO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJxTjs7Ozs7Ozs7Ozs7QUM5TDNDLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLGdEQUFPO0FBQy9CLCtCQUErQixtQkFBTyxDQUFDLGdIQUFxRDtBQUM1RixnQ0FBZ0MsbUJBQU8sQ0FBQyxrSEFBc0Q7QUFDOUYsNEJBQTRCLG1CQUFPLENBQUMsMEdBQWtEO0FBQ3RGLHlCQUF5QixtQkFBTyxDQUFDLG9FQUF5QjtBQUMxRCx3QkFBd0IsbUJBQU8sQ0FBQyxvRUFBeUI7QUFDekQscUJBQXFCLG1CQUFPLENBQUMsZ0VBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtZ0M7Ozs7Ozs7Ozs7O0FDL0IzQyw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxnREFBTztBQUMvQixvQ0FBb0MsbUJBQU8sQ0FBQyxzQkFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJZOzs7Ozs7Ozs7Ozs7QUNqQjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBOztBQUVPO0FBQ1AsbUNBQW1DLG9DQUFvQztBQUN2RTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1AsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUIsc0ZBQXNGLGFBQWEsRUFBRTtBQUN0SCxzQkFBc0IsZ0NBQWdDLHFDQUFxQywwQ0FBMEMsRUFBRSxFQUFFLEdBQUc7QUFDNUksMkJBQTJCLE1BQU0sZUFBZSxFQUFFLFlBQVksb0JBQW9CLEVBQUU7QUFDcEYsc0JBQXNCLG9HQUFvRztBQUMxSCw2QkFBNkIsdUJBQXVCO0FBQ3BELDRCQUE0Qix3QkFBd0I7QUFDcEQsMkJBQTJCLHlEQUF5RDtBQUNwRjs7QUFFTztBQUNQO0FBQ0EsaUJBQWlCLDRDQUE0QyxTQUFTLEVBQUUscURBQXFELGFBQWEsRUFBRTtBQUM1SSx5QkFBeUIsNkJBQTZCLG9CQUFvQixnREFBZ0QsZ0JBQWdCLEVBQUUsS0FBSztBQUNqSjs7QUFFTztBQUNQO0FBQ0E7QUFDQSwyR0FBMkcsc0ZBQXNGLGFBQWEsRUFBRTtBQUNoTixzQkFBc0IsOEJBQThCLGdEQUFnRCx1REFBdUQsRUFBRSxFQUFFLEdBQUc7QUFDbEssNENBQTRDLHNDQUFzQyxVQUFVLG9CQUFvQixFQUFFLEVBQUUsVUFBVTtBQUM5SDs7QUFFTztBQUNQLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1Qzs7Ozs7Ozs7Ozs7O0FDekxBLHFGOzs7Ozs7Ozs7OztBQ0FBLHNGOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGtHOzs7Ozs7Ozs7OztBQ0FBLDhGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHVGOzs7Ozs7Ozs7OztBQ0FBLHFGOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImlvdGEtcGljby1wYWwtbm9kZWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvbmV0d29ya0Vycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvcGxhdGZvcm1FcnJvclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9uZXR3b3JrQ2xpZW50RmFjdG9yeVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvcm5nU2VydmljZUZhY3RvcnlcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAaW90YS1waWNvL3BhbC1ub2RlanNcIiwgW1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvbmV0d29ya0Vycm9yXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvcGxhdGZvcm1FcnJvclwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9uZXR3b3JrQ2xpZW50RmFjdG9yeVwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvcm5nU2VydmljZUZhY3RvcnlcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGlvdGEtcGljby9wYWwtbm9kZWpzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvbmV0d29ya0Vycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvcGxhdGZvcm1FcnJvclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9uZXR3b3JrQ2xpZW50RmFjdG9yeVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvcm5nU2VydmljZUZhY3RvcnlcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIklvdGFQaWNvUGFsTm9kZWpzXCJdID0gZmFjdG9yeShyb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvbmV0d29ya0Vycm9yXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvcGxhdGZvcm1FcnJvclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9uZXR3b3JrQ2xpZW50RmFjdG9yeVwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvcm5nU2VydmljZUZhY3RvcnlcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZXJyb3JfbmV0d29ya0Vycm9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZXJyb3JfcGxhdGZvcm1FcnJvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2ZhY3Rvcmllc19uZXR3b3JrQ2xpZW50RmFjdG9yeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2ZhY3Rvcmllc19wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9mYWN0b3JpZXNfcm5nU2VydmljZUZhY3RvcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfb2JqZWN0SGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19zdHJpbmdIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9sb2dnZXJzX251bGxMb2dnZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC5lczYvaW5kZXguanNcIik7XG4iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbmNvbnN0IHBsYXRmb3JtRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9wbGF0Zm9ybUVycm9yXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IGNyeXB0byA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJjcnlwdG9cIikpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgYSBwbGF0Zm9ybSBjcnlwdG8gZm9yIHVzZSBpbiBOb2RlSlMuXHJcbiAqL1xyXG5jbGFzcyBQbGF0Zm9ybUNyeXB0byB7XHJcbiAgICAvKipcclxuICAgICAqIEVuY3J5cHQgdGhlIGdpdmVuIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gcHJpdmF0ZUtleSBUaGUga2V5IHRvIHVzZSBmb3IgZW5jcnlwdGluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZW5jcnlwdC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBlbmNyeXB0ZWQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZW5jcnlwdChwcml2YXRlS2V5LCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHByaXZhdGVLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBwcml2YXRlS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoZGF0YSwgXCJhc2NpaVwiKTtcclxuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBjcnlwdG8ucHJpdmF0ZUVuY3J5cHQocHJpdmF0ZUtleSwgYnVmZmVyKTtcclxuICAgICAgICByZXR1cm4gZW5jcnlwdGVkLnRvU3RyaW5nKFwiaGV4XCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyeXB0IHRoZSBnaXZlbiBkYXRhLlxyXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUga2V5IHRvIHVzZSBmb3IgZGVjcnlwdGluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZGVjcnlwdC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNyeXB0ZWQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZGVjcnlwdChwdWJsaWNLZXksIGRhdGEpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkocHVibGljS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgcHVibGljS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoZGF0YSwgXCJoZXhcIik7XHJcbiAgICAgICAgY29uc3QgZGVjcnlwdGVkID0gY3J5cHRvLnB1YmxpY0RlY3J5cHQocHVibGljS2V5LCBidWZmZXIpO1xyXG4gICAgICAgIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoXCJhc2NpaVwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2lnbiB0aGUgZ2l2ZW4gZGF0YS5cclxuICAgICAqIEBwYXJhbSBwcml2YXRlS2V5IFRoZSBrZXkgdG8gdXNlIGZvciBzaWduaW5nIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBzaWduLlxyXG4gICAgICogQHJldHVybnMgVGhlIHNpZ25hdHVyZS5cclxuICAgICAqL1xyXG4gICAgc2lnbihwcml2YXRlS2V5LCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHByaXZhdGVLZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBwcml2YXRlS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IGNyeXB0by5jcmVhdGVTaWduKFwiUlNBLVNIQTI1NlwiKTtcclxuICAgICAgICBzaWduZXIudXBkYXRlKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBzaWduZXIuc2lnbihwcml2YXRlS2V5LCBcImhleFwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVmVyaWZ5IHRoZSBnaXZlbiBkYXRhLlxyXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUga2V5IHRvIHVzZSBmb3IgdmVyaWZ5aW5nIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byB2ZXJpZnkuXHJcbiAgICAgKiBAcGFyYW0gc2lnbmF0dXJlIFRoZSBzaWduYXR1cmUgdG8gdmVyaWZ5IGFnYWludCB0aGUgZGF0YS5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZlcmlmaWNhdGlvbiBpcyBzdWNjZXNzZnVsLlxyXG4gICAgICovXHJcbiAgICB2ZXJpZnkocHVibGljS2V5LCBkYXRhLCBzaWduYXR1cmUpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkocHVibGljS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgcHVibGljS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShzaWduYXR1cmUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBzaWduYXR1cmUgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZlcmlmaWVyID0gY3J5cHRvLmNyZWF0ZVZlcmlmeShcIlJTQS1TSEEyNTZcIik7XHJcbiAgICAgICAgdmVyaWZpZXIudXBkYXRlKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiB2ZXJpZmllci52ZXJpZnkocHVibGljS2V5LCBzaWduYXR1cmUsIFwiaGV4XCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBIYXNoIHRoZSBkYXRhLlxyXG4gICAgICogQHBhcmFtIGFsZ28gVGhlIGFsZ29yaXRobSB0byB1c2UuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBoYXNoLlxyXG4gICAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSB0eXBlIG9mIHRoZSBpbnB1dCBkYXRhIHV0ZjgsIGFzY2lpLCBsYXRpbjEuXHJcbiAgICAgKiBAcGFyYW0gZW5jb2RpbmcgVGhlIGVuY29kaW5nIHRvIHJldHVybiB0aGUgZGF0YSBsYXRpbjEsIGhleCwgYmFzZTY0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGhhc2ggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGhhc2goYWxnbywgZGF0YSwgZGF0YVR5cGUsIGVuY29kaW5nKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGFsZ28pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBhbGdvIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjcnlwdG8uY3JlYXRlSGFzaChhbGdvKVxyXG4gICAgICAgICAgICAudXBkYXRlKGRhdGEsIGRhdGFUeXBlKVxyXG4gICAgICAgICAgICAuZGlnZXN0KGVuY29kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSE1BQyB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSBhbGdvIFRoZSBhbGdvcml0aG0gdG8gdXNlLlxyXG4gICAgICogQHBhcmFtIGtleSBUaGUga2V5IHRvIGhhc2ggdGhlIGRhdGEgd2l0aC5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGhhc2guXHJcbiAgICAgKiBAcGFyYW0gZGF0YVR5cGUgVGhlIHR5cGUgb2YgdGhlIGlucHV0IGRhdGEgdXRmOCwgYXNjaWksIGxhdGluMS5cclxuICAgICAqIEBwYXJhbSBlbmNvZGluZyBUaGUgZW5jb2RpbmcgdG8gcmV0dXJuIHRoZSBkYXRhIGxhdGluMSwgaGV4LCBiYXNlNjQuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgaGFzaCBvZiB0aGUgZGF0YS5cclxuICAgICAqL1xyXG4gICAgaG1hYyhhbGdvLCBrZXksIGRhdGEsIGRhdGFUeXBlLCBlbmNvZGluZykge1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShhbGdvKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgYWxnbyBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGtleSBtdXN0IGJlIG5vbiBlbXB0eVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBkYXRhIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhtYWMoYWxnbywga2V5KVxyXG4gICAgICAgICAgICAudXBkYXRlKGRhdGEsIGRhdGFUeXBlKVxyXG4gICAgICAgICAgICAuZGlnZXN0KGVuY29kaW5nKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBsYXRmb3JtQ3J5cHRvID0gUGxhdGZvcm1DcnlwdG87XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNHeGhkR1p2Y20xRGNubHdkRzh1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZZM0o1Y0hSdkwzQnNZWFJtYjNKdFEzSjVjSFJ2TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN08wRkJRVUVzTkVWQlFYbEZPMEZCUTNwRkxEUkZRVUY1UlR0QlFVTjZSU3cwUlVGQmVVVTdRVUZGZWtVc2RVUkJRV2xETzBGQlJXcERPenRIUVVWSE8wRkJRMGdzVFVGQllTeGpRVUZqTzBsQlEzWkNPenM3T3p0UFFVdEhPMGxCUTBrc1QwRkJUeXhEUVVGRExGVkJRV3RDTEVWQlFVVXNTVUZCV1R0UlFVTXpReXhKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRFJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VTBGRGJFVTdVVUZEUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRla01zVFVGQlRTeFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhWUVVGVkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETlVRc1QwRkJUeXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNKRExFTkJRVU03U1VGRlJEczdPenM3VDBGTFJ6dEpRVU5KTEU5QlFVOHNRMEZCUXl4VFFVRnBRaXhGUVVGRkxFbEJRVms3VVVGRE1VTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTnFReXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl3d1EwRkJNRU1zUTBGQlF5eERRVUZETzFOQlEzWkZPMUZCUTBRc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNMVFpeE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4Rk8xRkJRMFFzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEzWkRMRTFCUVUwc1UwRkJVeXhIUVVGSExFMUJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRekZFTEU5QlFVOHNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4RFFVRkRPMGxCUlVRN096czdPMDlCUzBjN1NVRkRTU3hKUVVGSkxFTkJRVU1zVlVGQmEwSXNSVUZCUlN4SlFVRlpPMUZCUTNoRExFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3V1VGRGJFTXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRUUVVONFJUdFJRVU5FTEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZETlVJc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5zUlR0UlFVTkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1VVRkRMME1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOd1FpeFBRVUZQTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6RkRMRU5CUVVNN1NVRkZSRHM3T3pzN08wOUJUVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNVMEZCYVVJc1JVRkJSU3hKUVVGWkxFVkJRVVVzVTBGQmFVSTdVVUZETlVRc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRaUVVOcVF5eE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXd3UTBGQk1FTXNRMEZCUXl4RFFVRkRPMU5CUTNaRk8xRkJRMFFzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0xUWl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlEwUXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0WlFVTnFReXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl3d1EwRkJNRU1zUTBGQlF5eERRVUZETzFOQlEzWkZPMUZCUTBRc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVOdVJDeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM1JDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNoRUxFTkJRVU03U1VGRlJEczdPenM3T3p0UFFVOUhPMGxCUTBrc1NVRkJTU3hEUVVGRExFbEJRVmtzUlVGRFdpeEpRVUZUTEVWQlExUXNVVUZCYzBNc1JVRkRkRU1zVVVGQmMwTTdVVUZET1VNc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNMVFpeE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRPMU5CUTJ4Rk8xRkJRMFFzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0xUWl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlJVUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF6dGhRVU5pTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRE8yRkJRM1JDTEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOMFF5eERRVUZETzBsQlJVUTdPenM3T3pzN08wOUJVVWM3U1VGRFNTeEpRVUZKTEVOQlFVTXNTVUZCV1N4RlFVTmFMRWRCUVZFc1JVRkRVaXhKUVVGVExFVkJRMVFzVVVGQmMwTXNSVUZEZEVNc1VVRkJjME03VVVGRE9VTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTFRaXhOUVVGTkxFbEJRVWtzTmtKQlFXRXNRMEZCUXl4eFEwRkJjVU1zUTBGQlF5eERRVUZETzFOQlEyeEZPMUZCUTBRc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNelFpeE5RVUZOTEVsQlFVa3NOa0pCUVdFc1EwRkJReXd5UWtGQk1rSXNRMEZCUXl4RFFVRkRPMU5CUTNoRU8xRkJRMFFzU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0xUWl4TlFVRk5MRWxCUVVrc05rSkJRV0VzUTBGQlF5eHhRMEZCY1VNc1EwRkJReXhEUVVGRE8xTkJRMnhGTzFGQlJVUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTTdZVUZEYkVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTTdZVUZEZEVJc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEzUkRMRU5CUVVNN1EwRkRTanRCUVdwSlJDeDNRMEZwU1VNaWZRPT0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbi8qKlxyXG4gKiBDb21iaW5lZCBpbmRleCBvZiBhbGwgdGhlIG1vZHVsZXMuXHJcbiAqL1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9wYWxcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jcnlwdG8vcGxhdGZvcm1DcnlwdG9cIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9uZXR3b3JrL25ldHdvcmtDbGllbnRcIiksIGV4cG9ydHMpO1xyXG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zZXJ2aWNlcy9ybmdTZXJ2aWNlXCIpLCBleHBvcnRzKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdSMEZGUnp0QlFVTklMR2RFUVVGelFqdEJRVU4wUWl4clJVRkJkME03UVVGRGVFTXNhMFZCUVhkRE8wRkJRM2hETEdkRlFVRnpReUo5IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xyXG5jb25zdCBuZXR3b3JrRXJyb3JfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9uZXR3b3JrRXJyb3JcIik7XHJcbmNvbnN0IG51bWJlckhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpO1xyXG5jb25zdCBvYmplY3RIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL29iamVjdEhlbHBlclwiKTtcclxuY29uc3Qgc3RyaW5nSGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9zdHJpbmdIZWxwZXJcIik7XHJcbmNvbnN0IG51bGxMb2dnZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9sb2dnZXJzL251bGxMb2dnZXJcIik7XHJcbmNvbnN0IGh0dHAgPSB0c2xpYl8xLl9faW1wb3J0U3RhcihyZXF1aXJlKFwiaHR0cFwiKSk7XHJcbmNvbnN0IGh0dHBzID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImh0dHBzXCIpKTtcclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIGEgbm9kZSBjbGllbnQgZm9yIHVzZSBpbiBOb2RlSlMuXHJcbiAqL1xyXG5jbGFzcyBOZXR3b3JrQ2xpZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIE5ldHdvcmtDbGllbnQuXHJcbiAgICAgKiBAcGFyYW0gbmV0d29ya0VuZFBvaW50IFRoZSBlbmRwb2ludCB0byB1c2UgZm9yIHRoZSBjbGllbnQuXHJcbiAgICAgKiBAcGFyYW0gbG9nZ2VyIExvZ2dlciB0byBzZW5kIGNvbW11bmljYXRpb24gaW5mbyB0by5cclxuICAgICAqIEBwYXJhbSB0aW1lb3V0TXMgVGhlIHRpbWVvdXQgaW4gbXMgYmVmb3JlIGFib3J0aW5nLlxyXG4gICAgICogQHBhcmFtIGh0dHBDbGllbnRSZXF1ZXN0IFRoZSBjbGllbnQgcmVxdWVzdCBvYmplY3QsIHVzdWFsbHkgbm90IHJlcXVpcmVkLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuZXR3b3JrRW5kUG9pbnQsIGxvZ2dlciwgdGltZW91dE1zID0gMCwgaHR0cENsaWVudFJlcXVlc3QpIHtcclxuICAgICAgICBpZiAob2JqZWN0SGVscGVyXzEuT2JqZWN0SGVscGVyLmlzRW1wdHkobmV0d29ya0VuZFBvaW50KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKFwiVGhlIG5ldHdvcmtFbmRQb2ludCBtdXN0IGJlIGRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbnVtYmVySGVscGVyXzEuTnVtYmVySGVscGVyLmlzSW50ZWdlcih0aW1lb3V0TXMpIHx8IHRpbWVvdXRNcyA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIlRoZSB0aW1lb3V0TXMgbXVzdCBiZSA+PSAwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9uZXR3b3JrRW5kUG9pbnQgPSBuZXR3b3JrRW5kUG9pbnQ7XHJcbiAgICAgICAgdGhpcy5fdGltZW91dE1zID0gdGltZW91dE1zO1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlciB8fCBuZXcgbnVsbExvZ2dlcl8xLk51bGxMb2dnZXIoKTtcclxuICAgICAgICB0aGlzLl9odHRwQ2xpZW50UmVxdWVzdCA9IGh0dHBDbGllbnRSZXF1ZXN0IHx8IChuZXR3b3JrRW5kUG9pbnQuZ2V0UHJvdG9jb2woKSA9PT0gXCJodHRwXCIgPyBodHRwLnJlcXVlc3QgOiBodHRwcy5yZXF1ZXN0KTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIuYmFubmVyKFwiTmV0d29yayBDbGllbnRcIiwgeyBlbmRQb2ludDogdGhpcy5fbmV0d29ya0VuZFBvaW50IH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZGF0YSBhc3luY2hyb25vdXNseS5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsUGF0aCBBbiBhZGRpdGlvbmFsIHBhdGggYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBwYXRoLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxIZWFkZXJzIEV4dHJhIGhlYWRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgb2JqZWN0IHJldHVybmVkIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZ2V0KGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycykge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OkdFVCBTZW5kXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0geWllbGQgdGhpcy5kb1JlcXVlc3QoXCJHRVRcIiwgdW5kZWZpbmVkLCBhZGRpdGlvbmFsUGF0aCwgYWRkaXRpb25hbEhlYWRlcnMpO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIjw9PT0gTmV0d29ya0NsaWVudDo6R0VUIFJlY2VpdmVkXCIsIHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUG9zdCBkYXRhIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsUGF0aCBBbiBhZGRpdGlvbmFsIHBhdGggYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBwYXRoLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxIZWFkZXJzIEV4dHJhIGhlYWRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgb2JqZWN0IHJldHVybmVkIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgcG9zdChkYXRhLCBhZGRpdGlvbmFsUGF0aCwgYWRkaXRpb25hbEhlYWRlcnMpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBOZXR3b3JrQ2xpZW50OjpQT1NUIFNlbmRcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCB0aGlzLmRvUmVxdWVzdChcIlBPU1RcIiwgZGF0YSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IE5ldHdvcmtDbGllbnQ6OlBPU1QgUmVjZWl2ZWRcIiwgcmVzcCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZGF0YSBhcyBKU09OIGFzeW5jaHJvbm91c2x5LlxyXG4gICAgICogQHR5cGVwYXJhbSBVIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSByZXR1cm5lZCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbFBhdGggQW4gYWRkaXRpb25hbCBwYXRoIGFwcGVuZCB0byB0aGUgZW5kcG9pbnQgcGF0aC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsSGVhZGVycyBFeHRyYSBoZWFkZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIG9iamVjdCByZXR1cm5lZCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIGdldEpzb24oYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6R0VUIFNlbmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvUmVxdWVzdChcIkdFVFwiLCB1bmRlZmluZWQsIGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OkdFVCBSZWNlaXZlZFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBOZXR3b3JrQ2xpZW50OjpHRVQgUGFyc2UgRmFpbGVkXCIsIHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJGYWlsZWQgR0VUIHJlcXVlc3QsIHVuYWJsZSB0byBwYXJzZSByZXNwb25zZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFBvaW50OiB0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0VXJpKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3N0IGRhdGEgYXMgSlNPTiBhc3luY2hyb25vdXNseS5cclxuICAgICAqIEB0eXBlcGFyYW0gVCBUaGUgZ2VuZXJpYyB0eXBlIGZvciB0aGUgb2JqZWN0IHRvIHNlbmQuXHJcbiAgICAgKiBAdHlwZXBhcmFtIFUgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIHJldHVybmVkIG9iamVjdC5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIHNlbmQuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbFBhdGggQW4gYWRkaXRpb25hbCBwYXRoIGFwcGVuZCB0byB0aGUgZW5kcG9pbnQgcGF0aC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsSGVhZGVycyBFeHRyYSBoZWFkZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIG9iamVjdCByZXR1cm5lZCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHBvc3RKc29uKGRhdGEsIGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycykge1xyXG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI9PT0+IE5ldHdvcmtDbGllbnQ6OlBPU1QgU2VuZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGFkZGl0aW9uYWxIZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgICAgICBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvUmVxdWVzdChcIlBPU1RcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGFkZGl0aW9uYWxQYXRoLCBoZWFkZXJzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2VEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6UE9TVCBSZWNlaXZlZFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPT09PiBOZXR3b3JrQ2xpZW50OjpHRVQgUGFyc2UgRmFpbGVkXCIsIHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJGYWlsZWQgUE9TVCByZXF1ZXN0LCB1bmFibGUgdG8gcGFyc2UgcmVzcG9uc2VcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogdGhpcy5fbmV0d29ya0VuZFBvaW50LmdldFVyaSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHJlcXVlc3QgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gc2VuZCB0aGUgZGF0YSB3aXRoLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsUGF0aCBBbiBhZGRpdGlvbmFsIHBhdGggYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBwYXRoLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxIZWFkZXJzIEV4dHJhIGhlYWRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgb2JqZWN0IHJldHVybmVkIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZG9SZXF1ZXN0KG1ldGhvZCwgZGF0YSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGFkZGl0aW9uYWxIZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHVyaSA9IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRVcmkoKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gdGhpcy5fbmV0d29ya0VuZFBvaW50LmdldFJvb3RQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGFkZGl0aW9uYWxQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlwcGVkID0gYC8ke2FkZGl0aW9uYWxQYXRoLnJlcGxhY2UoL15cXC8qLywgXCJcIil9YDtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHN0cmlwcGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaSArPSBzdHJpcHBlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6IGAke3RoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRQcm90b2NvbCgpfTpgLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lOiB0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0SG9zdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRQb3J0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuX3RpbWVvdXRNcyA+IDAgPyB0aGlzLl90aW1lb3V0TXMgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXEgPSB0aGlzLl9odHRwQ2xpZW50UmVxdWVzdChvcHRpb25zLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGF0YSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnNldEVuY29kaW5nKFwidXRmOFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMub24oXCJkYXRhXCIsIChyZXNwb25zZUJvZHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhICs9IHJlc3BvbnNlQm9keTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXMub24oXCJlbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IE5ldHdvcmtDbGllbnQ6OlJlY2VpdmVkIEZhaWxcIiwgeyBjb2RlOiByZXMuc3RhdHVzQ29kZSwgZGF0YTogcmVzcG9uc2VEYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoYEZhaWxlZCAke21ldGhvZH0gcmVxdWVzdGAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogdXJpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUmVzcG9uc2VDb2RlOiByZXMuc3RhdHVzQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclJlc3BvbnNlOiByZXNwb25zZURhdGEgfHwgcmVzLnN0YXR1c01lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXEub24oXCJlcnJvclwiLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKFwiPD09PSBOZXR3b3JrQ2xpZW50OjpFcnJvcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKGBGYWlsZWQgJHttZXRob2R9IHJlcXVlc3RgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZFBvaW50OiB1cmksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yUmVzcG9uc2U6IGVyclxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVxLm9uKFwidGltZW91dFwiLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKFwiPD09PSBOZXR3b3JrQ2xpZW50OjpUaW1lZCBPdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoYEZhaWxlZCAke21ldGhvZH0gcmVxdWVzdCwgdGltZWQgb3V0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogdXJpXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLndyaXRlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxLmVuZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5ldHdvcmtDbGllbnQgPSBOZXR3b3JrQ2xpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libVYwZDI5eWEwTnNhV1Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl1WlhSM2IzSnJMMjVsZEhkdmNtdERiR2xsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3d1JVRkJkVVU3UVVGRGRrVXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkpla1VzZDBWQlFYRkZPMEZCUTNKRkxHMUVRVUUyUWp0QlFVTTNRaXh4UkVGQkswSTdRVUZGTDBJN08wZEJSVWM3UVVGRFNDeE5RVUZoTEdGQlFXRTdTVUZWZEVJN096czdPenRQUVUxSE8wbEJRMGdzV1VGQldTeGxRVUZwUXl4RlFVRkZMRTFCUVdkQ0xFVkJRVVVzV1VGQmIwSXNRMEZCUXl4RlFVTXhSU3hwUWtGQk9FbzdVVUZEZEVzc1NVRkJTU3d5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4bFFVRmxMRU5CUVVNc1JVRkJSVHRaUVVOMlF5eE5RVUZOTEVsQlFVa3NNa0pCUVZrc1EwRkJReXh4UTBGQmNVTXNRMEZCUXl4RFFVRkRPMU5CUTJwRk8xRkJRMFFzU1VGQlNTeERRVUZETERKQ1FVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRja1FzVFVGQlRTeEpRVUZKTERKQ1FVRlpMRU5CUVVNc05FSkJRVFJDTEVOQlFVTXNRMEZCUXp0VFFVTjRSRHRSUVVORUxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhsUVVGbExFTkJRVU03VVVGRGVFTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRE5VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFbEJRVWtzU1VGQlNTeDFRa0ZCVlN4RlFVRkZMRU5CUVVNN1VVRkRNVU1zU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhIUVVGSExHbENRVUZwUWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExGZEJRVmNzUlVGQlJTeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJSWHBJTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGREwwVXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTFVc1IwRkJSeXhEUVVGRExHTkJRWFZDTEVWQlFVVXNhVUpCUVdkRU96dFpRVU4wUml4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5dzRRa0ZCT0VJc1EwRkJReXhEUVVGRE8xbEJRMnhFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMR05CUVdNc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMWxCUTNaR0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMR3REUVVGclF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpWRUxFOUJRVThzU1VGQlNTeERRVUZETzFGQlEyaENMRU5CUVVNN1MwRkJRVHRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5WTEVsQlFVa3NRMEZCUXl4SlFVRlpMRVZCUVVVc1kwRkJkVUlzUlVGQlJTeHBRa0ZCWjBRN08xbEJRM0pITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExDdENRVUVyUWl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRM3BFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMR05CUVdNc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRPMWxCUTI1R0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFEUVVGdFF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUXpkRUxFOUJRVThzU1VGQlNTeERRVUZETzFGQlEyaENMRU5CUVVNN1MwRkJRVHRKUVVWRU96czdPenM3VDBGTlJ6dEpRVU5WTEU5QlFVOHNRMEZCU1N4alFVRjFRaXhGUVVGRkxHbENRVUZuUkRzN1dVRkROMFlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0WlFVTnNSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1JVRkJSU3hqUVVGakxFVkJRVVVzYVVKQlFXbENMRU5CUVVNN2FVSkJRM0pGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmxCUVZrc1JVRkJSU3hGUVVGRk8yZENRVU51UWl4SlFVRkpPMjlDUVVOQkxFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03YjBKQlF6RkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEd0RFFVRnJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzI5Q1FVTm9SU3hQUVVGVkxGRkJRVkVzUTBGQlF6dHBRa0ZEZEVJN1owSkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdiMEpCUTFZc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNjME5CUVhORExFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdiMEpCUTNoRkxFMUJRVXNzUTBGQlF5eEpRVUZKTERKQ1FVRlpMRU5CUVVNc09FTkJRVGhETEVWQlFVVTdkMEpCUTI1RkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTzNkQ1FVTjRReXhSUVVGUkxFVkJRVVVzV1VGQldUdHhRa0ZEZWtJc1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlExQTdXVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOWUxFTkJRVU03UzBGQlFUdEpRVVZFT3pzN096czdPenRQUVZGSE8wbEJRMVVzVVVGQlVTeERRVUZQTEVsQlFVOHNSVUZCUlN4alFVRjFRaXhGUVVGRkxHbENRVUZuUkRzN1dVRkRNVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc0swSkJRU3RDTEVOQlFVTXNRMEZCUXp0WlFVVnVSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eHBRa0ZCYVVJc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRGVFTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExHdENRVUZyUWl4RFFVRkRPMWxCUlRkRExFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4alFVRmpMRVZCUVVVc1QwRkJUeXhEUVVGRE8ybENRVU4yUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhaUVVGWkxFVkJRVVVzUlVGQlJUdG5Ra0ZEYmtJc1NVRkJTVHR2UWtGRFFTeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzI5Q1FVTXhReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4dFEwRkJiVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0dlFrRkRha1VzVDBGQlZTeFJRVUZSTEVOQlFVTTdhVUpCUTNSQ08yZENRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZPMjlDUVVOV0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMSE5EUVVGelF5eEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPMjlDUVVONFJTeE5RVUZMTEVOQlFVTXNTVUZCU1N3eVFrRkJXU3hEUVVGRExDdERRVUVyUXl4RlFVRkZPM2RDUVVOd1JTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEUxQlFVMHNSVUZCUlR0M1FrRkRlRU1zVVVGQlVTeEZRVUZGTEZsQlFWazdjVUpCUTNwQ0xFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTlFPMWxCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFdDeERRVUZETzB0QlFVRTdTVUZGUkRzN096czdPenRQUVU5SE8wbEJRMVVzVTBGQlV5eERRVUZETEUxQlFXTXNSVUZCUlN4SlFVRlpMRVZCUVVVc1kwRkJkVUlzUlVGQlJTeHBRa0ZCWjBRN08xbEJRekZJTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEVWQlFVVTdaMEpCUXpORExFMUJRVTBzVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhKUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZGZUVNc1NVRkJTU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzJkQ1FVTjZReXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdaMEpCUXk5RExFbEJRVWtzUTBGQlF5d3lRa0ZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUlVGQlJUdHZRa0ZEZGtNc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeGpRVUZqTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETzI5Q1FVTXhSQ3hKUVVGSkxFbEJRVWtzVVVGQlVTeERRVUZETzI5Q1FVTnFRaXhIUVVGSExFbEJRVWtzVVVGQlVTeERRVUZETzJsQ1FVTnVRanRuUWtGRlJDeE5RVUZOTEU5QlFVOHNSMEZCUnp0dlFrRkRXaXhSUVVGUkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVYzdiMEpCUTI1RUxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTzI5Q1FVTjZReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUlVGQlJUdHZRa0ZEY2tNc1NVRkJTU3hGUVVGRkxFbEJRVWs3YjBKQlExWXNUVUZCVFN4RlFVRkZMRTFCUVUwN2IwSkJRMlFzVDBGQlR6dHZRa0ZEVUN4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTTdhVUpCUXpkRUxFTkJRVU03WjBKQlJVWXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTzI5Q1FVTnFSQ3hKUVVGSkxGbEJRVmtzUjBGQlJ5eEZRVUZGTEVOQlFVTTdiMEpCUTNSQ0xFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN2IwSkJRM2hDTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEVWQlFVVTdkMEpCUXpWQ0xGbEJRVmtzU1VGQlNTeFpRVUZaTEVOQlFVTTdiMEpCUTJwRExFTkJRVU1zUTBGQlF5eERRVUZETzI5Q1FVTklMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlR0M1FrRkRaaXhKUVVGSkxFZEJRVWNzUTBGQlF5eFZRVUZWTEV0QlFVc3NSMEZCUnl4RlFVRkZPelJDUVVONFFpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN2VVSkJRM3BDT3paQ1FVRk5PelJDUVVOSUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzFEUVVGdFF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZsQlFWa3NSVUZCUlN4RFFVRkRMRU5CUVVNN05FSkJRM0pITEUxQlFVMHNRMEZCUXl4SlFVRkpMREpDUVVGWkxFTkJRVU1zVlVGQlZTeE5RVUZOTEZWQlFWVXNSVUZCUlR0blEwRkRhRVFzVVVGQlVTeEZRVUZGTEVkQlFVYzdaME5CUTJJc2FVSkJRV2xDTEVWQlFVVXNSMEZCUnl4RFFVRkRMRlZCUVZVN1owTkJRMnBETEdGQlFXRXNSVUZCUlN4WlFVRlpMRWxCUVVrc1IwRkJSeXhEUVVGRExHRkJRV0U3TmtKQlEyNUVMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU5RTzI5Q1FVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5RTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOSUxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFVkJRVVU3YjBKQlEzQkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETERaQ1FVRTJRaXhEUVVGRExFTkJRVU03YjBKQlJXeEVMRTFCUVUwc1EwRkJReXhKUVVGSkxESkNRVUZaTEVOQlFVTXNWVUZCVlN4TlFVRk5MRlZCUVZVc1JVRkJSVHQzUWtGRGFFUXNVVUZCVVN4RlFVRkZMRWRCUVVjN2QwSkJRMklzWVVGQllTeEZRVUZGTEVkQlFVYzdjVUpCUTNKQ0xFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlNMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5JTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVTdiMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMQ3RDUVVFclFpeERRVUZETEVOQlFVTTdiMEpCUlhCRUxFMUJRVTBzUTBGQlF5eEpRVUZKTERKQ1FVRlpMRU5CUVVNc1ZVRkJWU3hOUVVGTkxIRkNRVUZ4UWl4RlFVRkZPM2RDUVVNelJDeFJRVUZSTEVWQlFVVXNSMEZCUnp0eFFrRkRhRUlzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTFJc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEwZ3NTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMjlDUVVNM1FpeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8ybENRVU51UWp0blFrRkRSQ3hIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdXVUZEWkN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOUUxFTkJRVU03UzBGQlFUdERRVU5LTzBGQk1VeEVMSE5EUVRCTVF5SjkiLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbmNvbnN0IG5ldHdvcmtDbGllbnRGYWN0b3J5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5XCIpO1xyXG5jb25zdCBwbGF0Zm9ybUNyeXB0b0ZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvcGxhdGZvcm1DcnlwdG9GYWN0b3J5XCIpO1xyXG5jb25zdCBybmdTZXJ2aWNlRmFjdG9yeV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiKTtcclxuY29uc3QgcGxhdGZvcm1DcnlwdG9fMSA9IHJlcXVpcmUoXCIuL2NyeXB0by9wbGF0Zm9ybUNyeXB0b1wiKTtcclxuY29uc3QgbmV0d29ya0NsaWVudF8xID0gcmVxdWlyZShcIi4vbmV0d29yay9uZXR3b3JrQ2xpZW50XCIpO1xyXG5jb25zdCBybmdTZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9ybmdTZXJ2aWNlXCIpO1xyXG4vKipcclxuICogUGxhdGZvcm0gYWJzdHJhY3Rpb24gbGF5ZXIgZm9yIE5vZGVKUy5cclxuICovXHJcbmNsYXNzIFBBTCB7XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gYW55IGluaXRpYWxpemF0aW9uIGZvciB0aGUgUEFMLlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoIVBBTC5faXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgUEFMLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ldHdvcmtDbGllbnRGYWN0b3J5XzEuTmV0d29ya0NsaWVudEZhY3RvcnkuaW5zdGFuY2UoKS5yZWdpc3RlcihcImRlZmF1bHRcIiwgKG5ldHdvcmtFbmRwb2ludCwgbG9nZ2VyLCB0aW1lb3V0TXMpID0+IG5ldyBuZXR3b3JrQ2xpZW50XzEuTmV0d29ya0NsaWVudChuZXR3b3JrRW5kcG9pbnQsIGxvZ2dlciwgdGltZW91dE1zKSk7XHJcbiAgICAgICAgICAgICAgICBybmdTZXJ2aWNlRmFjdG9yeV8xLlJuZ1NlcnZpY2VGYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJkZWZhdWx0XCIsICgpID0+IG5ldyBybmdTZXJ2aWNlXzEuUm5nU2VydmljZSgpKTtcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtQ3J5cHRvRmFjdG9yeV8xLlBsYXRmb3JtQ3J5cHRvRmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZGVmYXVsdFwiLCAoKSA9PiBuZXcgcGxhdGZvcm1DcnlwdG9fMS5QbGF0Zm9ybUNyeXB0bygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLyogQGludGVybmFsICovXHJcblBBTC5faXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5leHBvcnRzLlBBTCA9IFBBTDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY0dGc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMM0JoYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTERoR1FVRXlSanRCUVVNelJpeG5SMEZCTmtZN1FVRkROMFlzZDBaQlFYRkdPMEZCUjNKR0xEUkVRVUY1UkR0QlFVTjZSQ3d5UkVGQmQwUTdRVUZEZUVRc2MwUkJRVzFFTzBGQlJXNUVPenRIUVVWSE8wRkJRMGdzVFVGQllTeEhRVUZITzBsQlNWbzdPenRQUVVkSE8wbEJRMGtzVFVGQlRTeERRVUZQTEZWQlFWVTdPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNZMEZCWXl4RlFVRkZPMmRDUVVOeVFpeEhRVUZITEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJRenRuUWtGRE1VSXNNa05CUVc5Q0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExHVkJRV2xETEVWQlFVVXNUVUZCWlN4RlFVRkZMRk5CUVdsQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NOa0pCUVdFc1EwRkJReXhsUVVGbExFVkJRVVVzVFVGQlRTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1JNTEhGRFFVRnBRaXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU1zU1VGQlNTeDFRa0ZCVlN4RlFVRkZMRU5CUVVNc1EwRkJRenRuUWtGRGVrVXNOa05CUVhGQ0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEN0Q1FVRmpMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRM0JHTzFsQlJVUXNUMEZCVHl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRE4wSXNRMEZCUXp0TFFVRkJPenRCUVdoQ1JDeGxRVUZsTzBGQlEwRXNhMEpCUVdNc1IwRkJXU3hMUVVGTExFTkJRVU03UVVGR2JrUXNhMEpCYTBKREluMD0iLCJPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XHJcbmNvbnN0IGNyeXB0byA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJjcnlwdG9cIikpO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgcmFuZG9tIG51bWJlciBnZW5lcmF0aW9uIHNlcnZpY2UuXHJcbiAqL1xyXG5jbGFzcyBSbmdTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgYW4gYXJyYXkgb2YgcmFuZG9tIG51bWJlcnMuXHJcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgbnVtYmVycyB0byBnZW5lcmF0ZS5cclxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9ycy5cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGUobGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGNyeXB0by5yYW5kb21CeXRlcyhsZW5ndGgpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlJuZ1NlcnZpY2UgPSBSbmdTZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbTVuVTJWeWRtbGpaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXpaWEoyYVdObGN5OXlibWRUWlhKMmFXTmxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNkVVJCUVdsRE8wRkJSV3BET3p0SFFVVkhPMEZCUTBnc1RVRkJZU3hWUVVGVk8wbEJRMjVDT3pzN08wOUJTVWM3U1VGRFNTeFJRVUZSTEVOQlFVTXNUVUZCWXp0UlFVTXhRaXhQUVVGUExFbEJRVWtzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4wUkN4RFFVRkRPME5CUTBvN1FVRlVSQ3huUTBGVFF5SjkiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9lcnJvcl9uZXR3b3JrRXJyb3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZXJyb3JfcGxhdGZvcm1FcnJvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9mYWN0b3JpZXNfbmV0d29ya0NsaWVudEZhY3RvcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZmFjdG9yaWVzX3BsYXRmb3JtQ3J5cHRvRmFjdG9yeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9mYWN0b3JpZXNfcm5nU2VydmljZUZhY3RvcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19udW1iZXJIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19zdHJpbmdIZWxwZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfbG9nZ2Vyc19udWxsTG9nZ2VyX187IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==