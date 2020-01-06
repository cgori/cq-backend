const mongoose = require('mongoose');

const poll = new mongoose.Schema({
    patient: { allergy: String, drugs: String, desc: String, age: Number },
    question: String,
    description: String,
    options: [{ title: String, votes: Number }],
    status: String,
    votedUsers: [],
});

module.exports = mongoose.model('poll', poll, 'poll');
