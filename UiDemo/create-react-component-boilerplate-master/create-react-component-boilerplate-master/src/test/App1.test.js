import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter()});

test('App renders Header component', () => {
    const wrapper = shallow(<App />)
    const logs = wrapper.find('HeaderComponent')
    expect(logs.length).toEqual(1)
});