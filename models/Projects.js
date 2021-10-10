const { Schema } = require('mongoose');
const Issues = require('./Issues');

module.exports = new Schema({
    token: String,
    issues: [Issues]
});

