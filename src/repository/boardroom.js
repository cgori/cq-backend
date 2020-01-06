const Boardroom = require('../models/boardroom');
const Poll = require('../models/poll');

const repository = {};

repository.getAllBoardrooms = () => {
    return Boardroom.find({});
};

repository.getBoardroomPolls = () => {};

repository.createBoardroom = (data) => {
    console.log(data);
    return Boardroom.create({ ...data });
};

repository.addUser = (uID, bID) => {
    return Boardroom.findOneAndUpdate({ _id: bID }, { $addToSet: { users: uID } });
};

repository.getBoardroom = (id) => {
    return Boardroom.findById(id);
};

repository.updateBoardroom = async (id, data) => {
    return Boardroom.findOneAndUpdate({ title: id }, { ...data });
};

repository.deleteBoardroom = (id) => {
    return Boardroom.deleteOne({ title: id });
};

repository.addPoll = (bID, pID) => {
    return Boardroom.findOneAndUpdate({ _id: bID }, { $addToSet: { polls: pID } });
};

module.exports = repository;
