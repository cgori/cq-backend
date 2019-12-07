const util = require('../util/auth');

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    title: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, dropDups: true },
    username: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
});

// this = user document
UserSchema.pre('save', function(next) {
    if (this.isModified('password')) this.password = util.hashPassword(this.password);

    next();
});

module.exports = mongoose.model('user', UserSchema, 'user');
