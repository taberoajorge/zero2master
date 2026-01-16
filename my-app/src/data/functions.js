import { heroes } from "./heros";

const heroe = (id) => {
  return heroes.find((item) => id === item.id);
};

const moviesPerOwner = (owner) => heroes.filter((item) => item.owner === owner)

// export  { 
//   heroe,
//   moviesPerOwner 
// }; 