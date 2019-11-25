const mongoose = require('mongoose');
const user = require('../models/user');
const repository = {};

repository.getUser = async (userName) => {
    return user.findOne({'username': userName }).catch((error) => ({ error }));
};

repository.createUser = async(id, data) => {

    return mongoose.create({ id, data });
};

repository.updateUser = (id, data) => {
    return mongoose.findOneAndUpdate({ id }, data);
};

repository.getUserByUsername = (username) => {
    return User.findOne({ username }).catch((error) => ({ error }));
};

module.exports = repository;
