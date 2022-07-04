const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneModel = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		release_date: {
			type: Date,
			required: false,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = phoneModel;
