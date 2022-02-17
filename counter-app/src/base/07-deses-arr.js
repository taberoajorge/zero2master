

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();


const usState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = usState('Goku');

export { retornaArreglo, usState }




