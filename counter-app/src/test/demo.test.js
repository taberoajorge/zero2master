
describe('Pruebas en el archivo demo.test.js', () => {

  test('deben de ser iguales los strings', () => {

    const message = "Hola mundo";
    const message2 = "Hola mundo";

    expect(message).toBe(message2);

  })

})