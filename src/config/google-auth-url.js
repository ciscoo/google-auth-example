// https://developers.google.com/identity/protocols/googlescopes#oauth2v2
const scope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
];

// https://developers.google.com/identity/protocols/OpenIDConnect#id_token-hd
const hd = process.env.AUTHORIZED_DOMAIN;

// Examine the interface for a full list of options.
// https://github.com/google/google-auth-library-nodejs/blob/master/ts/lib/auth/oauth2client.ts#L29
const options = {
  scope,
  hd,
};

module.exports = options;
