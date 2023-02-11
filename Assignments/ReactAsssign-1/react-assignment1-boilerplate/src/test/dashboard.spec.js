import Dashboard from '../Components/dashboard/Dashboard'
import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';

// please add your test cases here

describe("Testing Dashboard App",()=>{

  let element;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    afterEach(() => {

        document.body.removeChild(element);
        element = null;

    })

  
  test("must have a test id test1 with class text-center", () => {

    render (<Dashboard/>)
    expect(screen.getByTestId("test1")).toHaveClass('text-center');

  })

  test("Should have 3 tags with classname-nlink", () => {

    act(()=>{
        createRoot(element).render(<Dashboard/>);
    });
    
    const count = element.querySelectorAll('.nlink').length
    expect(count).toBe(3)
  })

  test("Dashboard must have an h2 tag for an heading for news", () => {

    act(()=>{
        createRoot(element).render(<Dashboard/>);
    });
    
    const count = element.getElementsByTagName('h2').length
    expect(count).toBe(1)
  })

  test("Should have a text Sports in the Dashboard", () => {

    render(<Dashboard/>)
    expect(screen.getByText('Sports')).toBeInTheDocument();

  })

  test("Should have a Placeholder with text Search for the search button", () => {

    render(<Dashboard/>)
    expect(screen.getByPlaceholderText('Search')).not.toBeRequired();

  })
})

export default Dashboard;