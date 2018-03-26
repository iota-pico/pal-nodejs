/**
 * Tests for RngService.
 */
import * as chai from "chai";
import { RngService } from "../../src/services/rngService";

describe("RngService", () => {
    it("can be created", () => {
        const obj = new RngService();
        chai.should().exist(obj);
    });

    describe("generate", () => {
        it("can generate random number", () => {
            const obj = new RngService();
            const res = obj.generate(10);
            chai.expect(res.length).to.equal(10);
        });
    });
});
