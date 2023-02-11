import Dashboard from '../Components/dashboard/Dashboard'
import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';

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

    render (<Router><Dashboard/></Router>)
    expect(screen.getByTestId("test1")).toHaveClass('text-center');

  })

  test("Should have 3 tags with classname-nlink", () => {

    act(()=>{
        createRoot(element).render(<Router><Dashboard/></Router>);
    });
    
    const count = element.querySelectorAll('.nlink').length
    expect(count).toBe(2)
  })

  test("Dashboard must have an h2 tag for an heading for news", () => {

    act(()=>{
        createRoot(element).render(<Router><Dashboard/></Router>);
    });
    
    const count = element.getElementsByTagName('h2').length
    expect(count).toBe(1)
  })

  test("Should have a text Sports News in the Dashboard", () => {

    render(<Router><Dashboard/></Router>)
    expect(screen.getByText('Sports News')).toBeInTheDocument();

  })

  test("Should have a Placeholder with text Search News for the search button", () => {

    render(<Router><Dashboard/></Router>)
    expect(screen.getByPlaceholderText('Search News')).not.toBeRequired();

  })
})

export default Dashboard;