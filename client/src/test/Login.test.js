import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom/extend-expect"

test('Login component Email Text box', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const field = screen.getByTestId('email').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: 'test@payme.com' } });
  fireEvent.keyPress(field, { key: "Enter", code: 13, charCode: 13, keyCode: 13 });
});

test('Login component Pasword Text box', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const field = screen.getByTestId('password').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: '1234' } });
  expect(field.value).toBe('1234');
  fireEvent.keyPress(field, { key: "Enter", code: 13, charCode: 13, keyCode: 13 });
});

test('Login component No Email Validation', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const field = screen.getByTestId('email').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: '' } });
  expect(field.value).toBe('');
});

test('Login component Incorrect Email Format Validation', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const field = screen.getByTestId('email').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: 'j@' } });
  expect(field.value).toBe('j@');
});

test('Login component No password Validation', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const field = screen.getByTestId('password').querySelector('input')
  expect(field).toBeInTheDocument();
  fireEvent.change(field, { target: { value: '' } });
  expect(field.value).toBe('');
});

test('Login component Toggle Password', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const field = screen.getByTestId('togglePwd')
  fireEvent.click(field)
  expect(field).toBeInTheDocument();

});

test('Login componentLogin Button', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const email = screen.getByTestId('email').querySelector('input')
  fireEvent.change(email, { target: { value: 'test@payme.com' } });
  const field = screen.getByTestId('password').querySelector('input')
  fireEvent.change(field, { target: { value: '1234' } });
  const loginBtn = screen.getByTestId('loginbtn');
  expect(loginBtn).toBeInTheDocument();
  fireEvent.click(loginBtn);
});
