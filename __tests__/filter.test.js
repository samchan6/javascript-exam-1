import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('filterEvenNumbers test', () => {
    // Please add test cases here
    test('With nonnegative numbers', () => {
        const arr = [11, 1000, -81, 99, 0, -72];
        const expected = [1000, 0, -72];
        expect(filterEvenNumbers(arr)).toBe(expected);
    });

    test('Edge case: empty input', () => {
        const arr = [];
        const expected = [];
        expect(filterEvenNumbers(arr)).toBe(expected);
    });

    test('Edge case: all odd numbers input', () => {
        const arr = [99, 3, -55, 7];
        const expected = [];
        expect(filterEvenNumbers(arr)).toBe(expected);
    });

});


describe('filterLengthWith4 test', () => {
    // Please add test cases here
    test('Normal case', () => {
        const arr = ['abc', 'fish', 'cat4', 'Troy', 'Heisenberg', 'aloe vera'];
        const expected = ['fish', 'cat4', 'Troy'];
        expect(filterLengthWith4(arr)).toBe(expected);
    });

    test('Edge case: empty input', () => {
        const arr = [];
        const expected = [];
        expect(filterLengthWith4(arr)).toBe(expected);
    });

    test('Edge case: no fulfilled', () => {
        const arr = ['abc', 'edmund', '77777', 'Heisenberg', 'aloe vera'];
        const expected = [];
        expect(filterLengthWith4(arr)).toBe(expected);
    });

});


describe('filterStartWithA test', () => {
    // Please add test cases here
    test('Normal case', () => {
        const arr = ['abc', 'fish', 'cat4', 'Troy', 'Heisenberg', 'aloe vera', 'Alvin'];
        const expected = ['abc', 'aloe vera'];
        expect(filterStartWithA(arr)).toBe(expected);
    });

    test('Edge case: empty input', () => {
        const arr = [];
        const expected = [];
        expect(filterStartWithA(arr)).toBe(expected);
    });

    test('Edge case: no fulfilled', () => {
        const arr = ['edmund', '77777', 'Heisenberg'];
        const expected = [];
        expect(filterStartWithA(arr)).toBe(expected);
    });

});