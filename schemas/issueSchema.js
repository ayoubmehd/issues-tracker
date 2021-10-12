const { Schema } = require('mongoose');

module.exports = new Schema({
    message: Object,
    tirggeredAt: Date
});