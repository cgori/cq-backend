const mongoose = require('mongoose');
const User = require('../models/user');
const repository = {};

repository.getUser = async (userName) => {
    return User.findOne({ username: userName }).catch((error) => ({ error }));
};

repository.createUser = async (id, data) => {
    return mongoose.create({ id, data });
};

repository.updateUser = (id, data) => {
    return mongoose.findOneAndUpdate({ id }, data);
};

repository.getUserByUsername = (username) => {
    return User.findOne({ username }).catch((error) => ({ error }));
};

repository.getAllUsers = async () => {
    return User.find({}).catch((error) => ({ error }));
};

repository.authUser = async (paramUser, paramPass) => {
    // attempt to authenticate user
};

module.exports = repository;
