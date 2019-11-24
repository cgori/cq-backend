const mongoose = require('mongoose');

const repository = {};

repository.getPost = (id) => {
    return mongoose.findOne({ id });
};

repository.createPost = (id, data) => {
    return mongoose.create({ id, data });
};

repository.updatePost = (id, data) => {
    return mongoose.findOneAndUpdate({ id }, data);
};

repository.deletePost = (id) => {
    return mongoose.findOneAndDelete({ id });
};

module.exports = repository;
