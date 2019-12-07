const mongoose = require('mongoose');

const Boardroom = new mongoose.Schema({
    id: Number,
    users: [{ id: Number }],
    polls: [{ id: Number }],
});

module.exports = mongoose.model('boardroom', Boardroom, 'boardroom');
