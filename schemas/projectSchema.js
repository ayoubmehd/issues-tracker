const { Schema } = require('mongoose');
const Issues = require('./issueSchema');

module.exports = new Schema({
    token: { type: String, required: true },
    issues: [Issues]
}, { timestamps: true });