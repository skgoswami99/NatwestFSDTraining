import Footer from '../Components/footer/Footer';
import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
// please add your test cases here


describe("Testing Footer App",()=>{

  let element;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    afterEach(() => {

        document.body.removeChild(element);
        element = null;

    })

  test("Should have a text with name Footer",()=>{

    render (<Footer/>)
    expect(screen.getByText('Footer')).toBeInTheDocument();

  })


  test("Should have a classname in Footer Component",()=>{

    render(<Footer/>);
    expect(screen.getByTestId('testcontent')).toHaveClass('text-center');
    
  })

  test("Should have 2 div tags in footer ", () => {

    act(()=>{
        createRoot(element).render(<Footer/>);
    });
    
    const count = element.getElementsByTagName('div').length
    expect(count).toBe(2)

})
test("Should have 2 div tags in footer ", () => {

    act(()=>{
        createRoot(element).render(<Footer/>);
    });
    
    const count = element.getElementsByTagName('h2').length
    expect(count).toBe(1)
  })

  test("Should have a text with name end of page",()=>{

    render (<Footer/>)
    expect(screen.getByText('End of Page')).toBeInTheDocument();

  })

})


export default Footer;