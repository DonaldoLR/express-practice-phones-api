const Phone = require('../models/phoneModel');
const mongoose = require('mongoose');

// GET all phones
const getPhones = async (req, res) => {
	const phones = Phone.find({}).sort({ createdAt: -1 });
	res.status(200).json({ message: 'working' });
};
// GET a single phone

// CREATE a new phone

// DELETE a phone

// UPDATE a phone

module.exports = {
	getPhones,
};
