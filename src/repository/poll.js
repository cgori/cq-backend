const Poll = require('../models/poll');
const mongoose = require('mongoose');
const repository = {};
const ObjectId = require('mongoose').Types.ObjectId;
repository.getAllPolls = () => {
    return Poll.find({});
};

repository.createPoll = (data) => {
    console.log(data);
    return Poll.create({ ...data });
};

repository.getPoll = (id) => {
    return Poll.findById(id);
};

repository.getPolls = (polls) => {
    return Poll.find({ _id: { $in: polls } });
};

repository.updateStatus = (id, data) => {
    console.log(id, data);
    return Poll.findById({ id }, { status: data });
};

repository.addVote = async (user, id, choice) => {
    const poll = await Poll.findOne({ _id: ObjectId(id) });

    for (let i = 0; i < poll.votedUsers.length; i++) {
        if (poll.votedUsers[i] === user) {
            return false;
        }
    }

    const options = poll.options.map((option) => {
        if (option._id.toString() === choice) option.votes++;

        return option;
    });
    const adduser = await Poll.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $push: { votedUsers: user } }
    );

    return Poll.findOneAndUpdate({ _id: ObjectId(id) }, { options }, { new: true });
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
