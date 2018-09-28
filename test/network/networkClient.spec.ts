/**
 * Tests for NetworkClient.
 */
import { NetworkEndPoint } from "@iota-pico/core/dist/network/networkEndPoint";
import * as chai from "chai";
import * as http from "http";
import { NetworkClient } from "../../src/network/networkClient";

describe("NetworkClient", () => {
    let httpClientRequestMock: (options: http.RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void) => http.ClientRequest;
    let responseText: string;
    let statusCode: number;
    let callBacks: { [name: string]: (data: any) => {} } = {};
    let requestOptions: http.RequestOptions;
    let triggerTimeout: boolean;

    beforeEach(() => {
        callBacks = {};
        statusCode = 200;
        triggerTimeout = false;

        httpClientRequestMock = (options: http.RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void) => {
            requestOptions = options;
            const responseObject = {
                setEncoding: () => { },
                on: (name: string, cb2: (data: any) => {}) => {
                    callBacks[name] = cb2;
                },
                statusCode: 0
            };
            callback(responseObject);

            return {
                on: (name: string, cb2: (data: any) => {}) => {
                    callBacks[name] = cb2;
                },
                write: () => {
                },
                end: () => {
                    if (triggerTimeout) {
                        if (callBacks.timeout) {
                            setTimeout(
                                () => {
                                    callBacks.timeout("err!");
                                },
                                10);
                        }
                    }
                    if (responseText === null) {
                        if (callBacks.error) {
                            setTimeout(
                                () => {
                                    callBacks.error("err!");
                                },
                                10);
                        }
                    } else {
                        if (callBacks.data) {
                            setTimeout(
                                () => {
                                    callBacks.data(responseText);
                                },
                                1);
                        }
                    }

                    if (callBacks.end) {
                        setTimeout(
                            () => {
                                responseObject.statusCode = statusCode;
                                callBacks.end(responseText);
                            },
                            10);
                    }
                }
            };
        };
    });

    it("can be created", () => {
        const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
        chai.should().exist(obj);
    });

    it("can be created with http", () => {
        const obj = new NetworkClient(new NetworkEndPoint("https", "localhost", 14265), undefined, 0);
        chai.should().exist(obj);
    });

    it("can fail to create with no endpoint", () => {
        chai.expect(() => new NetworkClient(undefined)).to.throw("must be defined");
    });

    it("can fail to create with invalid timeout", () => {
        chai.expect(() => new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, -1)).to.throw(">= 0");
    });

    describe("get", () => {
        it("can get data", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = "foo";
            const ret = await obj.get();
            chai.expect(ret).to.be.equal("foo");
        });

        it("can get data with headers", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = "foo";
            const ret = await obj.get(undefined, undefined, { bar: "123" });
            chai.expect(ret).to.be.equal("foo");
            chai.expect(requestOptions.headers.bar).to.be.equal("123");
        });

        it("can fail during send", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = null;
            try {
                await obj.get(undefined, undefined, { bar: "123" });
                chai.assert("should not be here");
            } catch (err) {
                chai.expect(err.message).to.contain("Failed GET request");
            }
        });

        it("can fail to with invalid response", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            statusCode = 404;
            try {
                await obj.get();
                chai.assert("should not be here");
            } catch (err) {
                chai.expect(err.message).to.contain("Failed GET request");
            }
        });

        it("can timeout", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 1, httpClientRequestMock);
            try {
                triggerTimeout = true;
                await obj.get();
                chai.assert("should not be here");
            } catch (err) {
                chai.expect(err.message).to.contain("timed out");
            }
        });

        it("can get with additional path", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265, "//pop//"), undefined, 0, httpClientRequestMock);
            responseText = "foo";
            await obj.get(undefined, "////path", { bar: "123" });
            chai.expect(requestOptions.path).to.contain("pop/path");
        });

        it("can get with empty parameters", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265, "//pop//"), undefined, 0, httpClientRequestMock);
            responseText = "foo";
            await obj.get({});
            chai.expect(requestOptions.path).to.be.equal("pop");
        });

        it("can get with parameters", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265, "//pop//"), undefined, 0, httpClientRequestMock);
            responseText = "foo";
            await obj.get({
                "a param": 2,
                "b param": true,
                "c param": null
            });
            chai.expect(requestOptions.path).to.be.equal("pop?a%20param=2&b%20param=true&c%20param=");
        });
    });

    describe("post", () => {
        it("can post data", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = "foo";
            const ret = await obj.post("blah");
            chai.expect(ret).to.be.equal("foo");
        });

        it("can post data with headers", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = "foo";
            const ret = await obj.post("blah", undefined, { bar: "123" });
            chai.expect(ret).to.be.equal("foo");
            chai.expect(requestOptions.headers.bar).to.be.equal("123");
        });

        it("can fail during send", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = null;
            try {
                await obj.post("blah", undefined, { bar: "123" });
                chai.assert("should not be here");
            } catch (err) {
                chai.expect(err.message).to.contain("Failed POST request");
            }
        });

        it("can fail to with invalid response", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            statusCode = 404;
            try {
                await obj.post("blah");
                chai.assert("should not be here");
            } catch (err) {
                chai.expect(err.message).to.contain("Failed POST request");
            }
        });
    });

    describe("json", () => {
        it("can get data", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = "{ \"foo\": 123 }";
            const ret = await obj.json(undefined, "GET");
            chai.expect(ret).to.be.deep.equal({ foo: 123 });
        });

        it("can fail when JSON.parse fails", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = "!";
            try {
                await obj.json(undefined, "GET");
                chai.assert("should not be here");
            } catch (err) {
                chai.expect(err.message).to.contain("Failed GET request, unable to parse response");
            }
        });
    });

    describe("json", () => {
        it("can post data", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = "{ \"foo\": 123 }";
            const ret = await obj.json({ bar: true }, "POST");
            chai.expect(ret).to.be.deep.equal({ foo: 123 });
            chai.expect(requestOptions.headers["Content-Type"]).to.be.equal("application/json");
        });

        it("can fail when JSON.parse fails", async () => {
            const obj = new NetworkClient(new NetworkEndPoint("http", "localhost", 14265), undefined, 0, httpClientRequestMock);
            responseText = "!";
            try {
                await obj.json({ bar: true }, "POST");
                chai.assert("should not be here");
            } catch (err) {
                chai.expect(err.message).to.contain("Failed POST request, unable to parse response");
            }
        });
    });
});
