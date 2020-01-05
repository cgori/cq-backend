const Boardroom = require('../models/boardroom');

const repository = {};

repository.getAllBoardrooms = () => {
    return Boardroom.find({});
};

repository.createBoardroom = (data) => {
    console.log(data);
    return Boardroom.create({ ...data });
};

repository.getBoardroom = (id) => {
    return Boardroom.findOne({ title: id });
};

repository.updateBoardroom = async (id, data) => {
    return Boardroom.findOneAndUpdate({ title: id }, { ...data });
};

repository.deleteBoardroom = (id) => {
    return Boardroom.deleteOne({ title: id });
};

repository.addPoll = async (boardroomID, data) => {
    return Boardroom.findOneAndUpdate({ title: boardroomID }, { $push: { polls: { ...data } } });
};

repository.updateStatus = (id, data) => {
    console.log(id, data);
    return Poll.findOneAndUpdate({ pollID: id }, { status: data });
};

repository.addVote = (bID, pID, choice) => {
    console.log(choice);
    pID = parseInt(pID);
    choice = parseInt(choice);
    return Boardroom.findOneAndUpdate(
        { title: bID, pollID: pID, 'polls.options.optionID': { $eq: choice } },
        { $inc: { 'options.$.votes': 1 } }
    );
};

module.exports = repository;
