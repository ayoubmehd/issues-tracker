var express = require('express');
var router = express.Router();
const Team = require("../models/Team");

// Just for testing
const rand = () => Math.random(0).toString(36).substr(2);
const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);

/* GET home page. */
router.get('/', async function (req, res, next) {

  const team = await Team.findById('6166250e9ed47e549707836c')

  team.projects.push({
    token: token(60)
  });

  await team.save();

  res.json(team);
});

module.exports = router;
