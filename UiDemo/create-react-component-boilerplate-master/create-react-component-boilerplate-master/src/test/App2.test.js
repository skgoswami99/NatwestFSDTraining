import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter()});

test('App renders Body component', () => {
    const wrapper = shallow(<App />)
    const logs = wrapper.find('BodyComponent')
    expect(logs.length).toEqual(1)
});