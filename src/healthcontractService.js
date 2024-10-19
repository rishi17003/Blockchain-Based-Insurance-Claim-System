import { ethers } from 'ethers';
import HealthInsuranceClaim from './contracts/HealthInsuranceClaim.json';
import LifeInsuranceClaim from './contracts/LifeInsuranceClaim.json';
import VehicleInsuranceClaim from './contracts/VehicleInsuranceClaim.json';
import TravelInsuranceClaim from './contracts/TravelInsuranceClaim.json';
import './KYCPage';
// import { useEffect } from 'react';


// Private network chain ID in hexadecimal
const PRIVATE_CHAIN_ID = '0x' + (123454321).toString(16);  // Convert to hex


const nodeMapping = {
  health: {
    maxlife: 'http://127.0.0.1:8545', // node1
    icici: 'http://127.0.0.1:8546'    // node2
  },
  life: {
    lic: 'http://127.0.0.1:8548',     // node3
    hdfc: 'http://127.0.0.1:8548'     // node4
  },
  vehicle: {
    bajaj: 'http://127.0.0.1:8547',   // node1
    tata: 'http://127.0.0.1:8546'     // node2
  }
};

async function checkAndSwitchNetwork(insuranceType, companyName) {
  const rpcUrl = nodeMapping[insuranceType]?.[companyName];
  const chainId = getChainId(companyName); // Example helper function to get chainId

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { chainId: currentChainId } = await provider.getNetwork();
  console.log(chainId);
  console.log(currentChainId);

  if (!rpcUrl) {
    throw new Error('Company not found in the mapping.');
  }


  if (parseInt(currentChainId, 16) !== chainId) {
    // Switch network
    try {
      
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });

      console.log(`Network switched to ${companyName} network`);
    } catch (error) {
      if (error.code === 4902) {
        // If network is not added in MetaMask, add it
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: `0x${chainId.toString(16)}`,
              chainName: `${companyName} Network`,
              rpcUrls: [rpcUrl],
              nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
            }],
          });

          console.log(`Network added and switched to ${companyName} network`);
        } catch (addError) {
          console.error('Failed to add network to MetaMask:', addError);
          throw new Error('Failed to add network to MetaMask.');
        }
      } else {
        throw error;
      }
    }
  }
  const signer = provider.getSigner();
  return signer;
  // return interactionCallback(signer);
}

// Helper function to map company names to chain IDs
function getChainId(companyName) {
  const chainIds = {
    maxlife: 123454321,   // Example Chain ID
    icici: 12345,
    lic: 1234543,
    hdfc: 123454321,
    bajaj: 123454,
    tata: 123454321,
  };
  console.log(companyName);
  return chainIds[companyName];
}

// Request account access if needed
async function requestAccounts() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  try {
    await provider.send('eth_requestAccounts', []);
  } catch (error) {
    console.error('Error requesting accounts:', error);
  }
}
async function interactWithHealthContract(policyDetails, medicalDetails, bankDetails,companyName, ipfsCid) {
  console.log(policyDetails);
  console.log(medicalDetails);
  console.log(bankDetails);
  console.log(companyName);

  const signer = await checkAndSwitchNetwork('health', companyName);
  const contractAddress = '0xc5A16A2B7ee93a9e03E3b9C9434Dd841E5C31e31';
  const contractABI = HealthInsuranceClaim.abi || HealthInsuranceClaim;

  let contract;
  try {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  } catch (error) {
    console.error('Error creating contract instance:', error);
    return;
  }

  try {
    const tx = await contract.fileHealthClaim(ipfsCid,policyDetails, medicalDetails, bankDetails);
    await tx.wait();
    console.log('Contract result:', tx);
    return tx;
    // console.log(contractAddress);
    // console.log(contractABI);
    // console.log(signer);
  } catch (error) {
    console.error('Error uploading to IPFS or interacting with contract:', error);
    return;
  }
  
}

// Similarly, apply network check for other insurance types
async function interactWithLifeContract(policyDetails, nomineeDetails, medicalDetails, bankDetails,companyName) {
  // await checkAndSwitchNetwork();  // Ensure we're on the correct network
  // // const signer = provider.getSigner();
  console.log(policyDetails);
  console.log(nomineeDetails);
  console.log(medicalDetails);
  console.log(bankDetails);
  const signer = await checkAndSwitchNetwork('life', companyName);
  const contractAddress = '0xd650E097e5d539274216C0783A1E8e029cF38d2c';
  const contractABI = LifeInsuranceClaim.abi || LifeInsuranceClaim;

  let contract;
  try {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  } catch (error) {
    console.error('Error creating contract instance:', error);
    return;
  }

  try {
    const result = await contract.fileLifeClaim(policyDetails, nomineeDetails, medicalDetails, bankDetails);
    console.log('Contract result:', result);
    return result;
  } catch (error) {
    console.error('Error interacting with contract:', error);
    throw error;
  }
}

async function interactWithVehicleContract(policyDetails, vehicleDetails, driverDetails, accidentDetails, bankDetails,companyName) {
  // await checkAndSwitchNetwork();  // Ensure we're on the correct network
  // const signer = provider.getSigner();
  console.log(policyDetails);
  console.log(vehicleDetails);
  console.log(driverDetails);
  console.log(accidentDetails);
  console.log(bankDetails);
  console.log(companyName);
  const signer = await checkAndSwitchNetwork('vehicle', companyName);
  const contractAddress = '0x5274138A433045dC782aDF8538f345e6BA25C193';
  const contractABI = VehicleInsuranceClaim.abi || VehicleInsuranceClaim;

  let contract;
  try {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    // console.log(contractAddress);
    // console.log(contractABI);
    // console.log(signer);
  } catch (error) {
    console.error('Error creating contract instance:', error);
    return;
  }

  try {
    console.log(contract.fileVehicleClaim);
    const result = await contract.fileVehicleClaim(policyDetails, vehicleDetails, driverDetails, accidentDetails, bankDetails);
    console.log('Contract result:', result);
    return result;
  } catch (error) {
//    console.error('Stack trace:', error.stack)
    console.error('Error interacting with contract:', error);
    throw error;
  }
}

async function interactWithTravelContract(policyDetails, travelDetails, claimDetails, bankDetails,companyName) {
  await checkAndSwitchNetwork();  // Ensure we're on the correct network
  // const signer = provider.getSigner();
  const signer = await checkAndSwitchNetwork('Travel', companyName);
  const contractAddress = '0xD93d25B4F7f49ddBbfA58e71E1e828E43F51c892';
  const contractABI = TravelInsuranceClaim.abi || TravelInsuranceClaim;

  let contract;
  try {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  } catch (error) {
    console.error('Error creating contract instance:', error);
    return;
  }

  try {
    const result = await contract.fileTravelClaim(policyDetails, travelDetails, claimDetails, bankDetails);
    console.log('Contract result:', result);
    return result;
  } catch (error) {
    console.error('Error interacting with contract:', error);
    throw error;
  }
}

export { requestAccounts, interactWithHealthContract, interactWithLifeContract, interactWithVehicleContract, interactWithTravelContract,checkAndSwitchNetwork};
