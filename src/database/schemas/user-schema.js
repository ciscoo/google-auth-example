const { Schema } = require('mongoose');

const definition = {
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
};

const options = {
  timestamps: true,
};

module.exports = new Schema(definition, options);
