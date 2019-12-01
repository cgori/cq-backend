const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10,
    // these values can be whatever you want - we're defaulting to a
    // max of 5 attempts, resulting in a 2 hour lock
    MAX_LOGIN_ATTEMPTS = 5,
    LOCK_TIME = 2 * 60 * 60 * 1000;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true, index: { unique: true } },
    title: String,
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema, 'user');
