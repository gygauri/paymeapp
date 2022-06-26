import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../components/Footer';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

window.open = jest.fn();

test('Footer component', () => {
  render(<BrowserRouter><Footer /></BrowserRouter>);
  const element = screen.getByText(/Company/);
  expect(element).toBeInTheDocument();
  const facebookElement = screen.getByAltText('facebook');
  fireEvent.click(facebookElement);
  const twitterElement = screen.getByAltText('twitter');
  fireEvent.click(twitterElement);
  const instaElement = screen.getByAltText('instagram');
  fireEvent.click(instaElement);
  const linkedinElement = screen.getByAltText('linkedin');
  fireEvent.click(linkedinElement);
});
