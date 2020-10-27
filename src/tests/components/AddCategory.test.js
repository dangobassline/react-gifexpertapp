import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import {AddCategory} from '../../components/AddCategory'


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />);
    });

    test('should de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', {target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la información con Submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Mundo';
        //1.. Simular el inputChange
        wrapper.find('input').simulate('change', {target: {value}});
        //2.. Simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //3.. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1); //si se llamo solo 1 vez
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //comprobar si es funcion
        //4.. el valor del input debe de esta ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });

});
