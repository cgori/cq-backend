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

repository.update = async (data, params) => {};

repository.delete = (username) => {};

module.exports = repository;
