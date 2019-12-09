const mongoose = require('mongoose');

const Boardroom = new mongoose.Schema({
    boardroomID: Number,
    users: [{ id: Number }],
    polls: [{ id: Number }],
});

module.exports = mongoose.model('boardroom', Boardroom, 'boardroom');
