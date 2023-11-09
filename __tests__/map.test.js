import { firstGrownUp } from "../src/find";
import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
    // Please add test cases here
    test('halfNumbers test', () => {
        const arr = [5, 10, -22];
        const expected = [2.5, 5, -11];
        console.log(`The computed result: ${halfNumbers(arr)}`)
        expect(halfNumbers(arr)).toEqual(expected);
    });

    test('spliceNames test', () => {
        const arr = ['Joe', 'Amy', 'Peter'];
        const expected = ['Hello Joe', 'Hello Amy', 'Hello Peter'];
        expect(spliceNames(arr)).toEqual(expected);
    });

    test('addSerialNumber test', () => {
        const arr = ['orange', 'banana', 'apple'];
        const expected = ['1. orange', '2. banana', '3. apple'];
        expect(addSerialNumber(arr)).toEqual(expected);
    });
});
