const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../database/models');

/**
 * Options object for `GoogleStrategy`. See the internal constructor definition for available
 * options: https://github.com/jaredhanson/passport-google-oauth2/blob/master/lib/strategy.js#L47
 */
const googleStrategyOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
};

/**
 * Upon successful authentication, handle the response here. For this example we are looking the
 * user up in the database. If they do not exist then they are created.
 *
 * Remember error handling is handled by the error handling middleware.
 *
 * @param {string} accessToken Access token.
 * @param {string} refreshToken Refresh token to use to obtain a new access token.
 * @param {object} profile The Google or OpenID profile.
 * @param {function} done Callback function.
 */
async function processSuccessfulGoogleAuth(accessToken, refreshToken, profile, done) {
  // This is a private property on the profile object. Use with caution.
  // https://github.com/jaredhanson/passport-google-oauth2/blob/master/lib/strategy.js#L120
  //
  // The hosted G Suite domain of the user. Provided only if the user belongs to a hosted domain.
  //
  // eslint-disable-next-line no-underscore-dangle
  const { hd } = profile._json;

  if (!hd) {
    throw new Error('Unsupported login credentials.');
  }

  if (hd !== process.env.AUTHORIZED_DOMAIN) {
    throw new Error('Unauthorized domain.');
  }

  let user = await User.findOne({ profileId: profile.id }).exec();

  if (!user) {
    const document = {
      profileId: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
    };

    user = await new User(document).save();
  }

  done(null, user);
}

module.exports = {
  googleStrategy: new GoogleStrategy(googleStrategyOptions, processSuccessfulGoogleAuth),
};
