import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones de heroes', () => {
  
    test('Debe retornar un heroe segun id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h  => h.id === id);

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });
    
    test('Debe retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC'
        const heroesDC = getHeroesByOwner(owner);

        expect( heroesDC ).toEqual( heroes.filter(h => h.owner === owner) );

    });

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel'
        const heroesMarvel = getHeroesByOwner(owner);

        expect( heroesMarvel.length ).toBe( heroes.filter(h => h.owner === owner).length );

    });
    
    test('Debe retornar un arreglo vacío si owner no existe', () => {
        
        const owner = 'ASD'
        const heroesEmpty = getHeroesByOwner(owner);

        expect( heroesEmpty ).toEqual( [] );

    });
    

})
