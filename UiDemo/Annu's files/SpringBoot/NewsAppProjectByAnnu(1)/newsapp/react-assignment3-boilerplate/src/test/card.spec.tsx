
import Card from '../Components/card/NoteCard';


// please add your test cases here

import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import { act } from 'react-dom/test-utils';
import News from '../model/News';
// please add your test cases here
let newsObj = new News("urlToImage","title","author");
let container:any = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('Test 1 :NoteCard Renders',() => {
    act(() => {
        render(<Card newsObj = {newsObj}/>,container);
        
    })
})


it('Card has a button',() => {
    act(() => {
        render(<Card newsObj = {newsObj}/>,container);
        const button =  container.querySelector('button');
        expect(button.type).toBe('button')
    })
})
it('Card has a span inside button',() => {
    act(() => {
        render(<Card newsObj = {newsObj}/>,container);
        const span =  container.querySelector('span');
        expect(span.innerHTML).toBe('')
    })
})


export default Card;