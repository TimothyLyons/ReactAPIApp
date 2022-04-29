import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Fruit from './Fruit';

function RouteHandler() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="picker" element={<FruitPicker name={fruit} />} /> */}
          <Route path="fruit" element={<Fruit name={'apple'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteHandler;
