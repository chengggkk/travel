import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home.js';
import React from 'react';
import LoginPage from './login.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;