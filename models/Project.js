const { Schema, model } = require('mongoose');
const schema = require("../schemas/projectSchema")

module.exports = model('Project', schema);
