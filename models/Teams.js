const { Schema, model } = require('mongoose');
const Projects = require("./Projects");

module.exports = new Schema({
    name: String,
    projects: [Projects],
    members: [Users]
});

module.exports = model('Users', userSchema);
