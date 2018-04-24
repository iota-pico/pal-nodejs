var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const networkError_1 = require("@iota-pico/core/dist/error/networkError");
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
    async get(additionalPath, additionalHeaders) {
        this._logger.info("===> NetworkClient::GET Send");
        const resp = await this.doRequest("GET", undefined, additionalPath, additionalHeaders);
        this._logger.info("<=== NetworkClient::GET Received", resp);
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
        this._logger.info("===> NetworkClient::POST Send", data);
        const resp = await this.doRequest("POST", data, additionalPath, additionalHeaders);
        this._logger.info("<=== NetworkClient::POST Received", resp);
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
    }
    /* @internal */
    async doRequest(method, data, additionalPath, additionalHeaders) {
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
    }
}
exports.NetworkClient = NetworkClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0NsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrL25ldHdvcmtDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFJekUsd0VBQXFFO0FBQ3JFLDJDQUE2QjtBQUM3Qiw2Q0FBK0I7QUFFL0I7O0dBRUc7QUFDSDtJQVVJOzs7OztPQUtHO0lBQ0gsWUFBWSxlQUFpQyxFQUFFLE1BQWdCLEVBQUUsWUFBb0IsQ0FBQyxFQUMxRSxpQkFBOEo7UUFDdEssSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN2QyxNQUFNLElBQUksMkJBQVksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDckQsTUFBTSxJQUFJLDJCQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGlCQUFpQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUF1QixFQUFFLGlCQUFnRDtRQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQVksRUFBRSxjQUF1QixFQUFFLGlCQUFnRDtRQUNyRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBSSxjQUF1QixFQUFFLGlCQUFnRDtRQUM3RixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQzthQUNyRSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNuQixJQUFJO2dCQUNBLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNoRSxPQUFVLFFBQVEsQ0FBQzthQUN0QjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUN4RSxNQUFLLENBQUMsSUFBSSwyQkFBWSxDQUFDLDhDQUE4QyxFQUFFO29CQUNuRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtvQkFDeEMsUUFBUSxFQUFFLFlBQVk7aUJBQ3pCLENBQUMsQ0FBQyxDQUFDO2FBQ1A7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLEtBQUssQ0FBQyxRQUFRLENBQU8sSUFBTyxFQUFFLGNBQXVCLEVBQUUsaUJBQWdEO1FBQzFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFbkQsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLElBQUksRUFBRSxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztRQUU3QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQzthQUN2RSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNuQixJQUFJO2dCQUNBLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRSxPQUFVLFFBQVEsQ0FBQzthQUN0QjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUN4RSxNQUFLLENBQUMsSUFBSSwyQkFBWSxDQUFDLCtDQUErQyxFQUFFO29CQUNwRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtvQkFDeEMsUUFBUSxFQUFFLFlBQVk7aUJBQ3pCLENBQUMsQ0FBQyxDQUFDO2FBQ1A7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxlQUFlO0lBQ1AsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBWSxFQUFFLGNBQXVCLEVBQUUsaUJBQWdEO1FBQzNILE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0MsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLElBQUksRUFBRSxDQUFDO1lBRXhDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDL0MsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN2QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQzFELElBQUksSUFBSSxRQUFRLENBQUM7Z0JBQ2pCLEdBQUcsSUFBSSxRQUFRLENBQUM7YUFDbkI7WUFFRCxNQUFNLE9BQU8sR0FBRztnQkFDWixRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUc7Z0JBQ25ELFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUN6QyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDckMsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTztnQkFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7YUFDN0QsQ0FBQztZQUVGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDakQsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QixHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksRUFBRSxFQUFFO29CQUM1QixZQUFZLElBQUksWUFBWSxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7b0JBQ2YsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTt3QkFDeEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUN6Qjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO3dCQUNyRyxNQUFNLENBQUMsSUFBSSwyQkFBWSxDQUFDLFVBQVUsTUFBTSxVQUFVLEVBQUU7NEJBQ2hELFFBQVEsRUFBRSxHQUFHOzRCQUNiLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxVQUFVOzRCQUNqQyxhQUFhLEVBQUUsWUFBWSxJQUFJLEdBQUcsQ0FBQyxhQUFhO3lCQUNuRCxDQUFDLENBQUMsQ0FBQztxQkFDUDtnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFFbEQsTUFBTSxDQUFDLElBQUksMkJBQVksQ0FBQyxVQUFVLE1BQU0sVUFBVSxFQUFFO29CQUNoRCxRQUFRLEVBQUUsR0FBRztvQkFDYixhQUFhLEVBQUUsR0FBRztpQkFDckIsQ0FBQyxDQUFDLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7Z0JBRXBELE1BQU0sQ0FBQyxJQUFJLDJCQUFZLENBQUMsVUFBVSxNQUFNLHFCQUFxQixFQUFFO29CQUMzRCxRQUFRLEVBQUUsR0FBRztpQkFDaEIsQ0FBQyxDQUFDLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtZQUNELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBbExELHNDQWtMQyJ9