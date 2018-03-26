import { IRngService } from "@iota-pico/core/dist/interfaces/IRngService";
import * as crypto from "crypto";

/**
 * Implementation of random number generation service.
 */
export class RngService implements IRngService {
    /**
     * Generate an array of random numbers.
     * @param length The number of numbers to generate.
     * @returns Array of random number generators.
     */
    public generate(length: number): Uint8Array {
        return new Uint8Array(crypto.randomBytes(length));
    }
}
