import React from 'react';
import './Insurancetype.css';
import { useNavigate } from 'react-router-dom';

function InsuranceTypeSelection() {
  const navigate = useNavigate();

  const handleSelection = (type) => {
    navigate(`/kyc/${type.toLowerCase()}`);
  };

  return (
    <div className="insurance-type-container">
      <h2>Select Insurance Type</h2>
      <div className="insurance-type-buttons">
      <button className="btn btn-primary" onClick={() => handleSelection('Vehicle')}>Vehicle Insurance</button>
      <button className="btn btn-primary" onClick={() => handleSelection('Health')}>Health Insurance</button>
      <button className="btn btn-primary" onClick={() => handleSelection('Life')}>Life Insurance</button>
      <button className="btn btn-primary" onClick={() => handleSelection('Travel')}>Travel Insurance</button>
      </div>
    </div>
  );
}

export default InsuranceTypeSelection;

