


const nombre = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;



function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre;
}

export default getSaludo;