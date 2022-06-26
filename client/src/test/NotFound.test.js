import { render, screen, fireEvent } from '@testing-library/react';
import NotFound from '../components/NotFound';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

test('NotFound component', () => {
  render(<BrowserRouter><NotFound /></BrowserRouter>);
  const element = screen.getByText(/Oops!/);
  expect(element).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'))
});
