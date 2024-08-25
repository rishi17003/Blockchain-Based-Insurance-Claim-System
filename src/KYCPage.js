import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KYCPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Proceed with the claim filing process, you can use the verification result here
    if (verificationMessage.includes('exists')) {
      navigate('/Authentication');
    }
  };

  const handleVerifyClick = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/verify-user', {
            name,
            phoneNumber,
            insuranceCompany
        });
        if (response.data.success) {  // Check for 'success' instead of 'exists'
            setVerificationMessage(`Vehicle insurance in ${insuranceCompany} for Mr. ${name} exists.`);
        } else {
            setVerificationMessage('No such policy found.');
        }
    } catch (error) {
        console.error('Error verifying data:', error);
        setVerificationMessage('Error verifying data. Please try again later.');
    }
};

  return (
    <div className="kyc-page">
      <h2>KYC Verification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label>Insurance Company:</label>
          <input type="text" value={insuranceCompany} onChange={(e) => setInsuranceCompany(e.target.value)} required />
        </div>
        {/* <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div> */}
        <button type="button" onClick={handleVerifyClick}>Verify</button>
        <button type="submit">Submit</button>
      </form>
      {verificationMessage && <p>{verificationMessage}</p>}
    </div>
  );
};

export default KYCPage;
