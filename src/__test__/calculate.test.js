import calculate from '../logic/Calculate';

describe('calculate does calculations properly', () => {
  const obj = {
    total: 'error',
    next: null,
    operation: null,
  };

  test('should return null value when button is AC', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('should return empty object ', () => {
    const newObj = {
      total: 0,
      next: '0',
      operation: null,
    };

    expect(calculate(newObj, String(0))).toEqual({});
  });

  test('should update next if operation is true', () => {
    const obj = {
      total: 0,
      next: 3,
      operation: null,
    };
    const result = calculate(obj, '3');
    expect(result.next).toEqual('33');
  });

  test('should return a total if there is next and the operation is addition', () => {
    const obj = {
      total: 0,
      next: '22',
      operation: '+',
    };

    expect(calculate(obj, '=').total).toEqual('22');
  });
  test('should return a subtraction result if there is next and the operation is subtraction', () => {
    const obj = {
      total: 0,
      next: '22',
      operation: '-',
    };

    expect(calculate(obj, '=').total).toEqual('-22');
  });
});
