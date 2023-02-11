import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';

import Header from "../Components/header/Header"
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

        render(<Header/>)
        expect(screen.getByText("NEWS-Manager")).toBeInTheDocument();

    })

    
    test("Should have 3 tags with classname-nlink in Header component", () => {

        act(()=>{
            createRoot(element).render(<Header/>);
        });
        
        const count = element.querySelectorAll('.nlink').length
        expect(count).toBe(3)
    })

    test("Should have 1 Button with classname but1 for search button", () => {

        act(()=>{
            createRoot(element).render(<Header/>);
        });
        
        const count = element.querySelectorAll('.but1').length
        expect(count).toBe(1)
    })

    test("Should have a Placeholder with text Search for the search button", () => {

        render(<Header />)
        expect(screen.getByPlaceholderText('Search')).not.toBeRequired();

    })
    

    test("Should have a text Sports in the Header", () => {

        render(<Header />)
        expect(screen.getByText('Sports')).toBeInTheDocument();

    })
    
    
})

export default Header;