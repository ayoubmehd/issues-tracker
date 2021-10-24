const { Schema } = require('mongoose');
const Projects = require("./projectSchema");
const Users = require("./userSchema");

module.exports = new Schema({
    name: { type: String, required: true },
    projects: [Projects],
    members: [Users]
}, { timestamps: true });
