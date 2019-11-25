const repository = require('../repository/user');
const controller = {};
const user = require('../models/user');
// Get user
controller.getUser = async (req, res) => {
    const user = await repository.getUserByUsername(req.params.username);
    res.json(user);
};

controller.getUsers = async (req, res) => {
    const user = await repository.getAllUsers(req.params.username);

    res.json(user);
};

controller.registerUser = async (req, res) => {
    const username = req.body.username,
        password = req.body.password;
    const auth = await repository.authUser(username, password);
    res.json(auth);
};

module.exports = controller;
