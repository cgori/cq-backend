const repository = require('../repository/user');
const controller = {};
const UserModel = require('../models/user');
const auth = require('../services/authToken.js');
// Get user
controller.getUser = async (req, res) => {
    const user = await repository.getUserByUsername(req.params.username);
    res.json(user);
};

controller.getUsers = async (req, res) => {
    const user = await repository.getAllUsers(req.params.username);

    res.json(user);
};

module.exports = controller;
