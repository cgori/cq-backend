const Poll = require('../models/poll');

const repository = {};

repository.getAllPolls = () => {
    return Poll.find({});
};

repository.createPoll = (data) => {
    console.log(data);
    return Poll.create({ ...data });
};

repository.getPoll = (id) => {
    return Poll.findOne({ pollID: id });
};

repository.getPolls = (polls) => {
    return Poll.find({ pollID: { $in: polls } });
};

repository.updateStatus = (id, data) => {
    console.log(id, data);
    return Poll.findOneAndUpdate({ pollID: id }, { status: data });
};

repository.addVote = (id, choice) => {
    console.log(choice);
    return Poll.findOneAndUpdate(
        { pollID: id, 'options.optionID': { $eq: choice } },
        { $inc: { 'options.$.votes': 1 } }
    );
};

repository.checkVote = (id, choice) => {
    console.log(choice);
    return Poll.findOneAndUpdate(
        { pollID: id, 'options.optionID': { $eq: choice } },
        { $inc: { 'options.$.votes': 1 } }
    );
};

repository.findPoll = (id, choice) => {
    console.log(choice);
    return Poll.find({ pollID: id, options: { optionID: choice } });
};

repository.updatePoll = async (id, data) => {
    return Poll.findByIdAndUpdate({ pollID: id }, { ...data });
};

repository.deletePoll = (id) => {
    return Poll.deleteOne({ pollID: id });
};

module.exports = repository;
