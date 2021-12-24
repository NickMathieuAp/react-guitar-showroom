import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Acous from './pages/acous';
import Bass from './pages/bass';
import Elec from './pages/elec';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/acous" element={<Acous/>} />
        <Route path="/bass" element={<Bass/>} />
        <Route path="/elec" element={<Elec/>} />
      </Routes>
    </Router>
  );
}

export default App;