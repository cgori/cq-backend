const repository = require('../repository/user');
const controller = {};

// Get user
controller.get = (req, res) => {
    repository.getUser(req.params.id);
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
