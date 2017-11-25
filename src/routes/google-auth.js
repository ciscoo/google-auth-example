const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

router.get('/', authController.authenticate);
router.get('/callback', authController.successOrFail);

module.exports = router;
