const express = require('express');
const router = express.Router();
const {
	getPhones,
	getPhone,
	createPhone,
	deletePhone,
} = require('../controllers/phoneController');

router.get('/', getPhones);
router.get('/:id', getPhone);
router.post('/', createPhone);
router.delete('/:id', deletePhone);
module.exports = router;
