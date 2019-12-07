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
    return Boardroom.findByIdAndUpdate({ id }, { ...data });
};

repository.deleteBoardroom = (id) => {
    return Boardroom.deleteOne({ id });
};

module.exports = repository;
