import heroes from "../../../../my-app/src/data/heros";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe('Metodos de array con heroes', () => {

  test('should return a obj with hero', () => {

    const id = 1;
    const hero = getHeroeById(id);
    const data = heroes.find(h => h.id === id);
    expect(hero).toEqual(data)
  })
  test('should return to cause tat it not found', () => {

    const id = 10;
    const hero = getHeroeById(id);
    expect(hero).toBe(undefined)
  })

  test('should return an array with heroes', () => {

    const owner = 'DC';
    const heros = getHeroesByOwner(owner);
    const data = heros.filter((h) => h.owner === owner)

    expect(heros).toEqual(data)
  })

  test('legth of the array should be two ', () => {
    const owner = 'Marvel';
    const heros = getHeroesByOwner(owner);
    expect(heros.length).toBe(2)
  })

})