import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import InsuranceTypeSelection from './InsuranceTypeSelection';
import ClaimForm from './ClaimForm'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/file-claim" element={<InsuranceTypeSelection />} />
          <Route path="/file-claim/vehicle" element={<ClaimForm type="Vehicle" />} />
          <Route path="/file-claim/health" element={<ClaimForm type="Health" />} />
          <Route path="/file-claim/life" element={<ClaimForm type="Life" />} />
          <Route path="/file-claim/travel" element={<ClaimForm type="Travel" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
