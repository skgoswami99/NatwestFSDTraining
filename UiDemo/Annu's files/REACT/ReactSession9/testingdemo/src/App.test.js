
import { render, screen } from '@testing-library/react';
import Header from "./Header/Header"

describe("Testing React App",()=>{

  test("Should have Contact Manager text in the Header Component",()=>{

    render(<Header />);
    expect(screen.getByText('Contact Manager')).toBeInTheDocument();

  })
})

describe("Testing React App",()=>{

  test("Should have Contact Manager text in the Header Component",()=>{

    render(<Header />);
    expect(screen.getByText('Contact Manager')).toBeInTheDocument();

  })
})