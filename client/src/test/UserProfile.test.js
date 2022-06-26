import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from '../components/UserProfile';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

test('UserProfile First Name component', () => {
  render(<BrowserRouter><UserProfile /></BrowserRouter>);
  const field = screen.getByTestId('firstName').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: 'Gauri' } });
  expect(field.value).toBe('Gauri');
});

test('UserProfile Last Name component', () => {
  render(<BrowserRouter><UserProfile /></BrowserRouter>);
  const field = screen.getByTestId('lastName').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: 'Yadav' } });
  expect(field.value).toBe('Yadav');
});

test('UserProfile Current org component', () => {
  render(<BrowserRouter><UserProfile /></BrowserRouter>);
  const field = screen.getByTestId('currentorg').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: 'SCB' } });
  expect(field.value).toBe('SCB');
});

test('UserProfile Email Address component', () => {
  render(<BrowserRouter><UserProfile /></BrowserRouter>);
  const field = screen.getByTestId('emailadd').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: 'gy@payme.com' } });
  expect(field.value).toBe('gy@payme.com');
});

test('UserProfile Work Ex component', () => {
  render(<BrowserRouter><UserProfile /></BrowserRouter>);
  console.log('select==', screen.getByTestId('workEx'))
  fireEvent.change(screen.getByTestId('workEx'), { target: { value: 0 } });
});

test('UserProfile Enable notification component', () => {
  render(<BrowserRouter><UserProfile /></BrowserRouter>);
  const field = screen.getByRole('checkbox');
  fireEvent.click(field);
  fireEvent.change(field);
});

test('UserProfile Click Left menu item component', () => {
  render(<BrowserRouter><UserProfile /></BrowserRouter>);
  const field = screen.getByText('Programs');
  fireEvent.click(field);
});

test('UserProfile Payment option component', () => {
  render(<BrowserRouter><UserProfile /></BrowserRouter>);
  const field = screen.getByTestId('paymentoption');
  fireEvent.click(field);
});
