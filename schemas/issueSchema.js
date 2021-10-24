const { Schema } = require('mongoose');

module.exports = new Schema({
    message: { type: String, required: true },
    line: { type: Number, required: true },
    trace: { type: Array, of: String },
    tirggeredAt: Date
}, { timestamps: true });