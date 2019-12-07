const mongoose = require('mongoose');

const poll = new mongoose.Schema({
    poll: [
        {
            id: Number,

            patient: { allergy: String, drugs: String, desc: String },

            questions: [
                {
                    id: Number,
                    title: String,
                    description: String,

                    options: [{ title: String, votes: Number }],
                },
            ],
        },
    ],
});

module.exports = mongoose.model('poll', poll, 'poll');
