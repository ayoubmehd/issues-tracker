var express = require('express');
var router = express.Router();
const Team = require("../models/Team");

// Just for testing
const rand = () => Math.random(0).toString(36).substr(2);
const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);

/* GET home page. */
router.get('/', async function (req, res, next) {

  let team = await Team.findOne({ name: 'Alpha' });

  if (!team)
    team = new Team({ name: 'Alpha' });
  
  team.projects.push({
    token: token(60)
  });

  await team.save();

  res.json(team);
});

module.exports = router;
