const mongoose = require('mongoose');
const Boardroom = new mongoose.Schema({
    title: { required: true, type: String, index: { unique: true } },
    boardroomID: { required: true, type: Number, index: { unique: true } },
    users: [{ type: String, index: { unique: true } }],
    polls: [Number],
});

module.exports = mongoose.model('boardroom', Boardroom, 'boardroom');
