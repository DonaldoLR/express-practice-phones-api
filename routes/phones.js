const express = require('express');
const router = express.Router();
const { getPhones } = require('../controllers/phoneController');

router.get('/', getPhones);

module.exports = router;
