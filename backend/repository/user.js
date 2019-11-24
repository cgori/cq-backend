const User = require('../models/user');

const repository = {};

repository.getUserByUsername = (username) => {
    return User.findOne({ username }).catch((error) => ({ error }));
};

module.exports = repository;
