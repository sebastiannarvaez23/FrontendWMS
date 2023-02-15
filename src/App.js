
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Picking } from './Components/Picking';
import { Login } from './Components/Login';

import { PickingProvider } from './Context/picking-context';
import { SaleOrderProvider } from './Context/saleorder-context';
import { BoxProvider } from './Context/box-context';
import { BoxItemProvider } from './Context/boxitem-context';

export default () => (
  <SaleOrderProvider>
    <PickingProvider>
      <BoxProvider>
        <BoxItemProvider>
          <App />
        </BoxItemProvider>
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
