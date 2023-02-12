import { render, screen } from '@testing-library/react';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

test('Header renders text', () => {
    render(<HeaderComponent />);
    const linkElement = screen.getByText(/I am Header Component!!/i);
    expect(linkElement).toBeInTheDocument();
});