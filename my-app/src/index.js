const person = {
  name: "Jorge",
  lastname: "Taberoa",
  age: 21,
  address: {
    city: 'El Tigre',
    zp: 6060,
    lat: -14.323,
    lng: 34.124,
  }
};

// console.table(person);
console.log(person);

/* Esto no lo sabia, esa asignacion no es un 
un objeto nuevo, es una referencia al objeto
principal, por lo que si modifico person2
Se va a modificar el valor de person*/
const person2 = person;
// person2.name = 'Chale';

// Esto se evita creando un nuevo objeto y usando el spread operator
const person3 = {...person};
person3.name = 'Chale';


console.log(person3);