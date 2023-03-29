import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import JobsPortal from './components/jobsPortal';
import Company from './components/Company';
import Persona from './components/Persona';

function App() {
  return (
    
    <div className='App'>
    
      <Navbar/>
      <Router>
      <Routes>
      <Route path="/" element={<JobsPortal />} />
      <Route path="/company" element={<Company />} />
      <Route path="/persona" element={<Persona />} />
      </Routes>
      </Router>
      </div>
      
  );
}

export default App;
