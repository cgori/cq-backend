const mongoose = require('mongoose');
const Boardroom = new mongoose.Schema({
    title: { required: true, type: String, index: { unique: true } },
    users: [String],
    polls: [String],
});

module.exports = mongoose.model('boardroom', Boardroom, 'boardroom');
