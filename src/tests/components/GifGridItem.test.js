import React from 'react';
//import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';


describe('Test of <GifGridItem />', () => {

    const title = 'Un Titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url}/> );


    test('should mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    });

    test('should de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('should de tener el animated__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBeTruthy();
    })


});