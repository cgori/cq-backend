const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const Boardroom = new Schema({
    Boardrooms: [
        {
            id: Number,
            users: [
                {
                    id: Number,
                    firstName: String,
                    lastName: String,
                    title: String,
                    specialization: String,
                },
            ],
            polls: [
                {
                    id: Number,

                    patient: {
                        allergy: String,
                        drugs: String,
                    },

                    questions: [
                        {
                            title: String,
                            description: String,

                            options: [
                                {
                                    title: String,
                                    votes: Number,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
});

module.exports = mongoose.model('boardroom', Boardroom, 'boardroom');
