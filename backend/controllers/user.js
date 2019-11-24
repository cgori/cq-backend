const repository = require('../repository/user');

const controller = {};

controller.getUser = async (req, res) => {
    const user = await repository.getUserByUsername(req.params.username);

    res.json(user);
};

module.exports = controller;
