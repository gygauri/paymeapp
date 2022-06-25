import React from 'react'
import './App.css';
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import NotFound from './components/NotFound'
import { BrowserRouter , Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
