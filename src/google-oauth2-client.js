const GoogleAuth = require("google-auth-library");

const { OAuth2 } = new GoogleAuth();
const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CALLBACK_URL
);

module.exports = oauth2Client;
