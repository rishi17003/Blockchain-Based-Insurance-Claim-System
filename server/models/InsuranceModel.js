const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    insuranceCompany: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    policyStatus: { type: String, required: true } // Example field
});


const InsuranceModel = mongoose.model('InsuranceModel', insuranceSchema, 'vehicle_insurance');

module.exports = InsuranceModel;
