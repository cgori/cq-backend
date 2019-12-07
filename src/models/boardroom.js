const mongoose = require('mongoose');

const Boardroom = new mongoose.Schema({
    id: Number,
    users: [{ id: Number }],
    polls: [
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

module.exports = mongoose.model('boardroom', Boardroom, 'boardroom');
