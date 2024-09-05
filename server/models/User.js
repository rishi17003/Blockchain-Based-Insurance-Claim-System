const mongoose = require('mongoose');

// Define a schema for user
const userSchema = new mongoose.Schema({
  userType: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
