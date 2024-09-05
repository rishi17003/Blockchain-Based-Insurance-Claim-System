import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API calls

function Signup() {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(''); // Clear any existing error messages

    try {
      // Make a POST request to the backend API to store user data
      const response = await axios.post('http://localhost:5000/api/signup', {
        userType,
        name,
        phone,
        email,
        password
      });

      // Check if the signup was successful
      if (response.data.success) {
        // Redirect to the login page on successful signup
        navigate('/login');
      } else {
        // Handle any errors returned by the server
        setErrorMessage(response.data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div>
          <label>Type of User:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
            <option value="">Select User Type</option>
            <option value="policyholder">Policyholder</option>
            <option value="company">Company</option>
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Email ID:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label> {/* New password field */}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
