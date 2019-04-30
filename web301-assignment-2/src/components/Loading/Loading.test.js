import React from "react";
import { shallow, mount } from "enzyme";
import Loading from "./loading";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Pokedex Component Tests', () => {
    it('renders without crashing', () => {
        const pokedexComponent = shallow(<Loading />);
        expect(pokedexComponent.length).toBe(1);
    });
});