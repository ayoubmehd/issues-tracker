const { Schema, model } = require('mongoose');
const schema = require("./../schemas/userSchema");

module.exports = model('User', schema);
