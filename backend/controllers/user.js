const repository = require('../repository/user');
const controller = {};

// Get user
controller.get = async (req, res) => {
    const user = await repository.getUser(req.params.id);
    res.json(user);
};

// Create user
controller.create = (req, res) => {
    // your code...
};

// Update user
controller.update = (req, res) => {
    // your code...
};

// Delete user
controller.delete = (req, res) => {
    // your code...
};

module.exports = controller;
