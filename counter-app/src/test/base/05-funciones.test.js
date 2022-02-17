import { getUser, getUsuarioActivo, saludar2, saludar3, saludar4 } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('should getUser debe de retornar un objeto', () => {

    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect(user).toEqual(userTest);

  })

  test('should return object', () => {

    const testObject = {
      uid: 'ABC567',
      username: 'name'
    };

    const testName = 'name'

    const user = getUsuarioActivo(testName);

    expect(user).toEqual(testObject);


  })
})