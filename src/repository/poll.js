const Poll = require('../models/Poll');

const repository = {};

repository.getAllPolls = () => {
    return Poll.find({});
};

repository.createPoll = (data) => {
    return Poll.create({ ...data });
};

repository.getPoll = (id) => {
    return Poll.findOne({ id });
};

repository.updatePoll = async (id, data) => {
    return Poll.findByIdAndUpdate({ id }, { ...data });
};

repository.deletePoll = (id) => {
    return Poll.deleteOne({ id });
};

module.exports = repository;
