const Boardroom = require('../models/boardroom');

const repository = {};

repository.getAllBoardrooms = () => {
    return Boardroom.find({});
};

repository.getBoardroomPolls = () => {};

repository.createBoardroom = (data) => {
    console.log(data);
    return Boardroom.create({ ...data });
};

repository.addUser = (bID, data) => {
    return Boardroom.findOneAndUpdate({ title: bID }, { $addToSet: { users: data.username } });
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
    console.log(data);
    return Boardroom.findOneAndUpdate({ title: boardroomID }, { $addToSet: { polls: data } });
};

module.exports = repository;
