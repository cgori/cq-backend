const repository = require('../repository/poll');

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
    const Poll = await repository.createPoll(req.body);

    res.json({ success: true, Poll });
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
