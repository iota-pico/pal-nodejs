import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { StringHelper } from "@iota-pico/core/dist/helpers/stringHelper";
import { ILogger } from "@iota-pico/core/dist/interfaces/ILogger";
import { INetworkClient } from "@iota-pico/core/dist/interfaces/INetworkClient";
import { INetworkEndPoint } from "@iota-pico/core/dist/interfaces/INetworkEndPoint";
import { NullLogger } from "@iota-pico/core/dist/loggers/nullLogger";
import * as http from "http";
import * as https from "https";

/**
 * Implementation of a node client for use in NodeJS.
 * @interface
 */
export class NetworkClient implements INetworkClient {
    /* @internal */
    private readonly _networkEndPoint: INetworkEndPoint;
    /* @internal */
    private readonly _logger: ILogger;
    /* @internal */
    private readonly _timeoutMs: number;

    /* @internal */
    private readonly _httpClientRequest: (options: http.RequestOptions | https.RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void) => http.ClientRequest;

    /**
     * Create an instance of NetworkClient.
     * @param networkEndPoint The endpoint to use for the client.
     * @param logger Logger to send communication info to.
     * @param timeoutMs The timeout in ms before aborting.
     */
    constructor(networkEndPoint: INetworkEndPoint, logger?: ILogger, timeoutMs: number = 0,
                httpClientRequest?: (options: http.RequestOptions | https.RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void) => http.ClientRequest) {
        if (ObjectHelper.isEmpty(networkEndPoint)) {
            throw new CoreError("The networkEndPoint must be defined");
        }
        if (!NumberHelper.isInteger(timeoutMs) || timeoutMs < 0) {
            throw new CoreError("The timeoutMs must be >= 0");
        }
        this._networkEndPoint = networkEndPoint;
        this._timeoutMs = timeoutMs;
        this._logger = logger || new NullLogger();
        this._httpClientRequest = httpClientRequest || (networkEndPoint.getProtocol() === "http" ? http.request : https.request);

        this._logger.banner("Network Client", { endPoint: this._networkEndPoint });
    }

    /**
     * Get data asynchronously.
     * @param additionalPath An additional path append to the endpoint path.
     * @param additionalHeaders Extra headers to send with the request.
     * @returns Promise which resolves to the object returned or rejects with error.
     */
    public async get(additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
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
    public async post(data: string, additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
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
    public async getJson<U>(additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<U> {
        this._logger.info("===> GET Send");
        return this.doRequest("GET", undefined, additionalPath, additionalHeaders)
            .then((responseData) => {
                try {
                    const response = JSON.parse(responseData);
                    this._logger.info("===> GET Received", response);
                    return <U>response;
                } catch (err) {
                    this._logger.info("===> GET Parse Failed", responseData);
                    throw(new CoreError("Failed GET request, unable to parse response", {
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
    public async postJson<T, U>(data: T, additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<U> {
        this._logger.info("===> POST Send");

        const headers = additionalHeaders || {};
        headers["Content-Type"] = "application/json";

        return this.doRequest("POST", JSON.stringify(data), additionalPath, headers)
            .then((responseData) => {
                try {
                    const response = JSON.parse(responseData);
                    this._logger.info("===> POST Received", response);
                    return <U>response;
                } catch (err) {
                    this._logger.info("===> GET Parse Failed", responseData);
                    throw(new CoreError("Failed POST request, unable to parse response", {
                        endPoint: this._networkEndPoint.getUri(),
                        response: responseData
                    }));
                }
            });
    }

    /* @internal */
    private async doRequest(method: string, data: string, additionalPath?: string, additionalHeaders?: { [header: string]: string }): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const headers = additionalHeaders || {};

            let uri = this._networkEndPoint.getUri();
            let path = this._networkEndPoint.getPath();
            if (!StringHelper.isEmpty(additionalPath)) {
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
                    } else {
                        this._logger.error("<=== Received Fail", { code: res.statusCode, data: responseData });
                        reject(new CoreError(`Failed ${method} request`, {
                            endPoint: uri,
                            errorResponseCode: res.statusCode,
                            errorResponse: responseData || res.statusMessage
                        }));
                    }
                });
            });
            req.on("error", (err) => {
                this._logger.error("<=== Errored");

                reject(new CoreError(`Failed ${method} request`, {
                    endPoint: uri,
                    errorResponse: err
                }));
            });
            req.on("timeout", (err) => {
                this._logger.error("<=== Timed Out");

                reject(new CoreError(`Failed ${method} request, timed out`, {
                    endPoint: uri
                }));
            });
            if (!ObjectHelper.isEmpty(data)) {
                req.write(data);
            }
            req.end();
        });
    }
}
