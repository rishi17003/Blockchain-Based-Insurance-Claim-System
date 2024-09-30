import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TrackClaim.css'; // Importing CSS for the table

const TrackClaim = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClaims = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You need to log in to track your claims.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/claims', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClaims(response.data.claims);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch claims.');
        setLoading(false);
      }
    };

    fetchClaims();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="claim-list">
      <h2>Your Claims</h2>
      {claims.length === 0 ? (
        <p>No claims found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Insurance Type</th>
              <th>Company</th>
              <th>Policy Number</th>
              <th>Claim Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr key={claim._id}>
                <td>{claim.insuranceType} Insurance</td>
                <td>{claim.companyName}</td>
                <td>{claim.policyNumber}</td>
                <td>{claim.ClaimStatus}</td>
                <td>{new Date(claim.dateFiled).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TrackClaim;
