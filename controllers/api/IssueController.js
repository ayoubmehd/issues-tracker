/**
 * API issue controller
 */

 const Team = require('./../../models/Team');
const Project = require('./../../models/Project');

/**
 * Store an issue inside of project
 *
 * @param req Request
 * @param res Responce
 */
const create = async function (req, res) {
    const issue = {
        ...req.body,
        tirggeredAt: new Date()
    };

    // Find the project inside of teams and add the issue to it
    const team = await Team.findOneAndUpdate({
        'projects': {
            $elemMatch : {
                'token': req.params.projectToken
            }
        }
    }, {
        $push: {
            'projects.$.issues': issue
        }
    });

    res.json(issue);
};

module.exports = { create }