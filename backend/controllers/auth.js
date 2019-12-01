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

controller.proctectRoute = function(req, res, next) {
    // if user exists the token was sent with the request
    if (req.user) {
        //if user exists then go to next middleware
        next();
    }
    // token was not sent with request send error to user
    else {
        res.status(500).json({ error: 'login is required' });
    }
};

module.exports = controller;
