// // server/controllers/verifyController.js

const { VehicleInsurance } = require('../models/InsuranceModel.js');

const verifyUser = async (req, res) => {
  const { name, phoneNumber, insuranceCompany, insuranceType } = req.body;

  let InsuranceModel;
  if (insuranceType === 'vehicle') {
    InsuranceModel = VehicleInsurance;
  }
  // Add logic for other types (health, life, etc.)

  try {
    const policy = await InsuranceModel.findOne({ name, phoneNumber, insuranceCompany });
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
