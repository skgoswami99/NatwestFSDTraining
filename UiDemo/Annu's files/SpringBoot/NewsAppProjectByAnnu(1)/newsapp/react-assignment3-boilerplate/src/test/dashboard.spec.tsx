import Dashboard from '../Components/dashboad/Dashboard';

import NoteCard from '../Components/card/NoteCard';
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

it('Test 1 :Dashboard Renders',() => {
    act(() => {
        render(<Dashboard />,container);
        
    })
})

it('Test 2 :Dashboard Button Text box',() => {
    act(() => {
        render(<Dashboard />,container);
       
        const db = container.querySelector('#dashBoard');
        expect(db.id).toBe('dashBoard');
    })
})



export default Dashboard;