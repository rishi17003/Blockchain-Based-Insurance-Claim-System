// models/Claim.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const claimSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  insuranceType: { type: String, required: true },
  companyName: { type: String, required: true },
  policyNumber: { type: String, required: true },
  ClaimStatus:{type:String, default:"Submitted"},
  dateFiled: { type: Date, default: Date.now },
});

const Claim = mongoose.model('Claim', claimSchema);
module.exports = Claim;
