import React from 'react';
import './claim_form.css';
import { useParams } from 'react-router-dom';

const ClaimForm = () => {
  const { insuranceType } = useParams();

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
            <div>
              <label>Make:</label>
              <input type="text" name="make" required />
            </div>
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
              <select name="gender" required>
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
          <input type="tel" name="phoneNumber" required />
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
          <input type="text" name="fir" required />
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
        <div>
          <label>Supporting Documents:</label>
          <input type="file" name="supportingDocuments" />
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
      <form>
        {renderFormFields()}
        <div className="button-container">
        <button type="submit">Submit Claim</button>
        </div>
      </form>
    </div>
  );
};

export default ClaimForm;
