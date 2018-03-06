import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import { INetworkEndPoint } from "@iota-pico/core/dist/interfaces/INetworkEndPoint";
import * as http from "http";

/**
 * Implementation of a node client for use in NodeJS.
 * @interface
 */
export class NetworkClient implements INetworkClient {
    /* @internal */
    private readonly _networkEndPoint: INetworkEndPoint;
    /* @internal */
    private readonly _timeoutMs: number;

    /* @internal */
    private readonly _httpClientRequest: (options: http.RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void) => http.ClientRequest;

    /**
     * Create an instance of NetworkClient.
     * @param networkEndPoint The endpoint to use for the client.
     * @param timeoutMs The timeout in ms before aborting.
     */
    constructor(networkEndPoint: INetworkEndPoint, timeoutMs: number = 0,
                httpClientRequest?: (options: http.RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void) => http.ClientRequest) {
        if (ObjectHelper.isEmpty(networkEndPoint)) {
            throw new CoreError("The networkEndPoint must be defined");
        }
        if (!NumberHelper.isInteger(timeoutMs) || timeoutMs < 0) {
            throw new CoreError("The timeoutMs must be >= 0");
        }
        this._networkEndPoint = networkEndPoint;
        this._timeoutMs = timeoutMs;
        this._httpClientRequest = httpClientRequest || http.request;
    }

    /**
     * Get data asynchronously.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    public async get(additionalHeaders?: { [header: string]: string }): Promise<string> {
        return this.doRequest("GET", undefined, additionalHeaders);
    }

    /**
     * Post data asynchronously.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    public async post(data: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
        return this.doRequest("POST", data, additionalHeaders);
    }

    /**
     * Get data asynchronously.
     * @typeparam U The generic type for the returned object.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    public async getJson<U>(additionalHeaders?: { [header: string]: string }): Promise<U> {
        return this.doRequest("GET", undefined, additionalHeaders)
            .then((responseData) => {
                try {
                    const response = JSON.parse(responseData);
                    return <U>response;
                } catch (err) {
                    throw(new CoreError("Failed GET request, unable to parse response", {
                        endPoint: this._networkEndPoint.getUri(),
                        response: responseData
                    }));
                }
            });
    }

    /**
     * Post data asynchronously.
     * @typeparam T The generic type for the object to send.
     * @typeparam U The generic type for the returned object.
     * @param data The data to send.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    public async postJson<T, U>(data: T, additionalHeaders?: { [header: string]: string }): Promise<U> {
        const headers = additionalHeaders || {};
        headers["Content-Type"] = "application/json";

        return this.doRequest("POST", JSON.stringify(data), headers)
            .then((responseData) => {
                try {
                    const response = JSON.parse(responseData);
                    return <U>response;
                } catch (err) {
                    throw(new CoreError("Failed POST request, unable to parse response", {
                        endPoint: this._networkEndPoint.getUri(),
                        response: responseData
                    }));
                }
            });
    }

    /* @internal */
    private async doRequest(method: string, data: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const headers = additionalHeaders || {};

            const options: http.RequestOptions = {
                protocol: this._networkEndPoint.getProtocol(),
                hostname: this._networkEndPoint.getHost(),
                port: this._networkEndPoint.getPort(),
                path: this._networkEndPoint.getPath(),
                method: method,
                headers
            };

            if (this._timeoutMs > 0) {
                options.timeout = this._timeoutMs;
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
                    } else {
                        reject(new CoreError(`Failed ${method} request`, {
                            endPoint: this._networkEndPoint.getUri(),
                            httpStatusCode: res.statusCode,
                            response: responseData
                        }));
                    }
                });
            });
            req.on("error", (err) => {
                reject(new CoreError(`Failed ${method} request`, {
                    endPoint: this._networkEndPoint.getUri(),
                    httpError: err
                }));
            });
            req.on("timeout", (err) => {
                reject(new CoreError(`Failed ${method} request, timed out`, {
                    endPoint: this._networkEndPoint.getUri()
                }));
            });
            if (data !== undefined && data !== null) {
                req.write(data);
            }
            req.end();
        });
    }
}
