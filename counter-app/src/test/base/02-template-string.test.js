import getSaludo from "../../base/02-template-string";

describe('Pruebas 02-template-strings.js', () => {

  test('should return "hola name"', () => {
    const name = "Fernando";
    const greeting = getSaludo(name);
    console.log(greeting);
    expect(greeting).toBe(`Hola ${name}`);

  })

  // getsaludo debe de retornar hola carlos si no hay argumento

  test('should "hola carlos"', () => {
    const greeting = getSaludo();
    console.log(greeting);
    expect(greeting).toBe(`Hola Carlos`);

  })

})