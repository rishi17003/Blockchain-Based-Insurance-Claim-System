const express = require('express');
const { signupUser } = require('../controllers/signupController');

const router = express.Router();

// Define the signup route
router.post('/signup', signupUser);

module.exports = router;
