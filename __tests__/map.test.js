import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
    // Please add test cases here
    test('firstGrownUp test', () => {
        const arr = [5, 10, -22];
        const expected = [2.5, 5, -11];
        expect(halfNumbers(arr)).toBe(expected);
    });

    test('firstOrange test', () => {
        const arr = ['Joe', 'Amy', 'Peter'];
        const expected = ['Hello Joe', 'Hello Amy', 'Hello Peter'];
        expect(spliceNames(arr)).toBe(expected);
    });

    test('firstLengthOver5Name test', () => {
        const arr = ['orange', 'banana', 'apple'];
        const expected = ['1. orange', '2. banana', '3. apple'];
        expect(addSerialNumber(arr)).toBe(expected);
    });
});
