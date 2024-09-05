import React,{useEffect, useState} from 'react';
import './App1.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  // useEffect(() => {
  //   // Check if the user is authenticated
  //   axios.get('http://localhost:5000/api/protected', { withCredentials: true })
  //     .then(response => {
  //       setIsLoggedIn(true);
  //     })
  //     .catch(() => {
  //       setIsLoggedIn(false);
  //     });
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/protected', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
    }
  }, []);


  // const handleLogout = () => {
  //   axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true })
  //     .then(() => {
  //       setIsLoggedIn(false);
  //       navigate('/');
  //     });
  // };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleFileClaimClick = () => {
    navigate('/insurance'); // Adjust the route to the insurance selection page
  };

  const handleLoginOptionClick = (option) => {
    if (option === 'user') {
      navigate('/login/user');
    } else if (option === 'company') {
      navigate('/login/company');
    }
  };

  const handleSignupClick = (option) => {
    navigate('/signup')
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/logo192.png" alt="SafeChain Logo" />
          <span>SafeChain Insurance</span>
        </div>
        <div className="auth-buttons">
           {/* Login Button with Dropdown */}
           {isLoggedIn ? (
            <>
              <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
            </>
          ):(
          <>  
           <div className="dropdown">
            <button className="btn btn-secondary" onClick={() => setShowLoginDropdown(!showLoginDropdown)}>
              Login
            </button>
            {showLoginDropdown && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => handleLoginOptionClick('user')}>Login as User</button>
                <button className="dropdown-item" onClick={() => handleLoginOptionClick('company')}>Login as Company</button>
              </div>
            )}
          </div>
            <button className="btn btn-secondary" onClick={handleSignupClick}>
              Sign Up
            </button>
            </>
            )}
        </div>
      </header>

      <section className="hero"> 
        <div className="hero-content"> 
          <h1>Secure Your Future with SafeChain Insurance</h1>
          <p>Experience the power of blockchain for transparent and efficient claims processing.</p>
          <button className="btn btn-primary" onClick={handleFileClaimClick}>File a Claim</button> 
        </div>
        <div className="hero-image">
          <img src="/logo192.png" alt="SafeChain Insurance - Secure and Reliable" />
        </div>
      </section>

      <section className="project-abstract">
        <div className="container">
          <h2>About SafeChain Insurance</h2>
          <p>
            SafeChain Insurance is designed to address core challenges in the insurance industry, such as transparency, efficiency, and trust.
            Traditional insurance models often struggle with inefficiencies, fraud, and a lack of stakeholder confidence.
          </p>
          <p>
            SafeChain Insurance tackles these issues by introducing a decentralized network powered by blockchain technology.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li><strong>Claim Initiation:</strong> Customers start the process by sharing KYC details for identity verification.</li>
            <li><strong>Document Verification:</strong> Necessary documents are uploaded and authenticated through external APIs, validated against smart contract guidelines.</li>
            <li><strong>Fraud Prevention:</strong> The blockchain network ensures no double-dipping by checking for existing policies before claim approval.</li>
            <li><strong>Automated Payouts:</strong> Once validated, claims are securely recorded on the blockchain, triggering automatic payouts.</li>
            <li><strong>Dispute Resolution:</strong> The system includes a mechanism to address any discrepancies, maintaining fairness and integrity.</li>
          </ul>
        </div>
      </section>

      <section className="objectives">
        <div className="container">
          <h2>Our Objectives</h2>
          <ul>
            <li><strong>Enhance Transparency:</strong> Ensure all parties can access and verify transaction records within a transparent system.</li>
            <li><strong>Reduce Fraud:</strong> Use immutable records and smart contracts to minimize fraudulent activities.</li>
            <li><strong>Lower Costs:</strong> Automate claims processing and policy management to decrease administrative and operational expenses.</li>
            <li><strong>Improve Efficiency:</strong> Streamline processes through automation and real-time data sharing for faster and more efficient service.</li>
          </ul>
        </div>
      </section>
      
      <section className="benefits">
        <div className="container">
          <h2>Benefits</h2>
          <ul>
            <li>Blockchain-powered transparency and security.</li>
            <li>Efficient and quick claim processing.</li>
            <li>Protection against double dipping and fraud.</li>
            <li>Enhanced customer satisfaction through decentralized data management.</li>
          </ul>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 SafeChain Insurance. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;
