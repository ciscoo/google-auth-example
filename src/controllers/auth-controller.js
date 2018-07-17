const oAuth2Client = require('../google-oauth2-client');

const { googleAuthUrlOpts } = require('../config')

exports.authenticate = (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl(googleAuthUrlOpts);
  res.redirect(authUrl);
};

exports.successOrFail = async (req, res) => {
  const { code, error } = req.query;

  if (error) {
    res.status(401).json({
      status: 401,
      error: {
        message: error,
      },
    });
  }

  const tokens = await new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, tokenz) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokenz);
    });
  });

  res.json({ ...tokens });
};
