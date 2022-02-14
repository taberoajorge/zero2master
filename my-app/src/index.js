import {heroes} from "./data/heros";

const heroe = (id) => {
  return heroes.find((item) => id === item.id);
};

const moviesPerOwner = (owner) => heroes.filter((item)=> item.owner === owner)

console.log(heroe(5));
console.log(moviesPerOwner('DC'));
