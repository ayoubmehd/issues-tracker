const { Schema } = require('mongoose');
const Issues = require('./issueSchema');

module.exports = new Schema({
    token: String,
    issues: [Issues]
});