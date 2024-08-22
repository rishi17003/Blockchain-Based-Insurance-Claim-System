import React, { useState } from 'react';

function ClaimForm({ type }) {
  const [formData, setFormData] = useState({
    name: '',
    policyNumber: '',
    claimDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="claim-form-container">
      <h2>File a Claim for {type} Insurance</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="policyNumber">Policy Number:</label>
          <input
            type="text"
            id="policyNumber"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="claimDetails">Claim Details:</label>
          <textarea
            id="claimDetails"
            name="claimDetails"
            value={formData.claimDetails}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit Claim</button>
      </form>
    </div>
  );
}

export default ClaimForm;