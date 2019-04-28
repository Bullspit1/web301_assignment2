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
    // console.log(div)
  });
});


describe('Axios Call', () => {
  // it('calls componentDidMount', () => {
  //   let mock = new MockAdapter(axios);
  //   const instance = appComponent.instance();
  //   console.log(jest.spyOn(instance, 'componentDidMount'));
  //   // expect(appComponent.componentDidMount)
  //   // console.log(jest.spyOn);
  //   // console.log(expect(appComponent))
  //   // console.log(jest.spyOn());
  //   // App.spy(Foo.prototype, 'componentDidMount');
  //   // const wrapper = mount(<Foo />);
  //   // expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
  // });
  // it('returns data when PokemonAPI is called', () => {
  //   let mock = new MockAdapter(axios);
  //   // console.log(mount)
  //     // expect(buttonComponent.length).toBe(1);
  //     // axios.get.mockResolvedValue(() => Promise.resolve({ posts: [] }));
  //    mock.onGet('https://pokeapi.co/api/v2/pokemon/?limit=151').reply(200);
  //     // axios.get.mockImplementation(() => Promise.resolve({ data: [] }));
  // });
  it('axois working', () => {
    let mock = new MockAdapter(axios);
    mock.onGet('https://pokeapi.co/api/v2/pokemon/?limit=151').reply(200);
    // mock.onGet('https://pokeapi.co/api/v2/pokemon/?limit=151').reply(200);
    // console.log(mock);
  });
});