import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from '../components/Homepage';

test('renders learn react link', () => {
  render(<Homepage />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
