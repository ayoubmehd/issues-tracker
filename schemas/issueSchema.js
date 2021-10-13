const { Schema } = require('mongoose');

module.exports = new Schema({
    message: String,
    line: Number,
    trace: { type: Array, of: String },
    tirggeredAt: Date
});