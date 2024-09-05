const User = require('../models/User');
const bcrypt = require('bcrypt'); 
// Signup logic
exports.signupUser = async (req, res) => {
  const { userType, name, phone, email, password} = req.body;

  // Simple validation (you can add more validation as needed)
  if (!userType || !name || !phone || !email) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    // Create a new user instance
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ userType, name, phone, email,password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Respond with success
    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, message: 'Failed to register user' });
  }
};
