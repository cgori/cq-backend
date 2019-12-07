const repository = require('../repository/user');

const controller = {};

controller.getUser = async (req, res, next) => {
    const user = await repository.getUser(req.params.id);

    res.json({ success: true, user });
};

controller.getAllUsers = async (req, res, next) => {
    const users = await repository.getAllUsers();

    res.json({ success: true, users });
};

module.exports = controller;
