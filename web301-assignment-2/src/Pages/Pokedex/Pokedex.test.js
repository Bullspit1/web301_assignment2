import React from "react";
import { shallow, mount } from "enzyme";
import Pokedex from "./pokedex";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Pokedex Component Tests', () => {
    it('renders without crashing', () => {
        const pokedexComponent = shallow(<Pokedex posts={[]}/>);
        // console.log(pokedexComponent);
        expect(pokedexComponent.length).toBe(1);
    });
    it('passes the amount of pokemon', () => {
        const pokedexComponent = shallow(<Pokedex posts={[]}/>);
        console.log(pokedexComponent.find('a').length);
    });
});