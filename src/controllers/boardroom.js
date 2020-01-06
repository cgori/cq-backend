const repository = require('../repository/boardroom');
const Poll = require('../repository/poll');
const ObjectId = require('mongodb').ObjectID;
const controller = {};

controller.getAllBoardrooms = async (req, res, next) => {
    const boardrooms = await repository.getAllBoardrooms();

    res.json({ success: true, boardrooms });
};

controller.addUser = async (req, res, next) => {
    const boardrooms = await repository.addUser(req.params.uID, req.params.bID);

    res.json({ success: true, boardrooms });
};

controller.getBoardroomPolls = async (req, res, next) => {
    const boardrooms = await repository.getBoardroomPolls();

    res.json({ success: true, boardrooms });
};

controller.getBoardroom = async (req, res, next) => {
    const boardroom = await repository.getBoardroom(req.params.id);
    console.log(boardroom['polls']);
    const polls = await Poll.getPolls(boardroom['polls']);
    res.json({ success: true, boardroom, polls });
};
controller.getBoardroombyID = async (req, res, next) => {
    const boardroom = await repository.getBoardroom(req.body.id);
    console.log(boardroom['polls']);
    const polls = await Poll.getPolls(boardroom['polls']);
    res.json({ success: true, boardroom, polls });
};

controller.createBoardroom = async (req, res, next) => {
    try {
        console.log(req.body);
        const boardroom = await repository.createBoardroom(req.body);
        res.json({ success: true, boardroom });
    } catch (error) {
        return res.status(409).json({ success: false, error: error });
    }
};

controller.updateBoardroom = async (req, res, next) => {
    const boardroom = await repository.updateBoardroom(req.params.id, req.body);

    res.json({ success: true, boardroom });
};

controller.addVote = async (req, res, next) => {
    try {
        const Poll = await repository.addVote(req.params.bID, req.params.pID, req.params.choice);
        console.log(req.params.bID, req.params.pID, req.params.choice);
        res.json({ success: true, Poll });
    } catch (error) {
        console.log(error);
        return res.status(409).json({ success: false, message: 'Updating status failed.' + error });
    }
};
controller.deleteBoardroom = async (req, res, next) => {
    const boardroom = await repository.deleteBoardroom(req.params.id);

    res.json({ success: true });
};

controller.addPoll = async (req, res, next) => {
    ObjectId(req.params.bID);
    const boardroom = await repository.addPoll(req.params.bID, req.params.pID);

    res.json({ success: true });
};

module.exports = controller;
