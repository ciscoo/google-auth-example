const oAuth2Client = require('../google-oauth2-client');

const { googleAuthUrlOpts } = require('../config')

exports.authenticate = (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl(googleAuthUrlOpts);
  res.redirect(authUrl);
};

exports.successOrFail = async (req, res) => {
  // https://developers.google.com/identity/protocols/OAuth2WebServer#handlingresponse
  // Google will make a HTTP GET request to your callback URL with `code` or `error` in the query string.
  const { code, error } = req.query;

  // We can't infer the correct HTTP status from the error since we don't
  // have a list of possible errors. So we default to 500 Internal Server Error.
  if (error) {
    res.status(500).json({ error });
  }


  try {
    const { tokens } = await oAuth2Client.getToken(code)
    res.json({...tokens})
  } catch (err) {
    res.status(500).json({...err})
  }
};
