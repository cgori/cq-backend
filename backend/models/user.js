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

module.exports = mongoose.model('user', userSchema, 'user'); // kinda cringe tbh
