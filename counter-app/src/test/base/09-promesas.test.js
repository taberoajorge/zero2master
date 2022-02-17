import heroes from "../../../../my-app/src/data/heros";
import getHeroeByIdAsync from "../../base/09-promesas";

describe('test with promises', () => {


  test('should return a heroe async', (done) => {

    const id = 1;

    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0]);
        done();
      })

  });

  test('should return a error if heroe by id don\'t exist', (done) => {

    const id = 10;

    getHeroeByIdAsync(id)
      .catch(error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      })

  });

})