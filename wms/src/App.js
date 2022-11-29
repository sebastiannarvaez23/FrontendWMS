
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Picking } from './Picking';
import { Login } from './Login';

import { PickingProvider } from './Context/picking-context';
import { SaleOrderProvider } from './Context/saleorder-context';
import { BoxProvider } from './Context/box-context';

export default () => (
  <SaleOrderProvider>
    <PickingProvider>
      <BoxProvider>
        <App />
      </BoxProvider>
    </PickingProvider>
  </SaleOrderProvider>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/picking" element={<Picking />} />
        <Route path="" element={<Login />} />
      </Routes>
    </Router>
  );
}
