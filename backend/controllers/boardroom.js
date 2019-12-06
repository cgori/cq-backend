const repository = require('../repository/boardroom');
const controller = {};
const auth = require('../services/authToken.js');
// Get user

controller.create = async (req, res) => {
    const boardroom = await repository.create(req.body);
    res.json(boardroom);
};
controller.read = async (req, res) => {
    const boardroom = await repository.read(req.params.id);
    console.log(req.params.id);
    res.json(boardroom);
};
controller.update = async (req, res) => {
    data = req.body;
    filter = req.params;
    // router.patch('/update/boardroom=:boardroomid/poll=:pollid/question=:questionid', controller.update);
    console.log(req.params);
    const boardroom = await repository.update(data, filter);
    res.json(boardroom);
};
controller.delete = async (req, res) => {
    const boardroom = await repository.delete(req.params.id);
    res.json(boardroom);
};

module.exports = controller;
