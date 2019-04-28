import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, mount } from "enzyme";
import PokemonInfo from "./pokemonInfo";

import MockAdapter from 'axios-mock-adapter';

import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });


describe('PokemonInfo Component Tests', () => {
    // it('renders without crashing', () => {
    //     const pokemonInfoComponent = shallow(<PokemonInfo />);
    //     console.log(pokemonInfoComponent);
    //     // expect(pokedexComponent.length).toBe(1);
    // });
    // it('passes the amount of pokemon', () => {
    //     const pokedexComponent = shallow(<Pokedex posts={[]}/>);
    //     let mock = new MockAdapter(axios);
    //     console.log(pokedexComponent.find('a').length);
    //     // mock.onGet('https://pokeapi.co/api/v2/pokemon/?limit=151').reply(200);
    //     // console.log(mock.onGet('https://pokeapi.co/api/v2/pokemon/?limit=151'));
    //     // expect(pokedexComponent.length).toBe(1);
    // });
    // it('renders children passed via props', () => {
    //     pokedexComponent.setProps({
    //         children: 'Hello World',
    //     });
    //     expect(pokedexComponent.text()).toBe('Hello World');
    // });
});