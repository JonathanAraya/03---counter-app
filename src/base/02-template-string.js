
const nombre   = 'Jonathan';
const apellido = 'Araya';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;


export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre + '!';
}