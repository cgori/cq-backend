const repository = require('../repository/boardroom');

const controller = {};

controller.getAllBoardrooms = async (req, res, next) => {
    const boardrooms = await repository.getAllBoardrooms();

    res.json({ success: true, boardrooms });
};

controller.getBoardroom = async (req, res, next) => {
    const boardroom = await repository.getBoardroom(req.params.id);

    res.json({ success: true, boardroom });
};

controller.createBoardroom = async (req, res, next) => {
    const boardroom = await repository.createBoardroom(req.body);

    res.json({ success: true, boardroom });
};

controller.updateBoardroom = async (req, res, next) => {
    const boardroom = await repository.updateBoardroom(req.params.id, req.body);

    res.json({ success: true, boardroom });
};

controller.deleteBoardroom = async (req, res, next) => {
    const boardroom = await repository.deleteBoardroom(req.params.id);

    res.json({ success: true });
};

module.exports = controller;
