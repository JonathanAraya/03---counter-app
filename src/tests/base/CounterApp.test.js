import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import CounterApp from "../../CounterApp";

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);;

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar valor por defecto 0', () => {
        
        const wrapper = shallow(<CounterApp value={0}/>);
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('0');
    });

    test('Debe incrementar contador con +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '11' );

    });

    test('Debe restar contador con -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '9' );

    });

    test('Debe colocar el valor por defecto con el boton reset', () => {
        
        const wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        
        expect (counterText).toBe('105');

    });
    
    
})
