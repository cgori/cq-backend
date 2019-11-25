const repository = require('../repository/user');
const controller = {};

// Get user
controller.get = async (req, res) => {
    const user = await repository.getUser(req.params.id);
    res.json(user);
};

const controller = {};

controller.getUser = async (req, res) => {
    const user = await repository.getUserByUsername(req.params.username);

    res.json(user);
};

module.exports = controller;
