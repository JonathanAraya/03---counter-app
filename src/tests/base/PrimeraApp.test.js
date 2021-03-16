import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import PrimeraApp from "../../PrimeraApp";

describe('Pruebas en PrimeraApp>', () => {
    
    // test('Debe mostrar el mensaje "Hola, soy Jonathan"', () => {
        
    //     const saludo = 'Hola, soy Jonathan';

    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/>);

    //     expect( getByText(saludo) ).toBeInTheDocument();

    // });
    
    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola soy Jonathan';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola soy Jonathan';
        const subtitulo = 'Soy un Subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo = {subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subtitulo );

    })
    
})