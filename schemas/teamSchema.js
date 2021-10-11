const { Schema } = require('mongoose');
const Projects = require("./projectSchema");
const Users = require("./userSchema");

module.exports = new Schema({
    name: String,
    projects: [Projects],
    members: [Users]
});
