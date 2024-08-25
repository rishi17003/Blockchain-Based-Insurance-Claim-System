const express = require('express');
const router = express.Router();
const InsuranceModel = require('../models/InsuranceModel');

router.post('/verify-user', async (req, res) => {
    const { name, phoneNumber, insuranceCompany } = req.body;
    console.log(`Request received with data:`, { name, phoneNumber, insuranceCompany });

    try {
        const user = await InsuranceModel.findOne({
            name,
            phoneNumber,
            insuranceCompany
        });
        console.log(`Database query result:`, user);

        if (user) {
            res.json({ success: true, message: `Insurance in ${user.insuranceCompany} for Mr. ${user.name} exists.` });
        } else {
            res.json({ success: false, message: 'User not found.' });
        }
    } catch (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});


module.exports = router;
