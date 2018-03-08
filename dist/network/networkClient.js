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
 * @interface
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
        return this.doRequest("GET", undefined, additionalPath, additionalHeaders);
    }
    /**
     * Post data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    async post(data, additionalPath, additionalHeaders) {
        return this.doRequest("POST", data, additionalPath, additionalHeaders);
    }
    /**
     * Get data as JSON asynchronously.
     * @typeparam U The generic type for the returned object.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    async getJson(additionalPath, additionalHeaders) {
        return this.doRequest("GET", undefined, additionalPath, additionalHeaders)
            .then((responseData) => {
            try {
                const response = JSON.parse(responseData);
                return response;
            }
            catch (err) {
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
        const headers = additionalHeaders || {};
        headers["Content-Type"] = "application/json";
        return this.doRequest("POST", JSON.stringify(data), additionalPath, headers)
            .then((responseData) => {
            try {
                const response = JSON.parse(responseData);
                return response;
            }
            catch (err) {
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
            this._logger.info("===> Send", { data });
            if (!objectHelper_1.ObjectHelper.isEmpty(data)) {
                req.write(data);
            }
            req.end();
        });
    }
}
exports.NetworkClient = NetworkClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrL25ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxvRUFBaUU7QUFDakUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFJekUsd0VBQXFFO0FBQ3JFLDJDQUE2QjtBQUM3Qiw2Q0FBK0I7QUFFL0I7OztHQUdHO0FBQ0g7SUFXSTs7Ozs7T0FLRztJQUNILFlBQVksZUFBaUMsRUFBRSxNQUFnQixFQUFFLFlBQW9CLENBQUMsRUFDMUUsaUJBQThKO1FBQ3RLLEVBQUUsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLElBQUkscUJBQVMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sSUFBSSxxQkFBUyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixF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