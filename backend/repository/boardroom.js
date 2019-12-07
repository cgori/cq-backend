const mongoose = require('mongoose');
const boardroom = require('../models/boardroom');
const repository = {};
const bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
const jwt = require('jsonwebtoken');
const config = require('../../config').secret;

repository.create = async (body) => {
    return boardroom.create(body).catch((error) => ({ error }));
};

repository.read = async (id) => {
    console.log(id);
    return boardroom.find({ 'boardroom.id': id });
};

repository.update = async (data, bID, pID, qID) => {
    // boardroom.updateOne({ id: boardroomid, polls: { id: pollid, patient:{ },{ questions: { id: questionid } } } }, {  });
    console.log(data);
    bID = parseInt(bID);
    pID = parseInt(pID);
    qID = parseInt(qID);
    console.log(bID, pID, qID);
    return boardroom.findOne({ id: bID, poll: { id: pID, questions: { id: qID } } });
    return boardroom.updateOne({ id: bID, poll: { id: pID, questions: { id: qID } } }, { data });
};

repository.delete = (username) => {};

module.exports = repository;
