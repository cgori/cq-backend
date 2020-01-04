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

repository.updatePoll = async (id, data) => {
    return Poll.findByIdAndUpdate({ pollID: id }, { ...data });
};

repository.deletePoll = (id) => {
    return Poll.deleteOne({ pollID: id });
};
repository.addVote = (pollId, optionId) => {
    
};

module.exports = repository;
