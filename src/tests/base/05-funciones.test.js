import '@testing-library/jest-dom';
import { getUser , getUsuarioActivo} from "../../base/05-funciones"

describe('Pruebas en 05-Funciones', () => {
    
    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'Jonathan'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombreUsuarioActivo = 'Juan'
        const UserActivoTest = {
            uid: 'ABC567',
            username: nombreUsuarioActivo
        }

        const UserActivo = getUsuarioActivo(nombreUsuarioActivo)

        expect(UserActivo).toEqual(UserActivoTest);

    })
    
    

})
