const { authenticate } = require('passport');
const express = require('express');
const { googleOauth2Config } = require('../config');
const { authController } = require('../controllers');

const router = express.Router();

router.get('/', authenticate('google', googleOauth2Config), authController.authSuccess);

module.exports = router;
