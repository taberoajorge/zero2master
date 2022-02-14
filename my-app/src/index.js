// Funciones en JS

const greeting = (name) => `Hola, ${name}`;

console.log(greeting('Jorge'));

const userData = () => ({
  id: 1,
  username: 'taberoajorge',
})

console.log(userData());

// function getUserActive(name) {
//   return {
//     uid: 'ABC567',
//     username: name,
//   }
// };

// const activeUser = getUserActive('Taberoa')
// console.log(activeUser); 

const getUserActive = (name) => ({
  uid: 'ABC456',
  username: name,
})

const activeUser = getUserActive('Jorge');
console.log(activeUser);