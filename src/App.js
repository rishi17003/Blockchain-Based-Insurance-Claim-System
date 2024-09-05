import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import InsuranceTypeSelection from './InsuranceTypeSelection'; 
import KYCPage from './KYCPage';
import ClaimForm from './ClaimForm'; 
import Authentication from './Authentication';
import Signup from './Signup';
import Login from './Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/user" element={<Login userType="user" />} />
        <Route path="/login/company" element={<Login userType="company" />} />
        <Route path="/insurance" element={<InsuranceTypeSelection />} />
        <Route path="/kyc/:insuranceType" element={<KYCPage />} />
        <Route path="/claim/:insuranceType" element={<ClaimForm />} />
        <Route path="/Authentication" element={<Authentication />} />
      </Routes>
    </Router>
  );
}

export default App;
