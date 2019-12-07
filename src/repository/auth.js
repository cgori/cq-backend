const config = require('../../config').secret;
const User = require('../models/user');

const crypto = require('crypto'); // Module part of Node.js
const JWT = require('jsonwebtoken');

const repository = {};

repository.hashPassword = (password) => {
    return crypto
        .createHash('md5')
        .update(password)
        .digest('hex');
};

repository.authenticateUser = async (email, password) => {
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

module.exports = repository;
