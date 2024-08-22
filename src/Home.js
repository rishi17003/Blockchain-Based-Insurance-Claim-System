import React from 'react';
import './App.css';

function Home() {
  return (
    
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/logo192.png" alt="SafeChain Logo" />
          <span>SafeChain Insurance</span>
        </div>
        <div className="auth-buttons">
          <button className="btn btn-secondary">Sign Up</button>
          <button className="btn btn-secondary">Login</button>
        </div>
      </header>

      <section className="hero"> 
        <div className="hero-content"> 
          <h1>Secure Your Future with SafeChain Insurance</h1>
          <p>Experience the power of blockchain for transparent and efficient claims processing.</p>
          <button className="btn btn-primary" onClick={() => window.location.href = "/file-claim"}>File a Claim</button> 
        </div>
        <div className="hero-image">
          <img src="/logo192.png" alt="SafeChain Insurance - Secure and Reliable" />
        </div>
      </section>

      <section className="project-abstract">
        <div className="container">
          <h2>About SafeChain Insurance</h2>
          <p>
            In recent years, the insurance industry has faced numerous challenges related to transparency, efficiency, and trust. Traditional insurance models often suffer from inefficiencies, fraud, and lack of trust among stakeholders.
          </p>
          <p>
            To address these issues, SafeChain Insurance proposes a "Decentralized Insurance Network Using Blockchain." The system leverages blockchain technology to create a transparent and tamper-proof environment for handling insurance claims, reducing fraud, and enhancing efficiency. 
          </p>
          <p>
            Customers initiate claim requests through an integrated platform, where they are required to share KYC details for identity verification. Once verified, customers upload necessary documents to support their claims. These documents are authenticated using external APIs and validated against insurer-specific guidelines embedded in smart contracts.
          </p>
          <p>
            The blockchain network checks the existence of policies to prevent double-dipping fraud, ensuring that claims are not submitted to multiple insurers simultaneously. Upon successful validation, claims are recorded on the blockchain, and payouts are automatically triggered. The system also incorporates a dispute resolution mechanism, where flagged discrepancies are addressed through arbitration to maintain fairness and integrity.
          </p>
        </div>
      </section>

      <section className="objectives">
        <div className="container">
          <h2>Our Objectives</h2>
          <ul>
            <li><strong>Enhance Transparency:</strong> Provide a transparent system where all parties can access and verify transaction records.</li>
            <li><strong>Reduce Fraud:</strong> Implement immutable records and smart contracts to minimize fraudulent activities.</li>
            <li><strong>Lower Costs:</strong> Decrease administrative and operational costs by automating claims processing and policy management.</li>
            <li><strong>Improve Efficiency:</strong> Streamline processes through automation and real-time data sharing.</li>
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
