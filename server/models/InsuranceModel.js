const mongoose = require('mongoose');
// const { verifyUser } = require('../controllers/verifyController');

const insuranceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    insuranceCompany: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    policyStatus: { type: String, required: true },
    insurancePolicyid:{type: String, required:true}
});

// Ensure the collection name is correct
const VehicleInsurance = mongoose.model('InsuranceModel', insuranceSchema, 'vehicle_insurance');

const HealthInsurance = mongoose.model('HealthInsurance', insuranceSchema, 'health_insurance');

const LifeInsurance = mongoose.model('LifeInsurance', insuranceSchema, 'life_insurance');

const TravelInsurance = mongoose.model('TravelInsurance', insuranceSchema, 'travel_insurance');

module.exports = { VehicleInsurance, HealthInsurance, LifeInsurance, TravelInsurance };


// // server/models/InsuranceModel.js

// const mongoose = require('mongoose');

// const insuranceSchema = new mongoose.Schema({
//   name: String,
//   phoneNumber: String,
//   insuranceCompany: String,
//   policyStatus: String,
// });

// const VehicleInsurance = mongoose.model('VehicleInsurance', insuranceSchema);
// // Add models for other insurance types (HealthInsurance, LifeInsurance, etc.)

// module.exports = { VehicleInsurance };
