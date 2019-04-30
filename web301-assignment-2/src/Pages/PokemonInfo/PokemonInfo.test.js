import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, mount } from "enzyme";
import PokemonInfo from "./pokemonInfo";

import MockAdapter from 'axios-mock-adapter';

import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });


describe('PokemonInfo Component Tests', () => {
    it('renders without crashing', () => {
        const match = {
            params : { 
                        baseId : 1,
                     }
           }  

        const pokemonInfoComponent = shallow(<PokemonInfo match={match}/>);
        expect(pokemonInfoComponent.length).toBe(1);
    });
    it('axios call', () => {
        let mock = new MockAdapter(axios);
        mock.onGet('https://pokeapi.co/api/v2/pokemon/?limit=151').reply(200);
    });
});