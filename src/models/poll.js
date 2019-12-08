const mongoose = require('mongoose');

const poll = new mongoose.Schema({
    poll: [
        {
            id: Number,
            patient: { allergy: String, drugs: String, desc: String },
            title: String,
            description: String,
            options: [{ title: String, votes: Number }],
        },
    ],
});

module.exports = mongoose.model('poll', poll, 'poll');
