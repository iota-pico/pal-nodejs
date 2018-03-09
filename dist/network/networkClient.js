var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const nullLogger_1 = require("@iota-pico/core/dist/loggers/nullLogger");
const http = __importStar(require("http"));
const https = __importStar(require("https"));
/**
 * Implementation of a node client for use in NodeJS.
 */
class NetworkClient {
    /**
     * Create an instance of NetworkClient.
     * @param networkEndPoint The endpoint to use for the client.
     * @param logger Logger to send communication info to.
     * @param timeoutMs The timeout in ms before aborting.
     */
    constructor(networkEndPoint, logger, timeoutMs = 0, httpClientRequest) {
        if (objectHelper_1.ObjectHelper.isEmpty(networkEndPoint)) {
            throw new coreError_1.CoreError("The networkEndPoint must be defined");
        }
        if (!numberHelper_1.NumberHelper.isInteger(timeoutMs) || timeoutMs < 0) {
            throw new coreError_1.CoreError("The timeoutMs must be >= 0");
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
    async get(additionalPath, additionalHeaders) {
        this._logger.info("===> GET Send");
        const resp = await this.doRequest("GET", undefined, additionalPath, additionalHeaders);
        this._logger.info("<=== GET Received", resp);
        return resp;
    }
    /**
     * Post data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    async post(data, additionalPath, additionalHeaders) {
        this._logger.info("===> POST Send", data);
        const resp = await this.doRequest("POST", data, additionalPath, additionalHeaders);
        this._logger.info("<=== POST Received", resp);
        return resp;
    }
    /**
     * Get data as JSON asynchronously.
     * @typeparam U The generic type for the returned object.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    async getJson(additionalPath, additionalHeaders) {
        this._logger.info("===> GET Send");
        return this.doRequest("GET", undefined, additionalPath, additionalHeaders)
            .then((responseData) => {
            try {
                const response = JSON.parse(responseData);
                this._logger.info("===> GET Received", response);
                return response;
            }
            catch (err) {
                this._logger.info("===> GET Parse Failed", responseData);
                throw (new coreError_1.CoreError("Failed GET request, unable to parse response", {
                    endPoint: this._networkEndPoint.getUri(),
                    response: responseData
                }));
            }
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
    async postJson(data, additionalPath, additionalHeaders) {
        this._logger.info("===> POST Send");
        const headers = additionalHeaders || {};
        headers["Content-Type"] = "application/json";
        return this.doRequest("POST", JSON.stringify(data), additionalPath, headers)
            .then((responseData) => {
            try {
                const response = JSON.parse(responseData);
                this._logger.info("===> POST Received", response);
                return response;
            }
            catch (err) {
                this._logger.info("===> GET Parse Failed", responseData);
                throw (new coreError_1.CoreError("Failed POST request, unable to parse response", {
                    endPoint: this._networkEndPoint.getUri(),
                    response: responseData
                }));
            }
        });
    }
    /* @internal */
    async doRequest(method, data, additionalPath, additionalHeaders) {
        return new Promise((resolve, reject) => {
            const headers = additionalHeaders || {};
            let uri = this._networkEndPoint.getUri();
            let path = this._networkEndPoint.getPath();
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
                        this._logger.error("<=== Received", { data: responseData });
                        resolve(responseData);
                    }
                    else {
                        this._logger.error("<=== Received Fail", { code: res.statusCode, data: responseData });
                        reject(new coreError_1.CoreError(`Failed ${method} request`, {
                            endPoint: uri,
                            errorResponseCode: res.statusCode,
                            errorResponse: responseData || res.statusMessage
                        }));
                    }
                });
            });
            req.on("error", (err) => {
                this._logger.error("<=== Errored");
                reject(new coreError_1.CoreError(`Failed ${method} request`, {
                    endPoint: uri,
                    errorResponse: err
                }));
            });
            req.on("timeout", (err) => {
                this._logger.error("<=== Timed Out");
                reject(new coreError_1.CoreError(`Failed ${method} request, timed out`, {
                    endPoint: uri
                }));
            });
            if (!objectHelper_1.ObjectHelper.isEmpty(data)) {
                req.write(data);
            }
            req.end();
        });
    }
}
exports.NetworkClient = NetworkClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrL25ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxvRUFBaUU7QUFDakUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFJekUsd0VBQXFFO0FBQ3JFLDJDQUE2QjtBQUM3Qiw2Q0FBK0I7QUFFL0I7O0dBRUc7QUFDSDtJQVdJOzs7OztPQUtHO0lBQ0gsWUFBWSxlQUFpQyxFQUFFLE1BQWdCLEVBQUUsWUFBb0IsQ0FBQyxFQUMxRSxpQkFBOEo7UUFDdEssRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxJQUFJLHFCQUFTLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sSUFBSSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVB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