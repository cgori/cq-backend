const controller = require('../controllers/boardroom');

const express = require('express');

const router = express.Router();

router.get('/', controller.getAllBoardrooms);
router.get('/:id/polls', controller.getBoardroomPolls);
router.post('/', controller.createBoardroom);
router.get('/:id', controller.getBoardroom);
router.patch('/:id', controller.updateBoardroom);
router.patch('/:id/poll', controller.addPoll);
router.delete('/:id', controller.deleteBoardroom);
router.post('/user/:id', controller.addUser);

module.exports = router;
