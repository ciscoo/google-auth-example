const express = require('express');
const googleAuthRoutes = require('./google-auth')

const router = express.Router();

router.use('/google', googleAuthRoutes);

module.exports = router;
