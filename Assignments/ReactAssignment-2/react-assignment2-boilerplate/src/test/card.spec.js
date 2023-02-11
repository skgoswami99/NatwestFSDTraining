
import Card from '../Components/card/Card';
import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';

// please add your test cases here

describe("Testing Card App",()=>{

  let element;
  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
})

afterEach(() => {

    document.body.removeChild(element);
    element = null;

})
    test("Should have a text Read Later",()=>{
  
      render (<Card/>)
      expect(screen.getByText('Read Later')).toBeInTheDocument();
  
    })
  
    test("Should have 1 Button with classname read1 for readLater button", () => {

      act(()=>{
          createRoot(element).render(<Card/>);
      });
      
      const count = element.querySelectorAll('.read1').length
      expect(count).toBe(1)
  })

    test("Should have a title tag with classname title",()=>{
  
      act(()=>{
        createRoot(element).render(<Card/>);
    });
    
    const count = element.querySelectorAll('.title').length
    expect(count).toBe(1)
  
    })

    test("Card must have tag with test id cardbody", () => {

      render (<Card/>)     
      expect(screen.getByTestId('cardbody')).toBeInTheDocument()
      
    })

    test("Card Component must have an image tag with test id imgtag with class h-50", () => {

      render (<Card/>)     
      expect(screen.getByTestId('imgtag')).toHaveClass('h-50')
      
    })
  })

export default Card;