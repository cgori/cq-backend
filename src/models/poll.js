const mongoose = require('mongoose');

const poll = new mongoose.Schema({
    poll: {
        pollID: Number,
        patient: { allergy: String, drugs: String, age: Number, desc: String },
        title: String,
        status: String,
        desc: String,
        options: [{ title: String, votes: Number }],
    },
});

module.exports = mongoose.model('poll', poll, 'poll');
