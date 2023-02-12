import Header from '../Components/header/Header';
// please add your test cases here
import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';

// please add your test cases here

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



it('Test 1 :Header Renders',() => {
    act(() => {
        render(<Header />,container);
        
    })
})

it('Test 2 : Header Unit Tests',() => {
    act(() => {
        render(<Header />,container);
        let link = document.getElementsByTagName("AppBar")
        expect(link.length).toBe(0)
    })
})

it('Test 3 :Header Unit Tests',() => {
    act(() => {
        render(<Header />,container);
        let link = document.getElementsByTagName("Toolbar")
        expect(link.length).toBe(0)
    })
})

it('Test 4 : Header Unit Tests',() => {
    act(() => {
        render(<Header />,container);
        let link = document.getElementsByTagName("IconButton")
        expect(link.length).toBe(0)
    })
})
it('Test 5 :Header Unit Tests',() => {
    act(() => {
        render(<Header />,container);
        let link = document.getElementsByTagName("Typography")
        expect(link.length).toBe(0)
    })
})



export default Header;