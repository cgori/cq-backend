const mongoose = require('mongoose');
const User = require('../models/user');
const repository = {};
const bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
const jwt = require('jsonwebtoken');
const config = require('../../config').secret;
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
repository.hashPassword = (password) => {
    let hash = bcrypt.hashSync(password, 10);
    return hash;
};

repository.authUser = async (username, password) => {
    const foundUser = await repository.getUser(username);
    console.log(foundUser.password);
    if (bcrypt.compareSync(password, foundUser.password)) {
        let token = jwt.sign({ username: username }, config, {
            expiresIn: '24h', // expires in 24 hours
        });
        return token;
    } else {
        return {
            status: 403,
            success: false,
            message: 'Incorrect username or password',
        };
    }
};

repository.validateUser = async (body) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const userNameRegex = /^[a-zA-Z0-9]+$/;
    if (emailRegex.test(String(body.email).toLowerCase())) {
        if (userNameRegex.test(String(body.username).toLowerCase())) {
            return true;
        }
    }
};

module.exports = repository;
