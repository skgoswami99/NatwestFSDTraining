import { render, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import { act } from 'react-dom/test-utils';
import Header from './Header/Header';
import { BrowserRouter } from "react-router-dom";

describe('Testing React App', () => {

  let element;
  beforeEach(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
    element = null;
  });

  test('Should have Contact Manager text in Header Component', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    expect(screen.getByText('Contact Manager')).toBeInTheDocument();
  });

  test('Should have navbar-brand class in navbar', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    expect(screen.getByTestId('brandname')).toHaveClass('navbar-brand');
  });

  test('Should have 5 links in header component', () => {
    act(() => {
      createRoot(element).render(<BrowserRouter><Header /></BrowserRouter>);
    });
    const count = element.querySelectorAll('a').length;
    expect(count).toBe(5);
  });

  test('Should have nav-link class on all hyperlinks of header component', () => {
    act(() => {
      createRoot(element).render(<BrowserRouter><Header /></BrowserRouter>);
    });
    const links = element.querySelectorAll('a');
    for (let i = 1; i < links.length; i++) {
      expect(links[i]).toHaveClass('nav-link');
    }
  });

});