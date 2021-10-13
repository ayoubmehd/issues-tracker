var express = require('express');
var router = express.Router();
const Team = require('./../../models/Team');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send("issues");
});

router.post('/:teamId/projects/:projectId/issues', async function (req, res, next) {


    const team = await Team.findById(req.params.teamId);
    const project = await team.projects.id(req.params.projectId);

    const issue = {
        ...req.body,
        tirggeredAt: new Date()
    };

    project.issues.push(issue);

    await team.save();

    res.json(issue);
});

module.exports = router;
