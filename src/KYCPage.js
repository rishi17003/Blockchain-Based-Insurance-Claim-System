import React, { useState } from 'react';
import axios from 'axios';
import './kyc.css';
import { useNavigate,useParams } from 'react-router-dom';
// import { checkAndSwitchLICNetwork, checkAndSwitchNetwork} from './healthcontractService';

const KYCPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [insurancePolicyid, setInsurancePolicyid] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const { insuranceType } = useParams();
  const navigate = useNavigate();


  const handleVerifyClick = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/verify-user', {
            name,
            phoneNumber,
            insuranceCompany,
            insurancePolicyid,
            insuranceType
        });
        if (response.data.success) {  // Check for 'success' instead of 'exists'
            // setVerificationMessage(`Vehicle insurance in ${insuranceCompany} for Mr. ${name} exists.`);
            setVerificationMessage(`${insuranceType.charAt(0).toUpperCase() + insuranceType.slice(1)} insurance in ${insuranceCompany} for Mr. ${name} exists.`);
        } else {
            setVerificationMessage('No such policy found.');
        }
    } catch (error) {
        console.error('Error verifying data:', error);
        setVerificationMessage('Error verifying data. Please try again later.');
    }
};

const handleSubmit = (event) => {
  event.preventDefault();
  if (verificationMessage.includes('exists')) {
    // const companyName = insuranceCompany;
    navigate(`/claim/${insuranceType.toLowerCase()}`);
  }
};

  return (
    <div className="kyc-page">
      <h2>Database Verification</h2>
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
        <div>
          <label>Insurance Policy ID:</label>
          <input type="text" value={insurancePolicyid} onChange={(e) => setInsurancePolicyid(e.target.value)} required />
        </div>
         <div className="button-group">
        <button type="button" onClick={handleVerifyClick}>Verify</button>
        <button type="submit">Submit</button>
        </div>
      </form>
      {verificationMessage && <p>{verificationMessage}</p>}
    </div>
  );
};
export default KYCPage;








// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function KYCPage() {
//   const [step, setStep] = useState(1);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     phoneNumber: '',
//     insuranceCompany: '',
//     otp: '',
//   });
//   const [verificationMessage, setVerificationMessage] = useState('');
//   const [error, setError] = useState('');
//   const { insuranceType } = useParams(); // Use this to determine the type of insurance
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUserDetails({
//       ...userDetails,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/verify-user', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         ...userDetails,
//         insuranceType, // Pass insuranceType to the backend
//       }),
//     });
//     const data = await response.json();
//     if (data.success) {
//       setVerificationMessage(data.message);
//     } else {
//       setError(data.message || 'Verification failed');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Continue with OTP verification or other steps
//   };

//   return (
//     <div className="kyc-page">
//       <h2>KYC Verification</h2>
//       {step === 1 ? (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={userDetails.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Phone Number:</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={userDetails.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Insurance Company:</label>
//             <input
//               type="text"
//               name="insuranceCompany"
//               value={userDetails.insuranceCompany}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="button" className="btn-primary" onClick={handleVerify}>Verify</button>
//           {verificationMessage && <p>{verificationMessage}</p>}
//           <button type="submit" className="btn-primary">Submit</button>
//         </form>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>OTP:</label>
//             <input
//               type="text"
//               name="otp"
//               value={userDetails.otp}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn-primary">Verify OTP</button>
//         </form>
//       )}
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// }

// export default KYCPage;
