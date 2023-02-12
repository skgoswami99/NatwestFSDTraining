import Footer from '../Components/footer/Footer';
// please add your test cases here
import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';

let container: any = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})



it('Test 1 :Footer Renders',() => {
    act(() => {
        render(<Footer />,container);
        
    })
})

it('Test 2 : Footer Unit Tests',() => {
    act(() => {
        render(<Footer />,container);
        let link = document.getElementsByClassName("typo")
        expect(link.length).toBe(1)
    })
})

it('Test 3 :Footer Unit Tests',() => {
    act(() => {
        render(<Footer />,container);
        let link = document.getElementsByClassName("toolBar")
        expect(link.length).toBe(1)
    })
})

it('Test 4 :Footer Unit Tests',() => {
    act(() => {
        render(<Footer />,container);
        let typo = document.getElementById("typo1").innerHTML;
        expect(typo).toBe('<p class=\"MuiTypography-root typo MuiTypography-body1\">stackroute@copyright</p>')
    })
})

it('Test 5 : Footer Unit Tests',() => {
    act(() => {
        render(<Footer />,container);
        let link = document.getElementsByClassName("typo").item.length
        expect(link).toBe(1)
    })
})


it('Test 4 :Footer Unit Tests',() => {
    act(() => {
        render(<Footer />,container);
        let typo = document.getElementById("typo1").className;
        expect(typo).toBe('MuiToolbar-root MuiToolbar-regular toolBar MuiToolbar-gutters')
    })
})
export default Footer;