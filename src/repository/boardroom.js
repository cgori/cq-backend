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

module.exports = repository;
