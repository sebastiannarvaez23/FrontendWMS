
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Picking } from './Picking';
import { Login } from './Login';
import { PickingMonitor } from './PickingMonitor';

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

export default App;