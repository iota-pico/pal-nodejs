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
        const buffer = Buffer.from(data, "ascii");
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
        const buffer = Buffer.from(data, "hex");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1DcnlwdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY3J5cHRvL3BsYXRmb3JtQ3J5cHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFFekUsdURBQWlDO0FBRWpDOztHQUVHO0FBQ0gsTUFBYSxjQUFjO0lBQ3ZCOzs7OztPQUtHO0lBQ0ksT0FBTyxDQUFDLFVBQWtCLEVBQUUsSUFBWTtRQUMzQyxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE1BQU0sSUFBSSw2QkFBYSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDbEU7UUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksT0FBTyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtRQUMxQyxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE1BQU0sSUFBSSw2QkFBYSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDbEU7UUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENB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

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
     * @param data The data to send.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    get(data, additionalPath, additionalHeaders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._logger.info("===> NetworkClient::GET Send");
            const resp = yield this.doRequest("GET", this.objectToParameters(data), additionalPath, additionalHeaders);
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
     * Request data as JSON asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send as the JSON body.
     * @param method The method to send with the request.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    json(data, method, additionalPath, additionalHeaders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this._logger.info(`===> NetworkClient::${method} Send`);
            const headers = additionalHeaders || {};
            let localData;
            if (method === "GET" || method === "DELETE") {
                localData = this.objectToParameters(data);
            }
            else {
                headers["Content-Type"] = "application/json";
                localData = JSON.stringify(data);
            }
            return this.doRequest(method, localData, additionalPath, headers)
                .then((responseData) => {
                try {
                    const response = JSON.parse(responseData);
                    this._logger.info(`===> NetworkClient::${method} Received`, response);
                    return response;
                }
                catch (err) {
                    this._logger.info(`===> NetworkClient::${method} Parse Failed`, responseData);
                    throw (new networkError_1.NetworkError(`Failed ${method} request, unable to parse response`, {
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
                if ((method === "GET" || method === "DELETE") && !objectHelper_1.ObjectHelper.isEmpty(data)) {
                    options.path += data;
                }
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
                if (method !== "GET" && method !== "DELETE" && !objectHelper_1.ObjectHelper.isEmpty(data)) {
                    req.write(data);
                }
                req.end();
            });
        });
    }
    /* @internal */
    objectToParameters(data) {
        let localUri = "";
        if (data) {
            const keys = Object.keys(data);
            if (keys.length > 0) {
                const parms = [];
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    const value = data[key] ? data[key].toString() : "";
                    parms.push(`${encodeURIComponent(keys[i])}=${encodeURIComponent(value)}`);
                }
                localUri += `?${parms.join("&")}`;
            }
        }
        return localUri;
    }
}
exports.NetworkClient = NetworkClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrL25ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFLekUsd0VBQXFFO0FBQ3JFLG1EQUE2QjtBQUM3QixxREFBK0I7QUFFL0I7O0dBRUc7QUFDSCxNQUFhLGFBQWE7SUFVdEI7Ozs7OztPQU1HO0lBQ0gsWUFDSSxlQUFpQyxFQUNqQyxNQUFnQixFQUNoQixZQUFvQixDQUFDLEVBQ3JCLGlCQUE4SjtRQUM5SixJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSSwyQkFBWSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDakU7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNyRCxNQUFNLElBQUksMkJBQVksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENB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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi9kaXN0LmVzNi9jcnlwdG8vcGxhdGZvcm1DcnlwdG8uanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi9kaXN0LmVzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uL2Rpc3QuZXM2L25ldHdvcmsvbmV0d29ya0NsaWVudC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uL2Rpc3QuZXM2L3BhbC5qcyIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy8uL2Rpc3QuZXM2L3NlcnZpY2VzL3JuZ1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvbmV0d29ya0Vycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9wbGF0Zm9ybUVycm9yXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvbmV0d29ya0NsaWVudEZhY3RvcnlcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9udW1iZXJIZWxwZXJcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvZXh0ZXJuYWwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiIiwid2VicGFjazovL0lvdGFQaWNvUGFsTm9kZWpzL2V4dGVybmFsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvbG9nZ2Vycy9udWxsTG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vSW90YVBpY29QYWxOb2RlanMvZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly9Jb3RhUGljb1BhbE5vZGVqcy9leHRlcm5hbCBcImh0dHBzXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FDQUEscUY7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiaW90YS1waWNvLXBhbC1ub2RlanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9uZXR3b3JrRXJyb3JcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9wbGF0Zm9ybUVycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2xvZ2dlcnMvbnVsbExvZ2dlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBpb3RhLXBpY28vcGFsLW5vZGVqc1wiLCBbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9uZXR3b3JrRXJyb3JcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9wbGF0Zm9ybUVycm9yXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5XCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeVwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIsIFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiwgXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiLCBcIkBpb3RhLXBpY28vY29yZS9kaXN0L2xvZ2dlcnMvbnVsbExvZ2dlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAaW90YS1waWNvL3BhbC1ub2RlanNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9uZXR3b3JrRXJyb3JcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9wbGF0Zm9ybUVycm9yXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5XCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCIpLCByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIiksIHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKSwgcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2xvZ2dlcnMvbnVsbExvZ2dlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW90YVBpY29QYWxOb2RlanNcIl0gPSBmYWN0b3J5KHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9uZXR3b3JrRXJyb3JcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9lcnJvci9wbGF0Zm9ybUVycm9yXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5XCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL3BsYXRmb3JtQ3J5cHRvRmFjdG9yeVwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9ybmdTZXJ2aWNlRmFjdG9yeVwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvbnVtYmVySGVscGVyXCJdLCByb290W1wiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIl0sIHJvb3RbXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiXSwgcm9vdFtcIkBpb3RhLXBpY28vY29yZS9kaXN0L2xvZ2dlcnMvbnVsbExvZ2dlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9lcnJvcl9uZXR3b3JrRXJyb3JfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9lcnJvcl9wbGF0Zm9ybUVycm9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZmFjdG9yaWVzX25ldHdvcmtDbGllbnRGYWN0b3J5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfZmFjdG9yaWVzX3BsYXRmb3JtQ3J5cHRvRmFjdG9yeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2ZhY3Rvcmllc19ybmdTZXJ2aWNlRmFjdG9yeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2hlbHBlcnNfbnVtYmVySGVscGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2lvdGFfcGljb19jb3JlX2Rpc3RfaGVscGVyc19vYmplY3RIZWxwZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX3N0cmluZ0hlbHBlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2xvZ2dlcnNfbnVsbExvZ2dlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kaXN0LmVzNi9pbmRleC5qc1wiKTtcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuY29uc3QgcGxhdGZvcm1FcnJvcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2Vycm9yL3BsYXRmb3JtRXJyb3JcIik7XHJcbmNvbnN0IG9iamVjdEhlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvb2JqZWN0SGVscGVyXCIpO1xyXG5jb25zdCBzdHJpbmdIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL3N0cmluZ0hlbHBlclwiKTtcclxuY29uc3QgY3J5cHRvID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImNyeXB0b1wiKSk7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIHBsYXRmb3JtIGNyeXB0byBmb3IgdXNlIGluIE5vZGVKUy5cclxuICovXHJcbmNsYXNzIFBsYXRmb3JtQ3J5cHRvIHtcclxuICAgIC8qKlxyXG4gICAgICogRW5jcnlwdCB0aGUgZ2l2ZW4gZGF0YS5cclxuICAgICAqIEBwYXJhbSBwcml2YXRlS2V5IFRoZSBrZXkgdG8gdXNlIGZvciBlbmNyeXB0aW5nIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBlbmNyeXB0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGVuY3J5cHRlZCBkYXRhLlxyXG4gICAgICovXHJcbiAgICBlbmNyeXB0KHByaXZhdGVLZXksIGRhdGEpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkocHJpdmF0ZUtleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIHByaXZhdGVLZXkgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShkYXRhKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgZGF0YSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oZGF0YSwgXCJhc2NpaVwiKTtcclxuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBjcnlwdG8ucHJpdmF0ZUVuY3J5cHQocHJpdmF0ZUtleSwgYnVmZmVyKTtcclxuICAgICAgICByZXR1cm4gZW5jcnlwdGVkLnRvU3RyaW5nKFwiaGV4XCIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNyeXB0IHRoZSBnaXZlbiBkYXRhLlxyXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUga2V5IHRvIHVzZSBmb3IgZGVjcnlwdGluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gZGVjcnlwdC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBkZWNyeXB0ZWQgZGF0YS5cclxuICAgICAqL1xyXG4gICAgZGVjcnlwdChwdWJsaWNLZXksIGRhdGEpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkocHVibGljS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgcHVibGljS2V5IG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoZGF0YSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGRhdGEgbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGRhdGEsIFwiaGV4XCIpO1xyXG4gICAgICAgIGNvbnN0IGRlY3J5cHRlZCA9IGNyeXB0by5wdWJsaWNEZWNyeXB0KHB1YmxpY0tleSwgYnVmZmVyKTtcclxuICAgICAgICByZXR1cm4gZGVjcnlwdGVkLnRvU3RyaW5nKFwiYXNjaWlcIik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNpZ24gdGhlIGdpdmVuIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gcHJpdmF0ZUtleSBUaGUga2V5IHRvIHVzZSBmb3Igc2lnbmluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gc2lnbi5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzaWduYXR1cmUuXHJcbiAgICAgKi9cclxuICAgIHNpZ24ocHJpdmF0ZUtleSwgZGF0YSkge1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShwcml2YXRlS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgcHJpdmF0ZUtleSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBkYXRhIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaWduZXIgPSBjcnlwdG8uY3JlYXRlU2lnbihcIlJTQS1TSEEyNTZcIik7XHJcbiAgICAgICAgc2lnbmVyLnVwZGF0ZShkYXRhKTtcclxuICAgICAgICByZXR1cm4gc2lnbmVyLnNpZ24ocHJpdmF0ZUtleSwgXCJoZXhcIik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFZlcmlmeSB0aGUgZ2l2ZW4gZGF0YS5cclxuICAgICAqIEBwYXJhbSBwdWJsaWNLZXkgVGhlIGtleSB0byB1c2UgZm9yIHZlcmlmeWluZyBkYXRhLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gdmVyaWZ5LlxyXG4gICAgICogQHBhcmFtIHNpZ25hdHVyZSBUaGUgc2lnbmF0dXJlIHRvIHZlcmlmeSBhZ2FpbnQgdGhlIGRhdGEuXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2ZXJpZmljYXRpb24gaXMgc3VjY2Vzc2Z1bC5cclxuICAgICAqL1xyXG4gICAgdmVyaWZ5KHB1YmxpY0tleSwgZGF0YSwgc2lnbmF0dXJlKSB7XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KHB1YmxpY0tleSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIHB1YmxpY0tleSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBkYXRhIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoc2lnbmF0dXJlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgc2lnbmF0dXJlIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2ZXJpZmllciA9IGNyeXB0by5jcmVhdGVWZXJpZnkoXCJSU0EtU0hBMjU2XCIpO1xyXG4gICAgICAgIHZlcmlmaWVyLnVwZGF0ZShkYXRhKTtcclxuICAgICAgICByZXR1cm4gdmVyaWZpZXIudmVyaWZ5KHB1YmxpY0tleSwgc2lnbmF0dXJlLCBcImhleFwiKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogSGFzaCB0aGUgZGF0YS5cclxuICAgICAqIEBwYXJhbSBhbGdvIFRoZSBhbGdvcml0aG0gdG8gdXNlLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gaGFzaC5cclxuICAgICAqIEBwYXJhbSBkYXRhVHlwZSBUaGUgdHlwZSBvZiB0aGUgaW5wdXQgZGF0YSB1dGY4LCBhc2NpaSwgbGF0aW4xLlxyXG4gICAgICogQHBhcmFtIGVuY29kaW5nIFRoZSBlbmNvZGluZyB0byByZXR1cm4gdGhlIGRhdGEgbGF0aW4xLCBoZXgsIGJhc2U2NC5cclxuICAgICAqIEByZXR1cm5zIFRoZSBoYXNoIG9mIHRoZSBkYXRhLlxyXG4gICAgICovXHJcbiAgICBoYXNoKGFsZ28sIGRhdGEsIGRhdGFUeXBlLCBlbmNvZGluZykge1xyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShhbGdvKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgYWxnbyBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBkYXRhIG11c3QgYmUgYSBub24gZW1wdHkgc3RyaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goYWxnbylcclxuICAgICAgICAgICAgLnVwZGF0ZShkYXRhLCBkYXRhVHlwZSlcclxuICAgICAgICAgICAgLmRpZ2VzdChlbmNvZGluZyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEhNQUMgdGhlIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gYWxnbyBUaGUgYWxnb3JpdGhtIHRvIHVzZS5cclxuICAgICAqIEBwYXJhbSBrZXkgVGhlIGtleSB0byBoYXNoIHRoZSBkYXRhIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBoYXNoLlxyXG4gICAgICogQHBhcmFtIGRhdGFUeXBlIFRoZSB0eXBlIG9mIHRoZSBpbnB1dCBkYXRhIHV0ZjgsIGFzY2lpLCBsYXRpbjEuXHJcbiAgICAgKiBAcGFyYW0gZW5jb2RpbmcgVGhlIGVuY29kaW5nIHRvIHJldHVybiB0aGUgZGF0YSBsYXRpbjEsIGhleCwgYmFzZTY0LlxyXG4gICAgICogQHJldHVybnMgVGhlIGhhc2ggb2YgdGhlIGRhdGEuXHJcbiAgICAgKi9cclxuICAgIGhtYWMoYWxnbywga2V5LCBkYXRhLCBkYXRhVHlwZSwgZW5jb2RpbmcpIHtcclxuICAgICAgICBpZiAoc3RyaW5nSGVscGVyXzEuU3RyaW5nSGVscGVyLmlzRW1wdHkoYWxnbykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IHBsYXRmb3JtRXJyb3JfMS5QbGF0Zm9ybUVycm9yKFwiVGhlIGFsZ28gbXVzdCBiZSBhIG5vbiBlbXB0eSBzdHJpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBwbGF0Zm9ybUVycm9yXzEuUGxhdGZvcm1FcnJvcihcIlRoZSBrZXkgbXVzdCBiZSBub24gZW1wdHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHJpbmdIZWxwZXJfMS5TdHJpbmdIZWxwZXIuaXNFbXB0eShkYXRhKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgcGxhdGZvcm1FcnJvcl8xLlBsYXRmb3JtRXJyb3IoXCJUaGUgZGF0YSBtdXN0IGJlIGEgbm9uIGVtcHR5IHN0cmluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNyeXB0by5jcmVhdGVIbWFjKGFsZ28sIGtleSlcclxuICAgICAgICAgICAgLnVwZGF0ZShkYXRhLCBkYXRhVHlwZSlcclxuICAgICAgICAgICAgLmRpZ2VzdChlbmNvZGluZyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QbGF0Zm9ybUNyeXB0byA9IFBsYXRmb3JtQ3J5cHRvO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoZEdadmNtMURjbmx3ZEc4dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12WTNKNWNIUnZMM0JzWVhSbWIzSnRRM0o1Y0hSdkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUVVFc05FVkJRWGxGTzBGQlEzcEZMRFJGUVVGNVJUdEJRVU42UlN3MFJVRkJlVVU3UVVGRmVrVXNkVVJCUVdsRE8wRkJSV3BET3p0SFFVVkhPMEZCUTBnc1RVRkJZU3hqUVVGak8wbEJRM1pDT3pzN096dFBRVXRITzBsQlEwa3NUMEZCVHl4RFFVRkRMRlZCUVd0Q0xFVkJRVVVzU1VGQldUdFJRVU16UXl4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMWxCUTJ4RExFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMREpEUVVFeVF5eERRVUZETEVOQlFVTTdVMEZEZUVVN1VVRkRSQ3hKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRelZDTEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExIRkRRVUZ4UXl4RFFVRkRMRU5CUVVNN1UwRkRiRVU3VVVGRFJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTXhReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dFJRVU0xUkN4UFFVRlBMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVWRU96czdPenRQUVV0SE8wbEJRMGtzVDBGQlR5eERRVUZETEZOQlFXbENMRVZCUVVVc1NVRkJXVHRSUVVNeFF5eEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzFsQlEycERMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETERCRFFVRXdReXhEUVVGRExFTkJRVU03VTBGRGRrVTdVVUZEUkN4SlFVRkpMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpWQ0xFMUJRVTBzU1VGQlNTdzJRa0ZCWVN4RFFVRkRMSEZEUVVGeFF5eERRVUZETEVOQlFVTTdVMEZEYkVVN1VVRkRSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU40UXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRSUVVNeFJDeFBRVUZQTEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGRrTXNRMEZCUXp0SlFVVkVPenM3T3p0UFFVdEhPMGxCUTBrc1NVRkJTU3hEUVVGRExGVkJRV3RDTEVWQlFVVXNTVUZCV1R0UlFVTjRReXhKUVVGSkxESkNRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xbEJRMnhETEUxQlFVMHNTVUZCU1N3MlFrRkJZU3hEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1UwRkRlRVU3VVVGRFJDeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRTFCUVUwc1NVRkJTU3cyUWtGQllTeERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VTBGRGJFVTdVVUZEUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMUZCUXk5RExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRjRUlzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dEpRVU14UXl4RFFVRkRPMGxCUlVRN096czdPenRQUVUxSE8wbEJRMGtzVFVGQlRTeERRVUZETEZOQlFXbENMRVZCUVVVc1NVRkJXU3hGUVVGRkxGTkJRV2xDTzFGQlF6VkVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1dVRkRha01zVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc01FTkJRVEJETEVOQlFVTXNRMEZCUXp0VFFVTjJSVHRSUVVORUxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JUdFJRVU5FTEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdXVUZEYWtNc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNNRU5CUVRCRExFTkJRVU1zUTBGQlF6dFRRVU4yUlR0UlFVTkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eFpRVUZaTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1VVRkRia1FzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOMFFpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTjRSQ3hEUVVGRE8wbEJSVVE3T3pzN096czdUMEZQUnp0SlFVTkpMRWxCUVVrc1EwRkJReXhKUVVGWkxFVkJRMW9zU1VGQlV5eEZRVU5VTEZGQlFYTkRMRVZCUTNSRExGRkJRWE5ETzFGQlF6bERMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkROVUlzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc2NVTkJRWEZETEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRSUVVORUxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JUdFJRVVZFTEU5QlFVOHNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU03WVVGRFlpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJRenRoUVVOMFFpeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVVZFT3pzN096czdPenRQUVZGSE8wbEJRMGtzU1VGQlNTeERRVUZETEVsQlFWa3NSVUZEV2l4SFFVRlJMRVZCUTFJc1NVRkJVeXhGUVVOVUxGRkJRWE5ETEVWQlEzUkRMRkZCUVhORE8xRkJRemxETEVsQlFVa3NNa0pCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZETlVJc1RVRkJUU3hKUVVGSkxEWkNRVUZoTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zUTBGQlF6dFRRVU5zUlR0UlFVTkVMRWxCUVVrc01rSkJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRNMElzVFVGQlRTeEpRVUZKTERaQ1FVRmhMRU5CUVVNc01rSkJRVEpDTEVOQlFVTXNRMEZCUXp0VFFVTjRSRHRSUVVORUxFbEJRVWtzTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUVUZCVFN4SlFVRkpMRFpDUVVGaExFTkJRVU1zY1VOQlFYRkRMRU5CUVVNc1EwRkJRenRUUVVOc1JUdFJRVVZFTEU5QlFVOHNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eERRVUZETzJGQlEyeENMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETzJGQlEzUkNMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU4wUXl4RFFVRkRPME5CUTBvN1FVRnFTVVFzZDBOQmFVbERJbjA9IiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xyXG4vKipcclxuICogQ29tYmluZWQgaW5kZXggb2YgYWxsIHRoZSBtb2R1bGVzLlxyXG4gKi9cclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcGFsXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY3J5cHRvL3BsYXRmb3JtQ3J5cHRvXCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbmV0d29yay9uZXR3b3JrQ2xpZW50XCIpLCBleHBvcnRzKTtcclxudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2VydmljZXMvcm5nU2VydmljZVwiKSwgZXhwb3J0cyk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEdkRVFVRnpRanRCUVVOMFFpeHJSVUZCZDBNN1FVRkRlRU1zYTBWQlFYZERPMEZCUTNoRExHZEZRVUZ6UXlKOSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuY29uc3QgbmV0d29ya0Vycm9yXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZXJyb3IvbmV0d29ya0Vycm9yXCIpO1xyXG5jb25zdCBudW1iZXJIZWxwZXJfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9oZWxwZXJzL251bWJlckhlbHBlclwiKTtcclxuY29uc3Qgb2JqZWN0SGVscGVyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvaGVscGVycy9vYmplY3RIZWxwZXJcIik7XHJcbmNvbnN0IHN0cmluZ0hlbHBlcl8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2hlbHBlcnMvc3RyaW5nSGVscGVyXCIpO1xyXG5jb25zdCBudWxsTG9nZ2VyXzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvbG9nZ2Vycy9udWxsTG9nZ2VyXCIpO1xyXG5jb25zdCBodHRwID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImh0dHBcIikpO1xyXG5jb25zdCBodHRwcyA9IHRzbGliXzEuX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJodHRwc1wiKSk7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiBhIG5vZGUgY2xpZW50IGZvciB1c2UgaW4gTm9kZUpTLlxyXG4gKi9cclxuY2xhc3MgTmV0d29ya0NsaWVudCB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBOZXR3b3JrQ2xpZW50LlxyXG4gICAgICogQHBhcmFtIG5ldHdvcmtFbmRQb2ludCBUaGUgZW5kcG9pbnQgdG8gdXNlIGZvciB0aGUgY2xpZW50LlxyXG4gICAgICogQHBhcmFtIGxvZ2dlciBMb2dnZXIgdG8gc2VuZCBjb21tdW5pY2F0aW9uIGluZm8gdG8uXHJcbiAgICAgKiBAcGFyYW0gdGltZW91dE1zIFRoZSB0aW1lb3V0IGluIG1zIGJlZm9yZSBhYm9ydGluZy5cclxuICAgICAqIEBwYXJhbSBodHRwQ2xpZW50UmVxdWVzdCBUaGUgY2xpZW50IHJlcXVlc3Qgb2JqZWN0LCB1c3VhbGx5IG5vdCByZXF1aXJlZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmV0d29ya0VuZFBvaW50LCBsb2dnZXIsIHRpbWVvdXRNcyA9IDAsIGh0dHBDbGllbnRSZXF1ZXN0KSB7XHJcbiAgICAgICAgaWYgKG9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KG5ldHdvcmtFbmRQb2ludCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihcIlRoZSBuZXR3b3JrRW5kUG9pbnQgbXVzdCBiZSBkZWZpbmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW51bWJlckhlbHBlcl8xLk51bWJlckhlbHBlci5pc0ludGVnZXIodGltZW91dE1zKSB8fCB0aW1lb3V0TXMgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoXCJUaGUgdGltZW91dE1zIG11c3QgYmUgPj0gMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbmV0d29ya0VuZFBvaW50ID0gbmV0d29ya0VuZFBvaW50O1xyXG4gICAgICAgIHRoaXMuX3RpbWVvdXRNcyA9IHRpbWVvdXRNcztcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXIgfHwgbmV3IG51bGxMb2dnZXJfMS5OdWxsTG9nZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5faHR0cENsaWVudFJlcXVlc3QgPSBodHRwQ2xpZW50UmVxdWVzdCB8fCAobmV0d29ya0VuZFBvaW50LmdldFByb3RvY29sKCkgPT09IFwiaHR0cFwiID8gaHR0cC5yZXF1ZXN0IDogaHR0cHMucmVxdWVzdCk7XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyLmJhbm5lcihcIk5ldHdvcmsgQ2xpZW50XCIsIHsgZW5kUG9pbnQ6IHRoaXMuX25ldHdvcmtFbmRQb2ludCB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGRhdGEgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBzZW5kLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxQYXRoIEFuIGFkZGl0aW9uYWwgcGF0aCBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IHBhdGguXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbEhlYWRlcnMgRXh0cmEgaGVhZGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBvYmplY3QgcmV0dXJuZWQgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBnZXQoZGF0YSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6R0VUIFNlbmRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3AgPSB5aWVsZCB0aGlzLmRvUmVxdWVzdChcIkdFVFwiLCB0aGlzLm9iamVjdFRvUGFyYW1ldGVycyhkYXRhKSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKTtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oXCI8PT09IE5ldHdvcmtDbGllbnQ6OkdFVCBSZWNlaXZlZFwiLCByZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFBvc3QgZGF0YSBhc3luY2hyb25vdXNseS5cclxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIHNlbmQuXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbFBhdGggQW4gYWRkaXRpb25hbCBwYXRoIGFwcGVuZCB0byB0aGUgZW5kcG9pbnQgcGF0aC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsSGVhZGVycyBFeHRyYSBoZWFkZXJzIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdC5cclxuICAgICAqIEByZXR1cm5zIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIG9iamVjdCByZXR1cm5lZCBvciByZWplY3RzIHdpdGggZXJyb3IuXHJcbiAgICAgKi9cclxuICAgIHBvc3QoZGF0YSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhcIj09PT4gTmV0d29ya0NsaWVudDo6UE9TVCBTZW5kXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwID0geWllbGQgdGhpcy5kb1JlcXVlc3QoXCJQT1NUXCIsIGRhdGEsIGFkZGl0aW9uYWxQYXRoLCBhZGRpdGlvbmFsSGVhZGVycyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBOZXR3b3JrQ2xpZW50OjpQT1NUIFJlY2VpdmVkXCIsIHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCBkYXRhIGFzIEpTT04gYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBAdHlwZXBhcmFtIFQgVGhlIGdlbmVyaWMgdHlwZSBmb3IgdGhlIG9iamVjdCB0byBzZW5kLlxyXG4gICAgICogQHR5cGVwYXJhbSBVIFRoZSBnZW5lcmljIHR5cGUgZm9yIHRoZSByZXR1cm5lZCBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBzZW5kIGFzIHRoZSBKU09OIGJvZHkuXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxQYXRoIEFuIGFkZGl0aW9uYWwgcGF0aCBhcHBlbmQgdG8gdGhlIGVuZHBvaW50IHBhdGguXHJcbiAgICAgKiBAcGFyYW0gYWRkaXRpb25hbEhlYWRlcnMgRXh0cmEgaGVhZGVycyB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBvYmplY3QgcmV0dXJuZWQgb3IgcmVqZWN0cyB3aXRoIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBqc29uKGRhdGEsIG1ldGhvZCwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuaW5mbyhgPT09PiBOZXR3b3JrQ2xpZW50Ojoke21ldGhvZH0gU2VuZGApO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gYWRkaXRpb25hbEhlYWRlcnMgfHwge307XHJcbiAgICAgICAgICAgIGxldCBsb2NhbERhdGE7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwiR0VUXCIgfHwgbWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbERhdGEgPSB0aGlzLm9iamVjdFRvUGFyYW1ldGVycyhkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcclxuICAgICAgICAgICAgICAgIGxvY2FsRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvUmVxdWVzdChtZXRob2QsIGxvY2FsRGF0YSwgYWRkaXRpb25hbFBhdGgsIGhlYWRlcnMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKGA9PT0+IE5ldHdvcmtDbGllbnQ6OiR7bWV0aG9kfSBSZWNlaXZlZGAsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmluZm8oYD09PT4gTmV0d29ya0NsaWVudDo6JHttZXRob2R9IFBhcnNlIEZhaWxlZGAsIHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKG5ldyBuZXR3b3JrRXJyb3JfMS5OZXR3b3JrRXJyb3IoYEZhaWxlZCAke21ldGhvZH0gcmVxdWVzdCwgdW5hYmxlIHRvIHBhcnNlIHJlc3BvbnNlYCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogdGhpcy5fbmV0d29ya0VuZFBvaW50LmdldFVyaSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2VEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhIHJlcXVlc3QgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBAcGFyYW0gbWV0aG9kIFRoZSBtZXRob2QgdG8gc2VuZCB0aGUgZGF0YSB3aXRoLlxyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gc2VuZC5cclxuICAgICAqIEBwYXJhbSBhZGRpdGlvbmFsUGF0aCBBbiBhZGRpdGlvbmFsIHBhdGggYXBwZW5kIHRvIHRoZSBlbmRwb2ludCBwYXRoLlxyXG4gICAgICogQHBhcmFtIGFkZGl0aW9uYWxIZWFkZXJzIEV4dHJhIGhlYWRlcnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxyXG4gICAgICogQHJldHVybnMgUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgb2JqZWN0IHJldHVybmVkIG9yIHJlamVjdHMgd2l0aCBlcnJvci5cclxuICAgICAqL1xyXG4gICAgZG9SZXF1ZXN0KG1ldGhvZCwgZGF0YSwgYWRkaXRpb25hbFBhdGgsIGFkZGl0aW9uYWxIZWFkZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IGFkZGl0aW9uYWxIZWFkZXJzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgbGV0IHVyaSA9IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRVcmkoKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gdGhpcy5fbmV0d29ya0VuZFBvaW50LmdldFJvb3RQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cmluZ0hlbHBlcl8xLlN0cmluZ0hlbHBlci5pc0VtcHR5KGFkZGl0aW9uYWxQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlwcGVkID0gYC8ke2FkZGl0aW9uYWxQYXRoLnJlcGxhY2UoL15cXC8qLywgXCJcIil9YDtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHN0cmlwcGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaSArPSBzdHJpcHBlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2w6IGAke3RoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRQcm90b2NvbCgpfTpgLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lOiB0aGlzLl9uZXR3b3JrRW5kUG9pbnQuZ2V0SG9zdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcnQ6IHRoaXMuX25ldHdvcmtFbmRQb2ludC5nZXRQb3J0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuX3RpbWVvdXRNcyA+IDAgPyB0aGlzLl90aW1lb3V0TXMgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAoKG1ldGhvZCA9PT0gXCJHRVRcIiB8fCBtZXRob2QgPT09IFwiREVMRVRFXCIpICYmICFvYmplY3RIZWxwZXJfMS5PYmplY3RIZWxwZXIuaXNFbXB0eShkYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucGF0aCArPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxID0gdGhpcy5faHR0cENsaWVudFJlcXVlc3Qob3B0aW9ucywgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGEgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zZXRFbmNvZGluZyhcInV0ZjhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLm9uKFwiZGF0YVwiLCAocmVzcG9uc2VCb2R5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSArPSByZXNwb25zZUJvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLm9uKFwiZW5kXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5pbmZvKFwiPD09PSBOZXR3b3JrQ2xpZW50OjpSZWNlaXZlZCBGYWlsXCIsIHsgY29kZTogcmVzLnN0YXR1c0NvZGUsIGRhdGE6IHJlc3BvbnNlRGF0YSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKGBGYWlsZWQgJHttZXRob2R9IHJlcXVlc3RgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQ6IHVyaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvclJlc3BvbnNlQ29kZTogcmVzLnN0YXR1c0NvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JSZXNwb25zZTogcmVzcG9uc2VEYXRhIHx8IHJlcy5zdGF0dXNNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVxLm9uKFwiZXJyb3JcIiwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihcIjw9PT0gTmV0d29ya0NsaWVudDo6RXJyb3JlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IG5ldHdvcmtFcnJvcl8xLk5ldHdvcmtFcnJvcihgRmFpbGVkICR7bWV0aG9kfSByZXF1ZXN0YCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogdXJpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvclJlc3BvbnNlOiBlcnJcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlcS5vbihcInRpbWVvdXRcIiwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihcIjw9PT0gTmV0d29ya0NsaWVudDo6VGltZWQgT3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgbmV0d29ya0Vycm9yXzEuTmV0d29ya0Vycm9yKGBGYWlsZWQgJHttZXRob2R9IHJlcXVlc3QsIHRpbWVkIG91dGAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kUG9pbnQ6IHVyaVxyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiREVMRVRFXCIgJiYgIW9iamVjdEhlbHBlcl8xLk9iamVjdEhlbHBlci5pc0VtcHR5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxLndyaXRlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxLmVuZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qIEBpbnRlcm5hbCAqL1xyXG4gICAgb2JqZWN0VG9QYXJhbWV0ZXJzKGRhdGEpIHtcclxuICAgICAgICBsZXQgbG9jYWxVcmkgPSBcIlwiO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFybXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV0gPyBkYXRhW2tleV0udG9TdHJpbmcoKSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFybXMucHVzaChgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5c1tpXSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsVXJpICs9IGA/JHtwYXJtcy5qb2luKFwiJlwiKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsb2NhbFVyaTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5ldHdvcmtDbGllbnQgPSBOZXR3b3JrQ2xpZW50O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2libVYwZDI5eWEwTnNhV1Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl1WlhSM2IzSnJMMjVsZEhkdmNtdERiR2xsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3d1JVRkJkVVU3UVVGRGRrVXNORVZCUVhsRk8wRkJRM3BGTERSRlFVRjVSVHRCUVVONlJTdzBSVUZCZVVVN1FVRkxla1VzZDBWQlFYRkZPMEZCUTNKRkxHMUVRVUUyUWp0QlFVTTNRaXh4UkVGQkswSTdRVUZGTDBJN08wZEJSVWM3UVVGRFNDeE5RVUZoTEdGQlFXRTdTVUZWZEVJN096czdPenRQUVUxSE8wbEJRMGdzV1VGRFNTeGxRVUZwUXl4RlFVTnFReXhOUVVGblFpeEZRVU5vUWl4WlFVRnZRaXhEUVVGRExFVkJRM0pDTEdsQ1FVRTRTanRSUVVNNVNpeEpRVUZKTERKQ1FVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTzFsQlEzWkRMRTFCUVUwc1NVRkJTU3d5UWtGQldTeERRVUZETEhGRFFVRnhReXhEUVVGRExFTkJRVU03VTBGRGFrVTdVVUZEUkN4SlFVRkpMRU5CUVVNc01rSkJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1UwRkJVeXhIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU55UkN4TlFVRk5MRWxCUVVrc01rSkJRVmtzUTBGQlF5dzBRa0ZCTkVJc1EwRkJReXhEUVVGRE8xTkJRM2hFTzFGQlEwUXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEhRVUZITEdWQlFXVXNRMEZCUXp0UlFVTjRReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXp0UlFVTTFRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNTVUZCU1N4SlFVRkpMSFZDUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NhVUpCUVdsQ0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNWMEZCVnl4RlFVRkZMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdVVUZGZWtnc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTXZSU3hEUVVGRE8wbEJSVVE3T3pzN096dFBRVTFITzBsQlExVXNSMEZCUnl4RFFVRkRMRWxCUVRSQ0xFVkJRVVVzWTBGQmRVSXNSVUZCUlN4cFFrRkJaMFE3TzFsQlEzQklMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETERoQ1FVRTRRaXhEUVVGRExFTkJRVU03V1VGRGJFUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1kwRkJZeXhGUVVGRkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1dVRkRNMGNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc2EwTkJRV3RETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkROVVFzVDBGQlR5eEpRVUZKTEVOQlFVTTdVVUZEYUVJc1EwRkJRenRMUVVGQk8wbEJSVVE3T3pzN096dFBRVTFITzBsQlExVXNTVUZCU1N4RFFVRkRMRWxCUVZrc1JVRkJSU3hqUVVGMVFpeEZRVUZGTEdsQ1FVRm5SRHM3V1VGRGNrY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zSzBKQlFTdENMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGVrUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRVZCUVVVc1kwRkJZeXhGUVVGRkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1dVRkRia1lzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc2JVTkJRVzFETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1dVRkROMFFzVDBGQlR5eEpRVUZKTEVOQlFVTTdVVUZEYUVJc1EwRkJRenRMUVVGQk8wbEJSVVE3T3pzN096czdPenRQUVZOSE8wbEJRMVVzU1VGQlNTeERRVUZQTEVsQlFWRXNSVUZCUlN4TlFVRnpRaXhGUVVGRkxHTkJRWFZDTEVWQlFVVXNhVUpCUVdkRU96dFpRVU12U0N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eDFRa0ZCZFVJc1RVRkJUU3hQUVVGUExFTkJRVU1zUTBGQlF6dFpRVVY0UkN4TlFVRk5MRTlCUVU4c1IwRkJSeXhwUWtGQmFVSXNTVUZCU1N4RlFVRkZMRU5CUVVNN1dVRkZlRU1zU1VGQlNTeFRRVUZUTEVOQlFVTTdXVUZEWkN4SlFVRkpMRTFCUVUwc1MwRkJTeXhMUVVGTExFbEJRVWtzVFVGQlRTeExRVUZMTEZGQlFWRXNSVUZCUlR0blFrRkRla01zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0aFFVTTNRenRwUWtGQlRUdG5Ra0ZEU0N4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzYTBKQlFXdENMRU5CUVVNN1owSkJRemRETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlEzQkRPMWxCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1kwRkJZeXhGUVVGRkxFOUJRVThzUTBGQlF6dHBRa0ZETlVRc1NVRkJTU3hEUVVGRExFTkJRVU1zV1VGQldTeEZRVUZGTEVWQlFVVTdaMEpCUTI1Q0xFbEJRVWs3YjBKQlEwRXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0dlFrRkRNVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEUxQlFVMHNWMEZCVnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE8yOUNRVU4wUlN4UFFVRlZMRkZCUVZFc1EwRkJRenRwUWtGRGRFSTdaMEpCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3YjBKQlExWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zZFVKQlFYVkNMRTFCUVUwc1pVRkJaU3hGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzI5Q1FVTTVSU3hOUVVGTkxFTkJRVU1zU1VGQlNTd3lRa0ZCV1N4RFFVRkRMRlZCUVZVc1RVRkJUU3h2UTBGQmIwTXNSVUZCUlR0M1FrRkRNVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdkMEpCUTNoRExGRkJRVkVzUlVGQlJTeFpRVUZaTzNGQ1FVTjZRaXhEUVVGRExFTkJRVU1zUTBGQlF6dHBRa0ZEVUR0WlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMWdzUTBGQlF6dExRVUZCTzBsQlJVUTdPenM3T3pzN1QwRlBSenRKUVVOVkxGTkJRVk1zUTBGQlF5eE5RVUZqTEVWQlFVVXNTVUZCV1N4RlFVRkZMR05CUVhWQ0xFVkJRVVVzYVVKQlFXZEVPenRaUVVNeFNDeFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeEZRVUZGTzJkQ1FVTXpReXhOUVVGTkxFOUJRVThzUjBGQlJ5eHBRa0ZCYVVJc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlJYaERMRWxCUVVrc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dG5Ra0ZEZWtNc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzJkQ1FVTXZReXhKUVVGSkxFTkJRVU1zTWtKQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFVkJRVVU3YjBKQlEzWkRMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzWTBGQll5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dHZRa0ZETVVRc1NVRkJTU3hKUVVGSkxGRkJRVkVzUTBGQlF6dHZRa0ZEYWtJc1IwRkJSeXhKUVVGSkxGRkJRVkVzUTBGQlF6dHBRa0ZEYmtJN1owSkJSVVFzVFVGQlRTeFBRVUZQTEVkQlFVYzdiMEpCUTFvc1VVRkJVU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITzI5Q1FVTnVSQ3hSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUlVGQlJUdHZRa0ZEZWtNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVU3YjBKQlEzSkRMRWxCUVVrc1JVRkJSU3hKUVVGSk8yOUNRVU5XTEUxQlFVMHNSVUZCUlN4TlFVRk5PMjlDUVVOa0xFOUJRVTg3YjBKQlExQXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTzJsQ1FVTTNSQ3hEUVVGRE8yZENRVVZHTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1MwRkJTeXhKUVVGSkxFMUJRVTBzUzBGQlN5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMREpDUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMjlDUVVNeFJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJRenRwUWtGRGVFSTdaMEpCUlVRc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4RlFVRkZPMjlDUVVOcVJDeEpRVUZKTEZsQlFWa3NSMEZCUnl4RlFVRkZMRU5CUVVNN2IwSkJRM1JDTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03YjBKQlEzaENMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRVZCUVVVN2QwSkJRelZDTEZsQlFWa3NTVUZCU1N4WlFVRlpMRU5CUVVNN2IwSkJRMnBETEVOQlFVTXNRMEZCUXl4RFFVRkRPMjlDUVVOSUxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSVHQzUWtGRFppeEpRVUZKTEVkQlFVY3NRMEZCUXl4VlFVRlZMRXRCUVVzc1IwRkJSeXhGUVVGRk96UkNRVU40UWl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03ZVVKQlEzcENPelpDUVVGTk96UkNRVU5JTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExHMURRVUZ0UXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVWQlFVVXNTVUZCU1N4RlFVRkZMRmxCUVZrc1JVRkJSU3hEUVVGRExFTkJRVU03TkVKQlEzSkhMRTFCUVUwc1EwRkJReXhKUVVGSkxESkNRVUZaTEVOQlFVTXNWVUZCVlN4TlFVRk5MRlZCUVZVc1JVRkJSVHRuUTBGRGFFUXNVVUZCVVN4RlFVRkZMRWRCUVVjN1owTkJRMklzYVVKQlFXbENMRVZCUVVVc1IwRkJSeXhEUVVGRExGVkJRVlU3WjBOQlEycERMR0ZCUVdFc1JVRkJSU3haUVVGWkxFbEJRVWtzUjBGQlJ5eERRVUZETEdGQlFXRTdOa0pCUTI1RUxFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFPMjlDUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTlFMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5JTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVTdiMEpCUTNCQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRFpDUVVFMlFpeERRVUZETEVOQlFVTTdiMEpCUld4RUxFMUJRVTBzUTBGQlF5eEpRVUZKTERKQ1FVRlpMRU5CUVVNc1ZVRkJWU3hOUVVGTkxGVkJRVlVzUlVGQlJUdDNRa0ZEYUVRc1VVRkJVU3hGUVVGRkxFZEJRVWM3ZDBKQlEySXNZVUZCWVN4RlFVRkZMRWRCUVVjN2NVSkJRM0pDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOU0xFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTklMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExDdENRVUVyUWl4RFFVRkRMRU5CUVVNN2IwSkJSWEJFTEUxQlFVMHNRMEZCUXl4SlFVRkpMREpDUVVGWkxFTkJRVU1zVlVGQlZTeE5RVUZOTEhGQ1FVRnhRaXhGUVVGRk8zZENRVU16UkN4UlFVRlJMRVZCUVVVc1IwRkJSenR4UWtGRGFFSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMUlzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTBnc1NVRkJTU3hOUVVGTkxFdEJRVXNzUzBGQlN5eEpRVUZKTEUxQlFVMHNTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXd5UWtGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHR2UWtGRGVFVXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dHBRa0ZEYmtJN1owSkJRMFFzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMWxCUTJRc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFVDeERRVUZETzB0QlFVRTdTVUZGUkN4bFFVRmxPMGxCUTFBc2EwSkJRV3RDTEVOQlFVa3NTVUZCVHp0UlFVTnFReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdVVUZGYkVJc1NVRkJTU3hKUVVGSkxFVkJRVVU3V1VGRFRpeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlJTOUNMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTJwQ0xFMUJRVTBzUzBGQlN5eEhRVUZoTEVWQlFVVXNRMEZCUXp0blFrRkZNMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRMnhETEUxQlFVMHNSMEZCUnl4SFFVRlpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dHZRa0ZETjBJc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dHZRa0ZEY0VRc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMR3RDUVVGclFpeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRwUWtGRE4wVTdaMEpCUlVRc1VVRkJVU3hKUVVGSkxFbEJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRE8yRkJRM0pETzFOQlEwbzdVVUZGUkN4UFFVRlBMRkZCUVZFc1EwRkJRenRKUVVOd1FpeERRVUZETzBOQlEwbzdRVUY0VFVRc2MwTkJkMDFESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuY29uc3QgbmV0d29ya0NsaWVudEZhY3RvcnlfMSA9IHJlcXVpcmUoXCJAaW90YS1waWNvL2NvcmUvZGlzdC9mYWN0b3JpZXMvbmV0d29ya0NsaWVudEZhY3RvcnlcIik7XHJcbmNvbnN0IHBsYXRmb3JtQ3J5cHRvRmFjdG9yeV8xID0gcmVxdWlyZShcIkBpb3RhLXBpY28vY29yZS9kaXN0L2ZhY3Rvcmllcy9wbGF0Zm9ybUNyeXB0b0ZhY3RvcnlcIik7XHJcbmNvbnN0IHJuZ1NlcnZpY2VGYWN0b3J5XzEgPSByZXF1aXJlKFwiQGlvdGEtcGljby9jb3JlL2Rpc3QvZmFjdG9yaWVzL3JuZ1NlcnZpY2VGYWN0b3J5XCIpO1xyXG5jb25zdCBwbGF0Zm9ybUNyeXB0b18xID0gcmVxdWlyZShcIi4vY3J5cHRvL3BsYXRmb3JtQ3J5cHRvXCIpO1xyXG5jb25zdCBuZXR3b3JrQ2xpZW50XzEgPSByZXF1aXJlKFwiLi9uZXR3b3JrL25ldHdvcmtDbGllbnRcIik7XHJcbmNvbnN0IHJuZ1NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL3JuZ1NlcnZpY2VcIik7XHJcbi8qKlxyXG4gKiBQbGF0Zm9ybSBhYnN0cmFjdGlvbiBsYXllciBmb3IgTm9kZUpTLlxyXG4gKi9cclxuY2xhc3MgUEFMIHtcclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhbnkgaW5pdGlhbGl6YXRpb24gZm9yIHRoZSBQQUwuXHJcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghUEFMLl9pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICBQQUwuX2lzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV0d29ya0NsaWVudEZhY3RvcnlfMS5OZXR3b3JrQ2xpZW50RmFjdG9yeS5pbnN0YW5jZSgpLnJlZ2lzdGVyKFwiZGVmYXVsdFwiLCAobmV0d29ya0VuZHBvaW50LCBsb2dnZXIsIHRpbWVvdXRNcykgPT4gbmV3IG5ldHdvcmtDbGllbnRfMS5OZXR3b3JrQ2xpZW50KG5ldHdvcmtFbmRwb2ludCwgbG9nZ2VyLCB0aW1lb3V0TXMpKTtcclxuICAgICAgICAgICAgICAgIHJuZ1NlcnZpY2VGYWN0b3J5XzEuUm5nU2VydmljZUZhY3RvcnkuaW5zdGFuY2UoKS5yZWdpc3RlcihcImRlZmF1bHRcIiwgKCkgPT4gbmV3IHJuZ1NlcnZpY2VfMS5SbmdTZXJ2aWNlKCkpO1xyXG4gICAgICAgICAgICAgICAgcGxhdGZvcm1DcnlwdG9GYWN0b3J5XzEuUGxhdGZvcm1DcnlwdG9GYWN0b3J5Lmluc3RhbmNlKCkucmVnaXN0ZXIoXCJkZWZhdWx0XCIsICgpID0+IG5ldyBwbGF0Zm9ybUNyeXB0b18xLlBsYXRmb3JtQ3J5cHRvKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vKiBAaW50ZXJuYWwgKi9cclxuUEFMLl9pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbmV4cG9ydHMuUEFMID0gUEFMO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR0ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwzQmhiQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRGhHUVVFeVJqdEJRVU16Uml4blIwRkJOa1k3UVVGRE4wWXNkMFpCUVhGR08wRkJSM0pHTERSRVFVRjVSRHRCUVVONlJDd3lSRUZCZDBRN1FVRkRlRVFzYzBSQlFXMUVPMEZCUlc1RU96dEhRVVZITzBGQlEwZ3NUVUZCWVN4SFFVRkhPMGxCU1ZvN096dFBRVWRITzBsQlEwa3NUVUZCVFN4RFFVRlBMRlZCUVZVN08xbEJRekZDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1kwRkJZeXhGUVVGRk8yZENRVU55UWl4SFFVRkhMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF6dG5Ra0ZETVVJc01rTkJRVzlDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEdWQlFXbERMRVZCUVVVc1RVRkJaU3hGUVVGRkxGTkJRV2xDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc05rSkJRV0VzUTBGQlF5eGxRVUZsTEVWQlFVVXNUVUZCVFN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzUk1MSEZEUVVGcFFpeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVOQlFVTXNTVUZCU1N4MVFrRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtVc05rTkJRWEZDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMQ3RDUVVGakxFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzQkdPMWxCUlVRc1QwRkJUeXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVVUZETjBJc1EwRkJRenRMUVVGQk96dEJRV2hDUkN4bFFVRmxPMEZCUTBFc2EwSkJRV01zUjBGQldTeExRVUZMTEVOQlFVTTdRVUZHYmtRc2EwSkJhMEpESW4wPSIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcclxuY29uc3QgY3J5cHRvID0gdHNsaWJfMS5fX2ltcG9ydFN0YXIocmVxdWlyZShcImNyeXB0b1wiKSk7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiByYW5kb20gbnVtYmVyIGdlbmVyYXRpb24gc2VydmljZS5cclxuICovXHJcbmNsYXNzIFJuZ1NlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBhbiBhcnJheSBvZiByYW5kb20gbnVtYmVycy5cclxuICAgICAqIEBwYXJhbSBsZW5ndGggVGhlIG51bWJlciBvZiBudW1iZXJzIHRvIGdlbmVyYXRlLlxyXG4gICAgICogQHJldHVybnMgQXJyYXkgb2YgcmFuZG9tIG51bWJlciBnZW5lcmF0b3JzLlxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZShsZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoY3J5cHRvLnJhbmRvbUJ5dGVzKGxlbmd0aCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUm5nU2VydmljZSA9IFJuZ1NlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtNW5VMlZ5ZG1salpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5elpYSjJhV05sY3k5eWJtZFRaWEoyYVdObExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCUTBFc2RVUkJRV2xETzBGQlJXcERPenRIUVVWSE8wRkJRMGdzVFVGQllTeFZRVUZWTzBsQlEyNUNPenM3TzA5QlNVYzdTVUZEU1N4UlFVRlJMRU5CUVVNc1RVRkJZenRSUVVNeFFpeFBRVUZQTEVsQlFVa3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjBSQ3hEUVVGRE8wTkJRMG83UVVGVVJDeG5RMEZUUXlKOSIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2Vycm9yX25ldHdvcmtFcnJvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9lcnJvcl9wbGF0Zm9ybUVycm9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2ZhY3Rvcmllc19uZXR3b3JrQ2xpZW50RmFjdG9yeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9mYWN0b3JpZXNfcGxhdGZvcm1DcnlwdG9GYWN0b3J5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19pb3RhX3BpY29fY29yZV9kaXN0X2ZhY3Rvcmllc19ybmdTZXJ2aWNlRmFjdG9yeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX251bWJlckhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX29iamVjdEhlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9oZWxwZXJzX3N0cmluZ0hlbHBlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9faW90YV9waWNvX2NvcmVfZGlzdF9sb2dnZXJzX251bGxMb2dnZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9