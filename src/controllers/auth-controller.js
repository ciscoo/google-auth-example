const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');

exports.authSuccess = async (req, res) => {
  const { user } = req;
  const token = jwt.sign(user, jwtConfig.secret, jwtConfig.options);
  res.json({ token });
};
