const mongoose = require('mongoose');
const User = require('../models/user');
const repository = {};
const bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
const jwt = require('jsonwebtoken');
const config = require('../../config').secret;
repository.hashPassword = (password) => {
    let hash = bcrypt.hashSync(password, 10);
    return hash;
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
repository.authUser = async (email, password) => {
    const foundUser = await repository.getUser(email);
    console.log(foundUser);
    console.log(password, 'vs', foundUser.password);
    if (bcrypt.compareSync(password, foundUser.password)) {
        const payload = {
            user: foundUser.username,
            role: foundUser.role,
            email: foundUser.email,
        };
        const options = { expiresIn: '2d' };
        const secret = config;
        const token = jwt.sign(payload, secret, options);
        return token;
    } else {
        return {
            status: 403,
            success: false,
            message: 'Incorrect username or password',
        };
    }
};

repository.getUser = async (userEmail) => {
    return User.findOne({ email: userEmail }).catch((error) => ({ error }));
};

module.exports = repository;
