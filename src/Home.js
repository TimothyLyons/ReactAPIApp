import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Fruit from './Fruit';
import FruitPicker from './FruitPicker';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FruitPicker />
        <Link to="fruit">Fruit</Link>
        <Outlet />
        {/* <Fruit name={fruit} /> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
