import HeaderComponent from '../components/HeaderComponent';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test('Header renders Logo component', () => {
    const wrapper = shallow(<HeaderComponent />)
    const logs = wrapper.find('ViewTitleComponent')
    expect(logs.length).toEqual(1)
});