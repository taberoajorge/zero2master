// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import heroes from '../../../my-app/src/data/heros';

// console.log( owners );




const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
;

// find?, filter
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );

export { getHeroeById, getHeroesByOwner };