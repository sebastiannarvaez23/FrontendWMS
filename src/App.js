
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Picking } from './Templates/Picking';
import { Login } from './Templates/Auth/Login';
import { RegisterCompany } from './Templates/Auth/RegisterCompany';
import { RegisterUser } from './Templates/Auth/RegisterUser';

import { PickingProvider } from './Context/picking-context';
import { SaleOrderProvider } from './Context/saleorder-context';
import { BoxProvider } from './Context/box-context';
import { BoxItemProvider } from './Context/boxitem-context';
import { AuthProvider, useAuth } from './Context/auth-context';

import { PrivateRoute } from './PrivateRoute.js';

export default () => (
  <AuthProvider>
    <SaleOrderProvider>
      <PickingProvider>
        <BoxProvider>
          <BoxItemProvider>
            <App />
          </BoxItemProvider>
        </BoxProvider>
      </PickingProvider>
    </SaleOrderProvider>
  </AuthProvider>
);

function App() {

  const {
    user
  } = useAuth();

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/picking" element={<Picking />} />
        </Route>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup/company" element={<RegisterCompany />} />
        <Route path="/signup/user" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
}
