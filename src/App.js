
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Picking } from './Picking'
import { Login } from './Login';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/picking" element={<Picking />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;