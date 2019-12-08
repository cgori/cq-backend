const repository = require('../repository/poll');
const repositoryBoardroom = require('../repository/boardroom');
const controller = {};

controller.getAllPolls = async (req, res, next) => {
    const Polls = await repository.getAllPolls();

    res.json({ success: true, Polls });
};

controller.getPoll = async (req, res, next) => {
    const Poll = await repository.getPoll(req.params.id);

    res.json({ success: true, Poll });
};

controller.createPoll = async (req, res, next) => {
    try {
        const Poll = await repository.createPoll(req.body);
        console.log(req.body.id);
        const boardroom = await repositoryBoardroom.addPoll(req.params.id, req.body.id);
        res.json({ success: true, Poll });
    } catch (error) {
        return res.status(409).json({ success: false, message: 'Conflict - poll already exists' });
    }
};

controller.updatePoll = async (req, res, next) => {
    const Poll = await repository.updatePoll(req.params.id, req.body);

    res.json({ success: true, Poll });
};

controller.deletePoll = async (req, res, next) => {
    const Poll = await repository.deletePoll(req.params.id);

    res.json({ success: true });
};

module.exports = controller;
