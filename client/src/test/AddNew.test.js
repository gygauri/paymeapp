import { render, screen, fireEvent } from '@testing-library/react';
import AddNew from '../components/AddNew';
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

test('Add New component', () => {
  render(<BrowserRouter><AddNew /></BrowserRouter>);
  const element = screen.getByAltText('sitelogo');
  expect(element).toBeInTheDocument();
});

test('Testing file upload component', () => {
  render(<BrowserRouter><AddNew /></BrowserRouter>);
  const element = screen.getByTestId('fileupload');
  expect(element).toBeInTheDocument();
  fireEvent.change(element);
});
