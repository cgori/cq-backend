const mongoose = require('mongoose');
const Boardroom = new mongoose.Schema({
    title: { required: true, type: String, index: { unique: true } },
    users: [{ id: Number }],
    polls: [
        {
            pollID: Number,
            patient: { allergy: String, drugs: String, desc: String, age: Number },
            title: String,
            description: String,
            options: [{ optionID: { required: true, type: Number }, title: String, votes: Number }],
            status: String,
        },
    ],
    boardroomID: { required: true, type: Number, index: { unique: true } },
});

module.exports = mongoose.model('boardroom', Boardroom, 'boardroom');
