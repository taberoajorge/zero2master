import { retornaArreglo, usState } from '../../base/07-deses-arr';

describe('Purebas en desectruturacion', () => {
  test('should return string and number', () => {

    // const arr = retornaArreglo();
    const [letters, numbers] = retornaArreglo();

    // expect(arr).toEqual(['ABC', 123]);

    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');
    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');



  })
})