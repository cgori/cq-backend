const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    title: String,
    specialization: String,
    username: String,
    password: String,
});

const user = mongoose.model('user', userSchema, 'user');
module.exports = user;
