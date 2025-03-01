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

controller.updateStatus = async (req, res, next) => {
    try {
        console.log(req.params.id, req.params.status);
        const id = req.params.id;
        const status = req.params.status;
        const Poll = await repository.updateStatus(id, status);
        res.json({ success: true, Poll });
    } catch (error) {
        console.log(error);
        return res.status(409).json({ success: false, message: 'Updating status failed.' + error });
    }
};

controller.findPoll = async (req, res, next) => {
    try {
        console.log(req.params.pID, req.params.qID);
        const Poll = await repository.findPoll(req.params.pID, req.params.qID);
        res.json({ success: true, Poll });
    } catch (error) {
        console.log(error);
        return res.status(409).json({ success: false, message: 'Updating status failed.' });
    }
};

controller.addVote = async (req, res, next) => {
    try {
        const Poll = await repository.addVote(req.params.user, req.params.id, req.params.choice);
        if (Poll === false) {
            res.status(400).json({
                success: false,
                messsage: 'User already voted',
                user: req.params.user,
            });
        } else {
            res.json({ success: true, Poll });
        }
    } catch (error) {
        console.log(error);
        return res.status(409).json({ success: false, message: 'Updating status failed.' + error });
    }
};

controller.createPoll = async (req, res, next) => {
    try {
        const Poll = await repository.createPoll(req.body);
        res.json({ success: true, Poll });
    } catch (error) {
        return res.status(409).json({ success: false, message: error.message });
    }
};

controller.createPollBoardRoom = async (req, res, next) => {
    try {
        const Poll = controller.createPoll;
        const id = Poll;
        console.log(id);
        const boardroom = await repositoryBoardroom.addPoll(req.params.bID, id);

        res.json({ success: true, Poll, boardroom });
    } catch (error) {
        return res.status(409).json({ success: false, message: error.message });
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
