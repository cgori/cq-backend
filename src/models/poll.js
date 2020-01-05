const mongoose = require('mongoose');

const poll = new mongoose.Schema({
    pollID: { required: true, type: Number, unique: true },
    patient: { allergy: String, drugs: String, desc: String, age: Number },
    title: String,
    description: String,
    options: [{ optionID: { required: true, type: Number }, title: String, votes: Number }],
    status: String,
});

module.exports = mongoose.model('poll', poll, 'poll');
