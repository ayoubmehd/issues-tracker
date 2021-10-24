var express = require('express');
var router = express.Router();
const Team = require('./../../models/Team');
const issueController = require('../../controllers/api/IssueController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send("issues");
});

router.post('/project/:projectToken/issues', issueController.create);

module.exports = router;
