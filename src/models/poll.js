const mongoose = require('mongoose');

const poll = new mongoose.Schema({
    patient: { allergy: String, drugs: String, desc: String, age: Number },
    question: String,
    description: String,
    options: [{ title: String, votes: { type: Number, default: 0 } }],
    status: String,
    votedUsers: [],
    boardroomID: String,
});

module.exports = mongoose.model('poll', poll, 'poll');
