"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const http = require("http");
/**
 * Default implementation of a node client.
 * @interface
 */
class NodeJsNetworkClient {
    /**
     * Create an instance of NodeJsNetworkClient.
     * @param networkEndPoint The endpoint to use for the client.
     */
    constructor(networkEndPoint) {
        if (networkEndPoint === undefined || networkEndPoint === null) {
            throw new coreError_1.CoreError("The networkEndPoint must be defined");
        }
        this._networkEndPoint = networkEndPoint;
    }
    /**
     * Post data asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    postJson(data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const headers = additionalHeaders || {};
                headers["Content-Type"] = "application/json";
                const options = {
                    protocol: `${this._networkEndPoint.getProtocol()}:`,
                    hostname: this._networkEndPoint.getHost(),
                    port: this._networkEndPoint.getPort(),
                    path: this._networkEndPoint.getPath(),
                    method: "POST",
                    headers
                };
                const req = http.request(options, (res) => {
                    let responseData = "";
                    res.setEncoding("utf8");
                    res.on("data", (responseBody) => {
                        responseData += responseBody;
                    });
                    res.on("end", () => {
                        if (res.statusCode === 200) {
                            try {
                                const response = JSON.parse(responseData);
                                resolve(response);
                            }
                            catch (err) {
                                reject(new coreError_1.CoreError("Unsuccessful POST request, unable to parse response", {
                                    endPoint: this._networkEndPoint.getUri(),
                                    httpStatusCode: res.statusCode,
                                    response: responseData
                                }));
                            }
                        }
                        else {
                            reject(new coreError_1.CoreError("Unsuccessful POST request", {
                                endPoint: this._networkEndPoint.getUri(),
                                httpStatusCode: res.statusCode,
                                response: responseData
                            }));
                        }
                    });
                });
                req.on("error", (err) => {
                    reject(new coreError_1.CoreError("Unsuccessful POST request", {
                        endPoint: this._networkEndPoint.getUri(),
                        httpError: err
                    }));
                });
                req.write(JSON.stringify(data));
                req.end();
            });
        });
    }
}
exports.NodeJsNetworkClient = NodeJsNetworkClient;
