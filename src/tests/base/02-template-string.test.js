import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe retornar Hola Jonathan!', () => {
        
        const nombre = 'Jonathan';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!' );

    })
    
    test('getSaludo debe retornar Hola Carlos! si nombre es vacío ', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!');

    })
    

})
