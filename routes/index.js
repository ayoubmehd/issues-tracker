var express = require('express');
var router = express.Router();
const User = require("../models/User");

/* GET home page. */
router.get('/', async function (req, res, next) {

  const user = new User({ name: "Hassan" });

  await user.save();

  res.json(user);
});

module.exports = router;
