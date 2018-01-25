/**
 * Tests for NodeJsNetworkClient.
 */
import { NetworkEndPoint } from "@iota-pico/core/dist/network/networkEndPoint";
import * as chai from "chai";
import { NodeJsNetworkClient } from "../../src/network/nodeJsNetworkClient";

describe("NodeJsNetworkClient", () => {
    it("can be created", () => {
        const obj = new NodeJsNetworkClient(new NetworkEndPoint("http", "localhost", undefined, 14265));
        chai.should().exist(obj);
    });
});
