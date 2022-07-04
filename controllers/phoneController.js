const Phone = require('../models/phoneModel');
const mongoose = require('mongoose');

// GET all phones
const getPhones = async (req, res) => {
	const phones = await Phone.find({}).sort({ createdAt: -1 });
	res.status(200).json(phones);
};
// GET a single phone
const getPhone = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such phone' });
	}

	const phone = Phone.findById(id);

	if (!phone) {
		return res.status(404).json({ error: 'No such phone' });
	}

	res.status(200).json(phone);
};
// CREATE a new phone
const createPhone = async (req, res) => {
	const { name, release_date, price } = req.body;

	try {
		const newPhone = await Phone.create({ name, release_date, price });

		res.status(200).json({ newPhone });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
// DELETE a phone
const deletePhone = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such phone' });
	}

	const phone = await Phone.findByIdAndDelete(id);

	if (!phone) {
		return res.status(404).json({ error: 'No such phone' });
	}

	res.status(200).json({ message: 'Phone deleted', phone });
};
// UPDATE a phone
const updatePhone = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such phone' });
	}

	const updatedPhone = await Phone.findByIdAndUpdate(id, {
		...req.body,
	});

	if (!updatePhone) {
		return res.status(404).json({ error: 'No such phone' });
	}

	res.status(200).json(updatedPhone);
};
module.exports = {
	getPhones,
	getPhone,
	createPhone,
	deletePhone,
	updatePhone,
};
