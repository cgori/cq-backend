const Boardroom = require('../models/boardroom');

const repository = {};

repository.getAllBoardrooms = () => {
    return Boardroom.find({});
};

repository.createBoardroom = (data) => {
    return Boardroom.create({ ...data });
};

repository.getBoardroom = (id) => {
    return Boardroom.findOne({ id });
};

repository.updateBoardroom = async (id, data) => {
    return Boardroom.findOneAndUpdate({ id }, { ...data });
};

repository.deleteBoardroom = (id) => {
    return Boardroom.deleteOne({ id });
};

repository.addPoll = async (boardroomID, data) => {
    return Boardroom.create({ boardroomID }, { $push: { polls: { data } } });
};

module.exports = repository;
