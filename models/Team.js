const { Schema, model } = require('mongoose');
const schema = require("../schemas/teamSchema")

module.exports = model('Team', schema);
