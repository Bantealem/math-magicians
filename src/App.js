import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Calculator from './components/Calculator';
import Home from './Module/Home';
import Quote from './Module/Quote';

// eslint-disable-next-line react/prefer-stateless-function
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  );
}
