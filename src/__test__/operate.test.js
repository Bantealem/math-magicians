import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import operate from '../logic/operate';

describe('The opretaion should return the exact value', () => {
    test('should return sum of the two number', () => {
        expect(operate(1, 2, '+')).toBe("3")
    });
    test('should return minus of the two number', () => {
        expect(operate(2, 1, '-')).toBe("1")
    });
    test('should return multiplcatio of the two number', () => {
        expect(operate(1, 2, 'x')).toBe("2")
    });
    test('should return division of the two number', () => {
        expect(operate(4, 2, '÷')).toBe("2")
    });
    test('should return modular of the two number', () => {
        expect(operate(100, 10, '%')).toBe("0")
    });

});
