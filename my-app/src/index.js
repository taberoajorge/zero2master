// Variables y constantes

const name = 'Jorge';
const lastname = 'Taberoa';

let gotValue = 5;
gotValue = 4;

console.log(name, lastname, gotValue);

// Don't use 'Var'...
if (true) {
  const name = 'Other name';
  console.log(name);
}

console.log(gotValue);