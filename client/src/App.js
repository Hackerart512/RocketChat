// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
import { LoginSignup } from './components/login/LoginSignup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginSignup/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
