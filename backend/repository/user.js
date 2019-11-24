const mongoose = require('mongoose');
const User = require('../models/user');
const repository = {};

repository.getUser = async (userName) => {
    console.log(userName);
    const data = await User.findOne({ username: userName });

    console.log(data);
};

repository.createUser = (id, data) => {
    return mongoose.create({ id, data });
};

repository.updateUser = (id, data) => {
    return mongoose.findOneAndUpdate({ id }, data);
};

repository.deleteUser = (id) => {
    return mongoose.findOneAndDelete({ id });
};

module.exports = repository;
