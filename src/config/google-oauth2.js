// https://developers.google.com/identity/protocols/googlescopes#oauth2v2
const scope = [
  'https://www.googleapis.com/auth/userinfo.profile',
];

// http://www.passportjs.org/docs#disable-sessions
const session = false;

module.exports = { scope, session };
