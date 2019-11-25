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
    var testUser = new User({
        username: paramUser,
        password: paramPass,
    });
    testUser.save(function(err) {
        if (err) return JSON.parse('{"err":"User already exists"}');
        console.log('shouldnt get here');

        // attempt to authenticate user
        User.getAuthenticated(paramUser, paramPass, function(err, user, reason) {
            if (err) return JSON.parse('{"err":"User already exists"}');

            // login was successful if we have a user
            if (user) {
                // handle login success
                console.log('login success');
                return;
            }

            // otherwise we can determine why we failed
            var reasons = User.failedLogin;
            switch (reason) {
                case reasons.NOT_FOUND:
                case reasons.PASSWORD_INCORRECT:
                    // note: these cases are usually treated the same - don't tell
                    // the user *why* the login failed, only that it did
                    break;
                case reasons.MAX_ATTEMPTS:
                    // send email or otherwise notify user that account is
                    // temporarily locked
                    break;
            }
        });
    });
};

module.exports = repository;
