const express = require('express');
const router = express.Router();
const {
	getPhones,
	getPhone,
	createPhone,
	deletePhone,
	updatePhone,
} = require('../controllers/phoneController');

router.get('/', getPhones);
router.get('/:id', getPhone);
router.post('/', createPhone);
router.delete('/:id', deletePhone);
router.patch('/:id', updatePhone);
module.exports = router;
