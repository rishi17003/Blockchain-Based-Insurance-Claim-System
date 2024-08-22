import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero"> 
        <div className="hero-content"> 
          <h1>Secure Your Future with SafeChain Insurance</h1>
          <p>Experience the power of blockchain for transparent and efficient claims processing.</p>
          <button className="btn btn-primary">File a Claim</button> 
        </div>
        <div className="hero-image">
          <img src="/logo192.png" alt="SafeChain Insurance - Secure and Reliable" />
        </div>
      </section>

      {/* Project Abstract Section */}
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

      {/* Objectives Section */}
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

      {/* Scope Section */}
      <section className="scope">
        <div className="container">
          <h2>Project Scope</h2>
          <p>
            The scope of this project includes developing a decentralized insurance claim system that leverages blockchain technology to streamline claim processing, enhance data security, and prevent fraud. It aims to integrate multiple insurers into a single network, facilitating efficient KYC verification, document authentication, and automated claim validation through smart contracts.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Footer */} 
      <footer>
        <p>&copy; 2024 SafeChain Insurance. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
