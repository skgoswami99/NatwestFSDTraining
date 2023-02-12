
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import Header from "../Header/Header"

describe("Testing Header Component",()=>{

    let element;

    beforeEach(()=>{
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    afterEach(()=>{

        document.body.removeChild(element);
        element=null;
    
    })
    

  test("Should have Contact Manager text in the Header Component",()=>{

    render(<Header />);
    expect(screen.getByText('Contact Manager')).toBeInTheDocument();

  })

  test("Should have the class navbar-brand in navbar",()=>{

    render(<Header />);
    expect(screen.getByTestId('brandname')).toHaveClass('navbar-brand');

  })


  test("Should have 5 anchor tag in the header component",()=>{

    act(()=>{
        createRoot(element).render(<Header/>);
    });

    const totcount = element.querySelectorAll('.linkpage').length;

    expect(totcount).toBe(4);

  })

  
test("All li tag should Should nav-item class",()=>{

    act(()=>{
        createRoot(element).render(<Header/>);
    });

    const linkdata = element.querySelectorAll('li');

    for(let i = 1; i < linkdata.length; i++)
    {
        expect(linkdata[i]).toHaveClass('nav-item');
    }
  })
})