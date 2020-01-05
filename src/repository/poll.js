const Poll = require('../models/poll');

const repository = {};

repository.getAllPolls = () => {
    return Poll.find({});
};

repository.createPoll = (data) => {
    return Poll.create({ ...data });
};

repository.getPoll = (id) => {
    return Poll.findOne({ pollID: id });
};

repository.updateStatus = (id, data) => {
    console.log(id, data);
    return Poll.findOneAndUpdate({ pollID: id }, { status: data });
};

repository.addVote = (id, choice) => {
    return Poll.findOneAndUpdate({ pollID: id }, { options: { 0: { votes: 2 } } });
};

repository.updatePoll = async (id, data) => {
    return Poll.findByIdAndUpdate({ pollID: id }, { ...data });
};

repository.deletePoll = (id) => {
    return Poll.deleteOne({ pollID: id });
};

module.exports = repository;
