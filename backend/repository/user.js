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

repository.deleteUser = (id) => {
    return mongoose.findOneAndDelete({ id });
};

module.exports = repository;
