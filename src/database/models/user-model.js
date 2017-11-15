const { Model } = require('mongoose');
const { userSchmea } = require('../schemas');

module.exports = new Model('User', userSchmea);
