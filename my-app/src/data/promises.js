import { heroe, moviesPerOwner } from './data/functions';

// const promise = new Promise( (resolve, reject) => {

//   setTimeout(() => {
//     const data = moviesPerOwner('DC');
//     resolve(data)
//   }, 3000);

// });

// promise
//   .then(data => console.log(data))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = heroe(id);
      data
        ? resolve(data)
        : reject('No se encontro el heroe')

    }, 3000);
  });
};

getHeroeByIdAsync(2)
  .then( console.log )
  .catch( console.warn )