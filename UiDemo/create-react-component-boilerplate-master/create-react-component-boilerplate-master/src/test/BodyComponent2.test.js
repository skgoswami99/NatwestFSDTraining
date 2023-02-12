import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import BodyComponent from '../components/BodyComponent';

configure({adapter: new Adapter()});

test('Body renders BodyRight component', () => {
    const wrapper = shallow(<BodyComponent />)
    const logs = wrapper.find('BodyRightComponent')
    expect(logs.length).toEqual(1)
});