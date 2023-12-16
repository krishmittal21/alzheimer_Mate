import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Hero, Navbar } from './pages/index';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
