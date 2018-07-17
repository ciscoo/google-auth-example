// https://developers.google.com/identity/protocols/googlescopes#oauth2v2
const scope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
];

// https://developers.google.com/identity/protocols/OpenIDConnect#id_token-hd
const hd = process.env.AUTHORIZED_DOMAIN;

// Examine the interface for a full list of options.
// https://github.com/google/google-auth-library-nodejs/blob/9b374457367776080d04c05b913c29ada5673ba7/src/auth/oauth2client.ts#L129
const options = {
  scope,
  hd,
};

module.exports = options;
