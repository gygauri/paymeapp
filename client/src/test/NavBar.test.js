import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom/extend-expect"


test('NavBar component', () => {
  let props = {
    type: 'dashboard'
  }
  render(<BrowserRouter><NavBar {...props} /></BrowserRouter>);
  const accountIcon = screen.getByTestId('accountcircle');
  fireEvent.click(accountIcon);
  const logout = screen.getByTestId('logout');
  fireEvent.click(logout);
  const element = screen.getByAltText('sitelogo');
  expect(element).toBeInTheDocument();
});
