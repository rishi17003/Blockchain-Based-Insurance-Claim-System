import React, {useState, useEffect} from 'react';
import './claim_form.css';
import { useParams} from 'react-router-dom';
import { requestAccounts, interactWithHealthContract, interactWithLifeContract, interactWithTravelContract, interactWithVehicleContract } from './healthcontractService';
import axios from 'axios';
import { create as ipfsHttpClient } from 'ipfs-http-client';

const projectId = '08671f09b43898692d36';
const projectSecret = '75bbd947450c4bc2a053c18d83a47e8cb1579e794197fddf564125a4a581542d';
//const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3ODdhYTA5MS0xZmEyLTRiMjctOTQyOC0zMWY3MWIzOTNhNDQiLCJlbWFpbCI6InJpc2hpa2F0a2FyMjcxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIwODY3MWYwOWI0Mzg5ODY5MmQzNiIsInNjb3BlZEtleVNlY3JldCI6Ijc1YmJkOTQ3NDUwYzRiYzJhMDUzYzE4ZDgzYTQ3ZThjYjE1NzllNzk0MTk3ZmRkZjU2NDEyNWE0YTU4MTU0MmQiLCJleHAiOjE3NjAwODE1Njl9.zmZWCXTLLKALgPs-b02FyoK6peifwyMEZe37PXvCFTk';

const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3ODdhYTA5MS0xZmEyLTRiMjctOTQyOC0zMWY3MWIzOTNhNDQiLCJlbWFpbCI6InJpc2hpa2F0a2FyMjcxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIwODY3MWYwOWI0Mzg5ODY5MmQzNiIsInNjb3BlZEtleVNlY3JldCI6Ijc1YmJkOTQ3NDUwYzRiYzJhMDUzYzE4ZDgzYTQ3ZThjYjE1NzllNzk0MTk3ZmRkZjU2NDEyNWE0YTU4MTU0MmQiLCJleHAiOjE3NjAwODE1Njl9.zmZWCXTLLKALgPs-b02FyoK6peifwyMEZe37PXvCFTk';

// const ipfs = ipfsHttpClient({
//   host: 'api.pinata.cloud',
//   port: 443,
//   protocol: 'https',
//   headers: {
//     authorization: `Bearer ${jwt}`,
//   },
// });


const ClaimForm = () => {
  const { insuranceType } = useParams();
  const [firAttachment, setFirAttachment] = useState(null);

  useEffect(() => {
    // Ensure user account is connected
    requestAccounts();
  }, []);

  // const handleFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     try {
  //       // Upload the file to IPFS and get the hash
  //       const result = await ipfs.pinning.upload(file);
  //       setFirAttachment(result.path);  // Store the IPFS hash
  //       console.log('Uploaded to IPFS:', result.path);
  //     } catch (error) {
  //       console.error('Error uploading file to IPFS:', error);
  //     }
  //   }
  // };
  // const location = useLocation();
  // const companyName = location.state?.insuranceCompany || "";

  const handleHealthSubmit = async (e) => {
    e.preventDefault();
  
    const policyDetails = {
      companyName: e.target.companyName?.value || "",
      policyNumber: e.target.policyNumber?.value || "",
      policyHolderName: e.target.policyHolderName?.value || "",
      phoneNumber: e.target.phoneNumber?.value || "",
      holderAddress: e.target.currentAddress?.value || "",
      dob: e.target.dob?.value || "",
      gender: e.target.gender?.value || "",
    };
  
    const medicalDetails = {
      diseaseDetails: e.target.disease?.value || "",
      diseaseDuration: parseInt(e.target.diseaseDuration?.value) || 0,
      previousHospitalizedRecord: e.target.previousHospitalizedDate?.value || "None",
      doctorDetails: e.target.doctorName?.value || "",
      treatmentAmountSpent: parseInt(e.target.treatmentAmountSpent?.value) || 0,
      hospitalName: e.target.hospitalName?.value || "",
      hospitalAddress: e.target.hospitalAddress?.value || "",
      hasOtherPolicy: e.target.otherPolicy?.value.toLowerCase() === "yes" ? "yes" : "no",
      icuSurgeryDetails: e.target.icuSurgeryDetails?.value || "None",
      firAttachment: firAttachment || "NA",
    };
  
    const bankDetails = {
      accountNumber: e.target.bankAccountNumber?.value || "",
      bankName: e.target.bankName?.value || "",
      panNumber: e.target.panNumber?.value || "",
      ifscNumber: e.target.bankIfscCode?.value || "",
    };

  
    try {
      // Call the updated smart contract method with structs
      console.log(policyDetails.companyName);
      console.log(policyDetails);
      console.log(medicalDetails);
      console.log(bankDetails);

      // const ipfsResult = await ipfs.add(JSON.stringify(claimData));
      // const ipfsCid = ipfsResult.path;

      const claimData = { policyDetails, medicalDetails, bankDetails };

      let apiEndpoint;
      if (policyDetails.companyName === 'maxlife') {
          apiEndpoint = 'http://127.0.0.1:5001/api/v0/add'; // Example endpoint for maxlife
      } else if (policyDetails.companyName === 'icici') {
          apiEndpoint = 'http://127.0.0.1:5002/api/v0/add'; // Example endpoint for icici
      }

      const formData = new FormData();
      const blob = new Blob([JSON.stringify(claimData)], { type: 'application/json' });
      formData.append('file', blob);
      // const formData1= new FormData();
      // const blob1=new Blob(medicalDetails.firAttachment,{type:'application/json'});
      // formData1.append('file',blob1);

      const response = await axios.post(apiEndpoint, formData, {
        headers: {
          // 'Authorization': `Bearer ${JWT_TOKEN}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      const ipfsCid = response.data.Hash;  // Get CID from the response
      console.log('Uploaded to IPFS, CID:', ipfsCid);

      const tx = await interactWithHealthContract(policyDetails, medicalDetails, bankDetails,policyDetails.companyName,ipfsCid);
      // if (!tx) {
      //   alert("Network switch might have failed. Please try again.");
      //   return;
      // }
      await tx.wait(); // Wait for the transaction to be mined
      
      await sendClaimToBackend('Health', policyDetails.companyName, policyDetails.policyNumber);
      // console.log(policyDetails.companyName, policyDetails.policyNumber);
      alert("Claim submitted successfully!");
    } catch (error) {
      console.error("Error filing claim:", error);
      // alert("Error filing claim, please try again.");
    }
  };  

  const handleLifeSubmit = async (e) => {
    e.preventDefault();

    const policyDetails = {
      companyName: e.target.companyName?.value || "",
      policyNumber: e.target.policyNumber?.value || "",
      policyHolderName: e.target.name?.value || "",
      dob: e.target.dob?.value || "",
      gender: e.target.gender?.value || "",
      ageonDeath: parseInt(e.target.ageOnDeath?.value) || 0,
      dateofDeath: e.target.dateOfDeath?.value || "",
      timeOfDeath: e.target.timeOfDeath?.value || "",
      causeOfDeath: e.target.causeOfDeath?.value || "",
      placeOfDeath: e.target.placeOfDeath?.value || ""
    };

    const nomineeDetails = {
      nomineeName: e.target.nomineeName?.value || "",
      nomineeDob: e.target.nomineeDob?.value || "",
      nomineegender: e.target.nomineegender?.value || "",
      relationshipWithDeceased: e.target.relationshipWithDeceased?.value || "",
      currentAddress: e.target.currentAddress?.value || "",
      phonenumber: e.target.phoneNumber?.value || ""
    };
  
    const medicalDetails = {
      natureofIllness: e.target.illness?.value || "",
      dateofDiagnosis: e.target.dateOfDiagnosis?.value || "",
      treatmentTaken: e.target.treatmentTaken?.value || "None",
      firAttachment: firAttachment || "N/A", // Ensure a file name is passed or empty string
      doctorDetails: e.target.doctorName?.value || "",
      hospitalName: e.target.hospitalName?.value || "",
      hospitalAddress: e.target.hospitalAddress?.value || "",
      hasOtherPolicy: e.target.otherPolicy?.value.toLowerCase() === "yes" ? "yes" : "no",
    };
  
    const bankDetails = {
      accountNumber: e.target.accountNumber?.value || "",
      bankName: e.target.bankName?.value || "",
      panNumber: e.target.pan?.value || "", 
      ifscNumber: e.target.ifscCode?.value || ""
    };
  
    // Log the details to verify correctness
    console.log("Policy Details:", policyDetails);
    console.log("Nominee Details:", nomineeDetails);
    console.log("Medical Details:", medicalDetails);
    console.log("Bank Details:", bankDetails);

    try {
      const tx = await interactWithLifeContract(policyDetails, nomineeDetails, medicalDetails, bankDetails,policyDetails.companyName);
      await tx.wait();

      await sendClaimToBackend('Life', policyDetails.companyName, policyDetails.policyNumber);
      alert("Claim submitted successfully!");
    } catch (error) {
      console.error("Error filing claim:", error);
      alert("Error filing claim, please try again.");
    }
  };
 

  const handleVehicleSubmit = async (e) => {
    e.preventDefault();
  
    const policyDetails = {
      //companyName: e.target.companyName?.value || "",
      policyNumber: e.target.policyNumber?.value || "",
      policyHolderName: e.target.name?.value || "",
      phoneNumber: e.target.phone?.value || "",
      holderAddress: e.target.address?.value || "",
      district: e.target.district?.value || "",
      pinCode: e.target.pinCode?.value || "",
      email: e.target.email?.value || "",
      panNo: e.target.pan?.value || "",
      aadhar: e.target.aadhar?.value || "",
      yearlyIncome: e.target.yearlyIncome?.value || "",
      occupation: e.target.occupation?.value || "",
      dob: e.target.dob?.value || "",
      gender: e.target.gender?.value || "",
      insuranceCompany: e.target.companyName?.value || "",
      familyMembers: parseInt(e.target.familyMembers?.value) || 0,
      membersOver18: parseInt(e.target.membersAbove18?.value) || 0,
      membersDrive: parseInt(e.target.driversInFamily?.value) || 0,
      averageKM: e.target.averageKms?.value || "",
      numberOfVehicle: parseInt(e.target.noOfVehicles?.value) || 0,
      antitheftDevice: e.target.antiTheftDevice?.value || "",
      haveClaimedInYear: e.target.claimsLast2Years?.value || "",
      usage: e.target.usage?.value || "",
    };

    const vehicleDetails = {
      vehicleRegistrationNo: e.target.regNo?.value || "",
      vehicleModel: e.target.model?.value || "",
      dateOfRegistration: e.target.dateOfReg?.value || "",
      mileage: e.target.mileage?.value || "",
      km:e.target.kms?.value || "",
      chassisNo:e.target.chassisNo?.value || "",
      engineNo: e.target.engineNo?.value || "",
      classOfVehicle: e.target.classOfVehicle?.value || ""
    }
  
    const driverDetails = {
      driverName: e.target.driverName?.value || "",
      driverAddress: e.target.driverAddress?.value || "",
      relationshipWithDriver: e.target.driverIs?.value || "",
      driverGender: e.target.gender?.value || "",
      wasDriverDrunk: e.target.underInfluence?.value || "",
      drivingLicenseNo: e.target.licenseNo?.value || "",
      licenseIssueAuthority: e.target.issuingAuthority?.value || "",
      dateOfExpiry: e.target.expiryDate?.value || "",
      typeOfLicense: e.target.licenseType?.value || "",
      detailsOfSuspension: e.target.endorsements?.value || "",
      licenseTemporary: e.target.temporaryLicense?.value || ""
    };

    const accidentDetails = {
      dateOfAccident: e.target.accidentDate?.value || "",
      timeOfAccident: e.target.accidentTime?.value || "",
      location: e.target.location?.value || "",
      descriptionOfAccident: e.target.description?.value || "",
      thirdPartyResponsible: e.target.thirdPartyLiable?.value || "",
      detailOfThirdParty: e.target.thirdPartyDetails?.value || "",
      reportedToPolice: e.target.reportedToPolice?.value || "",
      policeDetails: e.target.policeDetails?.value || "",
      repairCost: e.target.repairCost?.value || "",
      supportingDocument: e.target.supportingDocuments?.value || "NA"
    };
  
    const bankDetails = {
      accountNumber: e.target.bankAccountNumber?.value || "",
      bankName: e.target.bankName?.value || "",
      panNumber: e.target.panNumber?.value || "",
      ifscNumber: e.target.bankIfscCode?.value || "",
    };
  
    try {

      // console.log(policyDetails);
      // console.log(vehicleDetails);
      // console.log(driverDetails);
      // console.log(accidentDetails);
      // console.log(bankDetails);
      // Call the updated smart contract method with structs
      const tx = await interactWithVehicleContract(policyDetails, vehicleDetails, driverDetails, accidentDetails, bankDetails,policyDetails.insuranceCompany);
      await tx.wait(); // Wait for the transaction to be mined
  
      await sendClaimToBackend('Vehicle', policyDetails.insuranceCompany, policyDetails.policyNumber);
      alert("Claim submitted successfully!");
    } catch (error) {
      console.error("Error filing claim:", error);
      // alert("Error filing claim, please try again.");
    }
  }; 

  const sendClaimToBackend = async (insuranceType, companyName, policyNumber) => {
    const token = localStorage.getItem('token');
    const claimData = { insuranceType, companyName, policyNumber };
    console.log("Claim Data to send:", claimData); 
  
    try {
      await axios.post('http://localhost:5000/api/claim', claimData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Claim saved to backend successfully.');
    } catch (error) {
      if (error.response) {
        console.error('Backend error response:', error.response.data);
      } else {
        console.error('Error saving claim in backend:', error);
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(insuranceType === 'health'){
      handleHealthSubmit(e);
    }
    else if(insuranceType === 'life'){
      handleLifeSubmit(e);
    }
    else if(insuranceType === 'vehicle'){
      handleVehicleSubmit(e);
    }
    // else{
    //   handleTravelSubmit(e);
    // }
  };  

  const renderFormFields = () => {
    switch (insuranceType) {
      case 'vehicle':
        return (
          <>
            <h3 className='personal-info'>Personal Information</h3>
            <div className='personal-info'>
            <div>
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Company Name:</label>
              <input type="text" name="companyName" required />
      	    </div>
            <div>
              <label>Policy Number:</label>
              <input type="text" name="policyNumber" required />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" name="dob" required />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" name="address" required />
            </div>
            <div>
              <label>District:</label>
              <input type="text" name="district" required />
            </div>
            <div>
              <label>Pin Code:</label>
              <input type="text" name="pinCode" required />
            </div>
            <div>
              <label>Phone No:</label>
              <input type="text" name="phone" required />
            </div>
            <div>
              <label>Email ID:</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>PAN:</label>
              <input type="text" name="pan" required />
            </div>
            <div>
              <label>Aadhar:</label>
              <input type="text" name="aadhar" required />
            </div>
            <div>
              <label>Average Yearly Income:</label>
              <select name="yearlyIncome" required>
                <option value="<3 lac">Less than 3 lac</option>
                <option value="3 lac-5 lac">3 lac - 5 lac</option>
                <option value="5 lac-10 lac">5 lac - 10 lac</option>
                <option value="10 lac-20 lac">10 lac - 20 lac</option>
                <option value=">20 lac">More than 20 lac</option>
              </select>
            </div>
            <div>
              <label>Occupation:</label>
              <select name="occupation" required>
                <option value="service">Service</option>
                <option value="marketing">Marketing</option>
                <option value="non-marketing">Non-Marketing</option>
                <option value="business">Business</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label>No of Members in Family:</label>
              <input type="number" name="familyMembers" required />
            </div>
            <div>
              <label>Members Above 18:</label>
              <input type="number" name="membersAbove18" required />
            </div>
            <div>
              <label>Members Who Drive:</label>
              <input type="number" name="driversInFamily" required />
            </div>
            <div>
              <label>No of Vehicles:</label>
              <input type="number" name="noOfVehicles" required />
            </div>
            <div>
              <label>Average Kms Run in Year:</label>
              <select name="averageKms" required>
                <option value="<5000">Less than 5000</option>
                <option value="5000-10000">5000 - 10000</option>
                <option value="10000-20000">10000 - 20000</option>
                <option value=">20000">More than 20000</option>
              </select>
            </div>
            <div>
              <label>Claims in Last 2 Years:</label>
              <select name="claimsLast2Years" required>
                <option value="none">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3 or more">3 or more</option>
              </select>
            </div>
            <div>
              <label>Usage:</label>
              <select name="usage" required>
                <option value="personal">Personal</option>
                <option value="business (within city)">Business (within city)</option>
                <option value="business (outside city)">Business (outside city)</option>
              </select>
            </div>
            <div>
              <label>Anti-Theft Device:</label>
              <select name="antiTheftDevice" required>
                <option value="immobilizer">Immobilizer</option>
                <option value="gear lock">Gear Lock</option>
                <option value="tracking device">Tracking Device</option>
                <option value="none">None</option>
              </select>
            </div>
            </div>
            <h3 className='vehicle-info'>Information about Insured Vehicle</h3>
            <div className='vehicle-info'>
            <div>
              <label>Reg No:</label>
              <input type="text" name="regNo" required />
            </div>
            {/* <div>
              <label>Make:</label>
              <input type="text" name="make" required />
            </div> */}
            <div>
              <label>Model:</label>
              <input type="text" name="model" required />
            </div>
            <div>
              <label>Date of Reg:</label>
              <input type="date" name="dateOfReg" required />
            </div>
            <div>
              <label>Mileage:</label>
              <input type="text" name="mileage" required />
            </div>
            <div>
              <label>Kms:</label>
              <input type="text" name="kms" required />
            </div>
            <div>
              <label>Chassis No:</label>
              <input type="text" name="chassisNo" required />
            </div>
            <div>
              <label>Engine No:</label>
              <input type="text" name="engineNo" required />
            </div>
            <div>
              <label>Class of Vehicle:</label>
              <select name="classOfVehicle" required>
                <option value="private">Private</option>
                <option value="commercial">Commercial</option>
                <option value="two wheeler">Two Wheeler</option>
              </select>
            </div>
            </div>
            <h3 className='driver-info'>Details about the Driver</h3>
            <div className='driver-info'>
            <div>
              <label>Name:</label>
              <input type="text" name="driverName" required />
            </div>
            <div>
              <label>Address:</label>
              <input type="text" name="driverAddress" required />
            </div>
            <div>
              <label>Driver is:</label>
              <select name="driverIs" required>
                <option value="owner">Owner</option>
                <option value="paid driver">Paid Driver</option>
                <option value="relative/friend">Relative/Friend</option>
              </select>
            </div>
            <div>
              <label>Gender of Driver:</label>
              <select name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>Under Influence of Liquor or Drugs:</label>
              <select name="underInfluence" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label>Driving License No:</label>
              <input type="text" name="licenseNo" required />
            </div>
            <div>
              <label>Issuing Authority:</label>
              <input type="text" name="issuingAuthority" required />
            </div>
            <div>
              <label>Date of Expiry:</label>
              <input type="date" name="expiryDate" required />
            </div>
            <div>
              <label>Driving License Type:</label>
              <select name="licenseType" required>
                <option value="HGV">HGV</option>
                <option value="LCV">LCV</option>
                <option value="LMV">LMV</option>
                <option value="Motor cycle">Motor Cycle</option>
                <option value="Scooter without gear">Scooter Without Gear</option>
              </select>
            </div>
            <div>
              <label>Details of Endorsements/Suspensions (if any):</label>
              <input type="text" name="endorsements" />
            </div>
            <div>
              <label>Was the License Temporary?</label>
              <select name="temporaryLicense" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            </div>
            <h3 className='accident-info'>Details of Accident</h3>
            <div className='accident-info'>
            <div>
              <label>Date:</label>
              <input type="date" name="accidentDate" required />
            </div>
            <div>
              <label>Time:</label>
              <input type="time" name="accidentTime" required />
            </div>
            <div>
              <label>Exact Location:</label>
              <input type="text" name="location" required />
            </div>
            <div>
              <label>Brief Description:</label>
              <textarea name="description" required></textarea>
            </div>
            <div>
              <label>Was any Third Party Responsible/Liable?</label>
              <select name="thirdPartyLiable" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label>Details of Third Party:</label>
              <textarea name="thirdPartyDetails"></textarea>
            </div>
            <div>
              <label>Was the Accident Reported to Police?</label>
              <select name="reportedToPolice" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label>If Yes, Provide Details:</label>
              <textarea name="policeDetails"></textarea>
            </div>
            <div>
              <label>Estimated Cost of Repairs:</label>
              <input type="text" name="repairCost" required />
            </div>
            <div>
              <label>Supporting Documents:</label>
              <input type="file" name="supportingDocuments" />
            </div>
            </div>
            <h3 className='bank-details'>Bank Account Details</h3>
            <div className='bank-details'>
      <div>
        <label>Bank Account Number:</label>
        <input type="text" name="bankAccountNumber" required />
      </div>
      <div>
        <label>Bank Name:</label>
        <input type="text" name="bankName" required />
      </div>
      <div>
        <label>PAN Number:</label>
        <input type="text" name="panNumber" required />
      </div>
      <div>
        <label>Bank IFSC Code:</label>
        <input type="text" name="bankIfscCode" required />
      </div>
      </div>
          </>
        );
      case 'health':
        return (
          <>
            <h3 className='personal-info'>Personal Information</h3>
            <div className='personal-info'>
              <div>
                <label>Name:</label>
                <input type="text" name="policyHolderName" required />
              </div>
              <div>
                <label>Company Name:</label>
                <input type="text" name="companyName" required />
              </div>
              <div>
                <label>Policy Number:</label>
                <input type="text" name="policyNumber" required />
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="text" name="phoneNumber" required />
              </div>
              <div>
                <label>Current Address:</label>
                <textarea name="currentAddress" required></textarea>
              </div>
              <div>
                <label>Date of Birth:</label>
                <input type="date" name="dob" required />
              </div>
              <div>
                <label>Gender:</label>
                <select name="gender" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <h3 className='driver-info'>Disease Information</h3>
            <div className='driver-info'>
              <div>
                <label>Disease:</label>
                <input type="text" name="disease" required />
              </div>
              <div>
                <label>Disease Duration (in days):</label>
                <input type="number" name="diseaseDuration" required />
              </div>
              <div>
                <label>Previous Hospitalized Date (if any):</label>
                <input type="date" name="previousHospitalizedDate" />
              </div>
            </div>
            <h3 className='accident-info'>Doctor Details</h3>
            <div className='accident-info'>
              <div>
                <label>Doctor Name:</label>
                <input type="text" name="doctorName" required />
              </div>
              <div>
                <label>Treatment Amount Spent:</label>
                <input type="number" name="treatmentAmountSpent" required />
              </div>
              <div>
                <label>Hospital Name:</label>
                <input type="text" name="hospitalName" required />
              </div>
              <div>
                <label>Hospital Address:</label>
                <textarea name="hospitalAddress" required></textarea>
              </div>
              <div>
                <label>Do you have any other policy?</label>
                <input type="text" name="otherPolicy" required />
              </div>
              <div>
                <label>ICU Surgery Details:</label>
                <textarea name="icuSurgeryDetails"></textarea>
              </div>
              <div>
                <label>Supporting Documents:</label>
                <input type="file" name="supportingDocuments" />
              </div>
            </div>
            <h3 className='bank-details'>Bank Account Details</h3>
            <div className='bank-details'>
              <div>
                <label>Bank Account Number:</label>
                <input type="text" name="bankAccountNumber" required />
              </div>
              <div>
                <label>Bank Name:</label>
                <input type="text" name="bankName" required />
              </div>
              <div>
                <label>PAN Number:</label>
                <input type="text" name="panNumber" required />
              </div>
              <div>
                <label>Bank IFSC Code:</label>
                <input type="text" name="bankIfscCode" required />
              </div>
            </div>
          </>
        );
      case 'life':
        return (
          <>
             {/* Personal Information */}
      <div>
        <h3 className='personal-info'>Personal Information</h3>
        <div className='personal-info'>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
            <label>Company Name:</label>
            <input type="text" name="companyName" required />
      	</div>
        <div>
          <label>Policy Number:</label>
          <input type="text" name="policyNumber" required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" required />
        </div>
        <div>
              <label>Gender:</label>
              <select name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
        <div>
          <label>Age on Death:</label>
          <input type="number" name="ageOnDeath" required />
        </div>
        <div>
          <label>Date of Death:</label>
          <input type="date" name="dateOfDeath" required />
        </div>
        <div>
          <label>Time of Death:</label>
          <input type="time" name="timeOfDeath" required />
        </div>
        <div>
          <label>Cause of Death:</label>
          <input type="text" name="causeOfDeath" required />
        </div>
        <div>
          <label>Place of Death:</label>
          <input type="text" name="placeOfDeath" required />
        </div>
      </div>
      </div>
      {/* Nominee Information */}
      <div>
        <h3 className='driver-info'>Nominee Information</h3>
        <div className='driver-info'>
        <div>
          <label>Nominee Name:</label>
          <input type="text" name="nomineeName" required />
        </div>
        <div>
          <label>Nominee's Date of Birth:</label>
          <input type="date" name="nomineeDob" required />
        </div>
        <div>
              <label>Gender:</label>
              <select name="nomineegender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
        <div>
          <label>Relationship with Deceased:</label>
          <input type="text" name="relationshipWithDeceased" required />
        </div>
        <div>
          <label>Current Address:</label>
          <input type="text" name="currentAddress" required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" required />
        </div>
      </div>
      </div>
      {/* Illness Information */}
      <div>
        <h3 className='accident-info'>Illness Information</h3>
        <div className='accident-info'>
        <div>
          <label>Illness:</label>
          <input type="text" name="illness" required />
        </div>
        <div>
          <label>Date of Diagnosis:</label>
          <input type="date" name="dateOfDiagnosis" required />
        </div>
        <div>
          <label>Treatment Taken:</label>
          <input type="text" name="treatmentTaken" required />
        </div>
        <div>
          <label>FIR:</label>
          <input type="file" name="fir" />
        </div>
        <div>
          <label>Doctor Name:</label>
          <input type="text" name="doctorName" required />
        </div>
        <div>
          <label>Hospital Name:</label>
          <input type="text" name="hospitalName" required />
        </div>
        <div>
          <label>Hospital Address:</label>
          <input type="text" name="hospitalAddress" required />
        </div>
        <div>
          <label>Do you have any other policy?</label>
          <input type="text" name="otherPolicy" required />
        </div>
      </div>
      </div>
      {/* Bank Account Details */}
      <div>
        <h3 className='bank-details'>Bank Account Details</h3>
        <div className='bank-details'>
        <div>
          <label>Account Number:</label>
          <input type="text" name="accountNumber" required />
        </div>
        <div>
          <label>Bank Name:</label>
          <input type="text" name="bankName" required />
        </div>
        <div>
          <label>PAN:</label>
          <input type="text" name="pan" required />
        </div>
        <div>
          <label>IFSC Code:</label>
          <input type="text" name="ifscCode" required />
        </div>
      </div>
      </div>
          </>
        );
      case 'travel':
        return (
          <>
            <h3 className='personal-info'>Personal Information</h3>
            <div className='personal-info'>
            <div>
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Date of Birth:</label>
              <input type="date" name="dob" required />
            </div>
            <div>
              <label>Gender:</label>
              <select name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label>Nationality:</label>
              <input type="text" name="nationality" required />
            </div>
            <div>
              <label>Passport Number:</label>
              <input type="text" name="passportNumber" required />
            </div>
            <div>
              <label>Phone Number:</label>
              <input type="text" name="phoneNumber" required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Address:</label>
              <textarea name="address" required></textarea>
            </div>
            <div>
              <label>Policy Number:</label>
              <input type="text" name="policyNumber" required />
            </div>
            <div>
              <label>Policy Start Date:</label>
              <input type="date" name="policyStartDate" required />
            </div>
            <div>
              <label>Policy End Date:</label>
              <input type="date" name="policyEndDate" required />
            </div>
            <div>
              <label>Insurance Company:</label>
              <input type="text" name="insuranceCompany" required />
            </div>
            <div>
              <label>Agent/Broker Name:</label>
              <input type="text" name="agentBrokerName" required />
            </div>

            <h3 className='driver-info'>Travel Information</h3>
            <div className='driver-info'>
            <div>
              <label>Departure Date:</label>
              <input type="date" name="departureDate" required />
            </div>
            <div>
              <label>Return Date:</label>
              <input type="date" name="returnDate" required />
            </div>
            <div>
              <label>Destination:</label>
              <input type="text" name="destination" required />
            </div>
            <div>
              <label>Purpose of Travel:</label>
              <select name="purposeOfTravel" required>
                <option value="business">Business</option>
                <option value="pleasure">Pleasure</option>
              </select>
            </div>
            <div>
              <label>Type of Claim:</label>
              <select name="typeOfClaim" required>
                <option value="medical expenses">Medical Expenses</option>
                <option value="ticket refund">Ticket Refund</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label>Description of Incident:</label>
              <textarea name="descriptionOfIncident" required></textarea>
            </div>
            <div>
              <label>Total Amount Claimed:</label>
              <input type="text" name="totalAmountClaimed" required />
            </div>
            <div>
              <label>Supporting Documents:</label>
              <input type="file" name="supportingDocuments" />
            </div>
            </div>
            <h3 className='bank-details'>Bank Account Details</h3>
            <div className='bank-details'>
            <div>
            </div>
              <label>Account Holder Name:</label>
              <input type="text" name="accountHolderName" required />
            </div>
            <div>
              <label>Bank Name:</label>
              <input type="text" name="bankName" required />
            </div>
            <div>
              <label>Account Number:</label>
              <input type="text" name="accountNumber" required />
            </div>
            <div>
              <label>IFSC Code:</label>
              <input type="text" name="ifscCode" required />
            </div>
            </div>
            <h3 className='accident-info'>Declaration</h3>
            <div className='accident-info'>
            <div>
              <p>
                I hereby declare that the information provided above is true and accurate to the best of my knowledge. I understand that any false or misleading information may result in the denial of my claim.
              </p>
              <div>
                <label>Signature of Policyholder:</label>
                <input type="text" name="signature" required />
              </div>
              <div>
                <label>Date:</label>
                <input type="date" name="declarationDate" required />
              </div>
            </div>
            </div>
          </>
        );
      default:
        return <p>No insurance type selected.</p>;
    }
  };

  return (
    <div className="claim-form">
      <h2>{insuranceType.charAt(0).toUpperCase() + insuranceType.slice(1)} Insurance Claim Form</h2>
      <form onSubmit={handleSubmit}>
        {renderFormFields()}
        <div className="button-container">
        <button type="submit">Submit Claim</button>
        </div>
      </form>
    </div>
  );
};

export default ClaimForm;
