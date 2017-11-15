module.exports = {
  secret: process.env.JWT_SECRET,
  options: {
    expiresIn: '1h',
    issuer: process.env.PRODUCTION_URL,
  },
};
