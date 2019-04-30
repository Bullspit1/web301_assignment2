import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// var MockAdapter = require('axios-mock-adapter');
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { shallow, mount } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// var axios = require('axios');

configure({ adapter: new Adapter() });

let appComponent;
beforeEach(() => {
    appComponent = shallow(<App></App>);
});

afterEach(() => {
    appComponent.unmount();
});

describe('App Renders Without Crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


describe('Axios Call', () => {
  it('axois working', () => {
    let mock = new MockAdapter(axios);
    mock.onGet('https://pokeapi.co/api/v2/pokemon/?limit=151').reply(200);
  });
});