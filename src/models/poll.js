const mongoose = require('mongoose');

const poll = new mongoose.Schema({
    pollID: Number,
    patient: { allergy: String, drugs: String, desc: String },
    title: String,
    description: String,
    options: [{ title: String, votes: Number }],
    status: String,
});

module.exports = mongoose.model('poll', poll, 'poll');
