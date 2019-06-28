const express = require('express');
const router = express.Router();

const { status } = require('../controllers/status')
const { token, testToken } = require('../controllers/auth')

router.get('/', status);
router.get('/token', token)

module.exports = router;