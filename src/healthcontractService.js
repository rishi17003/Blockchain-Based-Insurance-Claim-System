// import { ethers } from 'ethers';
// import HealthInsuranceClaim from './artifacts/contracts/HealthClaim.sol/HealthInsuranceClaim.json';  // Ensure correct path
// import LifeInsuranceClaim from './artifacts/contracts/LifeClaim.sol/LifeInsuranceClaim.json';
// import VehicleInsuranceClaim from './artifacts/contracts/TravelClaim.sol/TravelInsuranceClaim.json';
// import TravelInsuranceClaim from './artifacts/contracts/VehicleClaim.sol/VehicleInsuranceClaim.json';

// // Check if window.ethereum is available
// if (!window.ethereum) {
//   alert('Please install MetaMask!');
//   throw new Error('MetaMask is not installed.');
// }

// // Create a provider instance
// const provider = new ethers.providers.Web3Provider(window.ethereum);

// // Request account access if needed
// async function requestAccounts() {
//   try {
//     await provider.send('eth_requestAccounts', []);
//   } catch (error) {
//     console.error('Error requesting accounts:', error);
//   }
// }

// // Function to interact with the contract
// async function interactWithHealthContract(policyDetails, medicalDetails, bankDetails) {
//   // Initialize signer
//   const signer = provider.getSigner();

//   // Replace with your deployed contract address
//   const contractAddress = '0x77af1dB4fbD5a6139775491492FFb3b9db751ACc';

//   // Ensure ABI is correctly extracted from HealthInsuranceClaim
//   const contractABI = HealthInsuranceClaim.abi || HealthInsuranceClaim;

//   // Create a contract instance
//   let contract;
//   try {
//     contract = new ethers.Contract(contractAddress, contractABI, signer);
//   } catch (error) {
//     console.error('Error creating contract instance:', error);
//   }
//   try {
//     if (contract) {
//       // Log parameter values
//       console.log('Policy Details:', policyDetails);
//       console.log('Medical Details:', medicalDetails);
//       console.log('Bank Details:', bankDetails);

//       // Call the contract method with full struct parameters
//       const result = await contract.fileHealthClaim(
//         policyDetails,
//         medicalDetails,
//         bankDetails
//       );
//       console.log('Contract result:', result);
//       return result;
//     } else {
//       console.error('Contract is not initialized.');
//       throw new Error('Contract is not initialized.');
//     }
//   } catch (error) {
//     console.error('Error interacting with contract:', error);
//     throw error; // Re-throw the error to be caught in the submit handler
//   }
// }

// async function interactWithLifeContract(policyDetails, nomineeDetails, medicalDetails, bankDetails) {
//   // Initialize signer
//   const signer = provider.getSigner();

//   // Replace with your deployed contract address
//   const contractAddress = '0x0bCE1ECA3F59C7b0a8459ab74a1BE31C98665501';

//   // Ensure ABI is correctly extracted from HealthInsuranceClaim
//   const contractABI = LifeInsuranceClaim.abi || LifeInsuranceClaim;

//   // Create a contract instance
//   let contract;
//   try {
//     contract = new ethers.Contract(contractAddress, contractABI, signer);
//   } catch (error) {
//     console.error('Error creating contract instance:', error);
//   }
//   try {
//     if (contract) {
//       // Log parameter values
//       console.log('Policy Details:', policyDetails);
//       console.log('Nominee Details:', nomineeDetails);
//       console.log('Medical Details:', medicalDetails);
//       console.log('Bank Details:', bankDetails);

//       // Call the contract method with full struct parameters
//       const result = await contract.fileLifeClaim(
//         policyDetails,
//         nomineeDetails,
//         medicalDetails,
//         bankDetails
//       );
//       console.log('Contract result:', result);
//       return result;
//     } else {
//       console.error('Contract is not initialized.');
//       throw new Error('Contract is not initialized.');
//     }
//   } catch (error) {
//     console.error('Error interacting with contract:', error);
//     throw error; // Re-throw the error to be caught in the submit handler
//   }
// }

// async function interactWithVehicleContract(policyDetails, vehicleDetails, driverDetails, accidentDetails, bankDetails) {
//   // Initialize signer
//   const signer = provider.getSigner();

//   // Replace with your deployed contract address
//   const contractAddress = '0x33C45321c18eBa62C15F766e517F9176552Eb24c';

//   // Ensure ABI is correctly extracted from HealthInsuranceClaim
//   const contractABI = VehicleInsuranceClaim.abi || VehicleInsuranceClaim;

//   // Create a contract instance
//   let contract;
//   try {
//     contract = new ethers.Contract(contractAddress, contractABI, signer);
//   } catch (error) {
//     console.error('Error creating contract instance:', error);
//   }
//   try {
//     if (contract) {
//       // Log parameter values
//       console.log('Policy Details:', policyDetails);
//       console.log('Vehicle Details:', vehicleDetails);
//       console.log('Driver Details:', driverDetails);
//       console.log('Accident Details:', accidentDetails);
//       console.log('Bank Details:', bankDetails);

//       // Call the contract method with full struct parameters
//       const result = await contract.fileVehicleClaim(
//         policyDetails,
//         vehicleDetails,
//         driverDetails,
//         accidentDetails,
//         bankDetails
//       );
//       console.log('Contract result:', result);
//       return result;
//     } else {
//       console.error('Contract is not initialized.');
//       throw new Error('Contract is not initialized.');
//     }
//   } catch (error) {
//     console.error('Error interacting with contract:', error);
//     throw error; // Re-throw the error to be caught in the submit handler
//   }
// }

// async function interactWithTravelContract(policyDetails, travelDetails, claimDetails, bankDetails) {
//   // Initialize signer
//   const signer = provider.getSigner();

//   // Replace with your deployed contract address
//   const contractAddress = '0xFdDBA8A9F9DDed9f1b0aE2A2da83E12445FfC0ca';

//   // Ensure ABI is correctly extracted from HealthInsuranceClaim
//   const contractABI = TravelInsuranceClaim.abi || TravelInsuranceClaim;

//   // Create a contract instance
//   let contract;
//   try {
//     contract = new ethers.Contract(contractAddress, contractABI, signer);
//   } catch (error) {
//     console.error('Error creating contract instance:', error);
//   }
//   try {
//     if (contract) {
//       // Log parameter values
//       console.log('Policy Details:', policyDetails);
//       console.log('Travel Details:', travelDetails);
//       console.log('Claim Details:', claimDetails);
//       console.log('Bank Details:', bankDetails);

//       // Call the contract method with full struct parameters
//       const result = await contract.fileTravelClaim(
//         policyDetails,
//         travelDetails,
//         claimDetails,
//         bankDetails
//       );
//       console.log('Contract result:', result);
//       return result;
//     } else {
//       console.error('Contract is not initialized.');
//       throw new Error('Contract is not initialized.');
//     }
//   } catch (error) {
//     console.error('Error interacting with contract:', error);
//     throw error; // Re-throw the error to be caught in the submit handler
//   }
// }

// // Export functions for use in your components
// export { requestAccounts, interactWithHealthContract, interactWithLifeContract, interactWithVehicleContract, interactWithTravelContract };


import { ethers } from 'ethers';
import HealthInsuranceClaim from './contracts/HealthInsuranceClaim.json';
import LifeInsuranceClaim from './contracts/LifeInsuranceClaim.json';
import VehicleInsuranceClaim from './contracts/VehicleInsuranceClaim.json';
import TravelInsuranceClaim from './contracts/TravelInsuranceClaim.json';
import './KYCPage';
// import { useEffect } from 'react';

// Private network chain ID in hexadecimal
const PRIVATE_CHAIN_ID = '0x' + (123454321).toString(16);  // Convert to hex

// Create a provider instance
// const provider = new ethers.providers.Web3Provider(window.ethereum);

// Check if MetaMask is connected to the correct network
// async function checkAndSwitchNetwork() {
//   try {
//     const { chainId } = await provider.getNetwork();
//     if (chainId !== parseInt(PRIVATE_CHAIN_ID, 16)) {
//       // Attempt to switch network
//       try {
//         await window.ethereum.request({
//           method: 'wallet_switchEthereumChain',
//           params: [{ chainId: PRIVATE_CHAIN_ID }],
//         });
//       } catch (switchError) {
//         // If network is not added in MetaMask, add it
//         if (switchError.code === 4902) {
//           await window.ethereum.request({
//             method: 'wallet_addEthereumChain',
//             params: [{
//               chainId: PRIVATE_CHAIN_ID,
//               chainName: 'Geth_POA',
//               rpcUrls: ['http://127.0.0.1:8545'],
//               nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
//             }],
//           });
//         } else {
//           throw switchError;
//         }
//       }
//     }
//   } catch (error) {
//     console.error('Error checking/switching network:', error);
//     alert('Please connect to the private network in MetaMask.');
//     throw error;
//   }
// }

const nodeMapping = {
  health: {
    maxlife: 'http://127.0.0.1:8545', // node1
    icici: 'http://127.0.0.1:8546'    // node2
  },
  life: {
    lic: 'http://127.0.0.1:8545',     // node3
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

      // let newNetwork = await provider.getNetwork();
      // while (newNetwork.chainId !== chainId) {
      //   newNetwork = await provider.getNetwork();
      // }

      // const provider = new ethers.providers.Web3Provider(window.ethereum);
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

          // let newNetwork = await provider.getNetwork();
          // while (newNetwork.chainId !== chainId) {
          //   newNetwork = await provider.getNetwork();
          // }

          // const provider = new ethers.providers.Web3Provider(window.ethereum);
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
    lic: 123454321,
    hdfc: 123454321,
    bajaj: 123454,
    tata: 123454321,
  };
  console.log(companyName);
  return chainIds[companyName];
}


// async function checkAndSwitchLICNetwork(insuranceCompany) {
//   try {
//     const { chainId } = await provider.getNetwork();
//     if (chainId !== parseInt(PRIVATE_CHAIN_ID, 16)) {
//       // Attempt to switch network
//       try {
//         await window.ethereum.request({
//           method: 'wallet_switchEthereumChain',
//           params: [{ chainId: PRIVATE_CHAIN_ID }],
//         });
//       } catch (switchError) {
//         // If network is not added in MetaMask, add it
//         if (switchError.code === 4902) {
//           await window.ethereum.request({
//             method: 'wallet_addEthereumChain',
//             params: [{
//               chainId: PRIVATE_CHAIN_ID,
//               chainName: 'LIC_Private_Blockchain',
//               rpcUrls: ['http://127.0.0.1:8546'],
//               nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
//             }],
//           });
//         } else {
//           throw switchError;
//         }
//       }
//     }
//   } catch (error) {
//     console.error('Error checking/switching network:', error);
//     alert('Please connect to the private network in MetaMask.');
//     throw error;
//   }
// }

// useEffect(() => {
//   connectMetamask();
//   fetch("http://127.0.0.1:8545/", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       "jsonrpc": "2.0",
//       "method": "web3_clientVersion",
//       "params": [],
//       "id": 1
//     })
//   })
//   .then(response => response.json())
//   .then(data => console.log('Node reachable:', data))
//   .catch(error => console.error('Node not reachable:', error));
// }, []);


// Request account access if needed
async function requestAccounts() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  try {
    await provider.send('eth_requestAccounts', []);
  } catch (error) {
    console.error('Error requesting accounts:', error);
  }
}
// const companyName = location.state?.insuranceCompany;
// Function to interact with the contract (HealthClaim as an example)
async function interactWithHealthContract(policyDetails, medicalDetails, bankDetails,companyName) {
  console.log(policyDetails);
  console.log(medicalDetails);
  console.log(bankDetails);
  console.log(companyName);
  // await checkAndSwitchNetwork();  // Ensure we're on the correct network

  // const signer = provider.getSigner();
  const signer = await checkAndSwitchNetwork('health', companyName);
  const contractAddress = '0xcf9E1F451Da0B1f6AA57695E71caBd8D7E36c1D8';
  const contractABI = HealthInsuranceClaim.abi || HealthInsuranceClaim;
  // const contract = new ethers.Contract(contractAddress, contractABI, signer);
  let contract;
  try {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  } catch (error) {
    console.error('Error creating contract instance:', error);
    return;
  }
  
  try {
    const result = await contract.fileHealthClaim(policyDetails, medicalDetails, bankDetails);
    console.log('Contract result:', result);
    return result;
  } catch (error) {
    console.error('Error interacting with contract:', error);
    throw error;
  }
  // return checkAndSwitchNetwork('health', companyName, async (signer) => {
  //   const contractAddress = '0xcf9E1F451Da0B1f6AA57695E71caBd8D7E36c1D8';
  //   const contractABI = HealthInsuranceClaim.abi || HealthInsuranceClaim;
  //   const contract = new ethers.Contract(contractAddress, contractABI, signer);

  //   try {
  //     const result = await contract.fileHealthClaim(policyDetails, medicalDetails, bankDetails);
  //     console.log('Contract result:', result);
  //     return result;
  //   } catch (error) {
  //     console.error('Error interacting with contract:', error);
  //     throw error;
  //   }
  // });
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
  const contractAddress = '0x1A4154403Ec9CEA1E057A5615249a0028833282c';
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
  // return checkAndSwitchNetwork('life', companyName, async (signer) => {
  //   const contractAddress = '0xc5A16A2B7ee93a9e03E3b9C9434Dd841E5C31e31';
  //   const contractABI = LifeInsuranceClaim.abi || LifeInsuranceClaim;
  //   const contract = new ethers.Contract(contractAddress, contractABI, signer);

  //   try {
  //     const result = await contract.fileLifeClaim(policyDetails, nomineeDetails, medicalDetails, bankDetails);
  //     console.log('Contract result:', result);
  //     return result;
  //   } catch (error) {
  //     console.error('Error interacting with contract:', error);
  //     throw error;
  //   }
  // });
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
  const contractAddress = '0xd650E097e5d539274216C0783A1E8e029cF38d2c';
  const contractABI = VehicleInsuranceClaim.abi || VehicleInsuranceClaim;

  let contract;
  try {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
  } catch (error) {
    console.error('Error creating contract instance:', error);
    return;
  }

  try {
    const result = await contract.fileVehicleClaim(policyDetails, vehicleDetails, driverDetails, accidentDetails, bankDetails);
    console.log('Contract result:', result);
    return result;
  } catch (error) {
    console.error('Error interacting with contract:', error);
    throw error;
  }
  // return checkAndSwitchNetwork('vehicle', companyName, async (signer) => {
  //   const contractAddress = '0x5274138A433045dC782aDF8538f345e6BA25C193';
  //   const contractABI = VehicleInsuranceClaim.abi || VehicleInsuranceClaim;
  //   const contract = new ethers.Contract(contractAddress, contractABI, signer);

  //   try {
  //     const result = await contract.fileVehicleClaim(policyDetails, vehicleDetails, driverDetails, accidentDetails,bankDetails);
  //     console.log('Contract result:', result);
  //     return result;
  //   } catch (error) {
  //     console.error('Error interacting with contract:', error);
  //     throw error;
  //   }
  // });
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

// Export functions for use in your components
export { requestAccounts, interactWithHealthContract, interactWithLifeContract, interactWithVehicleContract, interactWithTravelContract,checkAndSwitchNetwork};
