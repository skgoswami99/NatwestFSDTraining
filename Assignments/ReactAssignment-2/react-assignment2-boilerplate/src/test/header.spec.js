import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';

import Header from '../Components/header/Header'
import {BrowserRouter as Router} from 'react-router-dom';
// please add your test cases here

describe("Testing Header Component", () => {

    let element;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    afterEach(() => {

        document.body.removeChild(element);
        element = null;

    })

    test("Should have a text NEWS-Manager in the Header", () => {

        render(<Router><Header/></Router>)
        expect(screen.getByText("NEWS-Manager")).toBeInTheDocument();

    })

    
    test("Should have 1 tag with classname-nlink in Header component", () => {

        act(()=>{
            createRoot(element).render(<Router><Header/></Router>);
        });
        
        const count = element.querySelectorAll('.nlink').length
        expect(count).toBe(1)
    })

    test("Should have 2 Button with classname but1 for search button", () => {

        act(()=>{
            createRoot(element).render(<Router><Header/></Router>);
        });
        
        const count = element.querySelectorAll('.but1').length
        expect(count).toBe(2)
    })

    test("Should have a text Login in the Header for login button", () => {

        render(<Router><Header/></Router>)
        expect(screen.getByText('Login')).toBeInTheDocument();

    })

    test("Should have a text Register in the Header for Register button", () => {

        render(<Router><Header/></Router>)
        expect(screen.getByText('Register')).toBeInTheDocument();

    })
    
    
})

export default Header;