
describe('Pruebas en el archivo demo.test.js', () => {

    test(' Strings deben ser iguales ', () => {
    
        //1. Init
        const mensaje = 'Hola Mundo';
        const mensaje2 = `Hola Mundo`;
    
        //3. Comportamiento
        expect( mensaje ).toBe( mensaje2 );
    
    })

});
    


