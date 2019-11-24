const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    title: String,
    specialization: String,
    username: String,
    password: String,
});

const user = mongoose.model('user', userSchema);
module.exports = user;
