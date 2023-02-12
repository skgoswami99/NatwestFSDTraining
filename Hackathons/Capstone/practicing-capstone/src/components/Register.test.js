
import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import Register from './Register';

// please add your test cases here

describe("Testing Register App",()=>{

  let element;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    afterEach(() => {

        document.body.removeChild(element);
        element = null;

    })

  
  test("Should have a text Register for Go-Pay in the page", () => {

    render(<Router><Register/></Router>)
    expect(screen.getByText('Register for Go-Pay')).toBeInTheDocument();

  })

  test("Should have a Placeholder with text First Name for the First Name field", () => {

    render(<Router><Register/></Router>)
    expect(screen.getByPlaceholderText('First Name*')).not.toBeRequired();

  })

  test("Should have a Placeholder with text password for the First Name field", () => {

    render(<Router><Register/></Router>)
    expect(screen.getByPlaceholderText('Password*')).not.toBeRequired();

  })
})

export default Register;