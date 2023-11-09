import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
    // Please add test cases here
    test('firstGrownUp test', () => {
        const arr = [7, 19, 18, 7, 55];
        const expected = 19;
        expect(firstGrownUp(arr)).toBe(expected);
    });

    test('firstOrange test', () => {
        const arr = ['orange', 'aloe vera', 'banana'];
        const expected = 'orange';
        expect(firstOrange(arr)).toBe(expected);
    });

    test('firstLengthOver5Name test', () => {
        const arr = ['John', 'Tay', 'Alfred'];
        const expected = 'Alfred';
        expect(firstLengthOver5Name(arr)).toBe(expected);
    });

});
