// // server/controllers/verifyController.js

const { VehicleInsurance, HealthInsurance, LifeInsurance, TravelInsurance } = require('../models/InsuranceModel.js');

const verifyUser = async (req, res) => {
  const { name, phoneNumber, insuranceCompany, insurancePolicyid, insuranceType } = req.body;

  let InsuranceModel;
  switch (insuranceType) {
    case 'vehicle':
      InsuranceModel = VehicleInsurance;
      break;
    case 'health':
      InsuranceModel = HealthInsurance;
      break;
    case 'life':
      InsuranceModel = LifeInsurance;
      break;
    case 'travel':
      InsuranceModel = TravelInsurance;
      break;
    default:
      return res.status(400).json({ success: false, message: 'Invalid insurance type.' });
  }

  try {
    const policy = await InsuranceModel.findOne({ name, phoneNumber, insuranceCompany,insurancePolicyid });
    if (policy) {
      res.json({ success: true, message: `${insuranceType.charAt(0).toUpperCase() + insuranceType.slice(1)} insurance in ${insuranceCompany} for Mr/Ms ${name} exists.` });
    } else {
      res.json({ success: false, message: 'No matching policy found.' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred while verifying the user.' });
  }
};

module.exports = { verifyUser };
