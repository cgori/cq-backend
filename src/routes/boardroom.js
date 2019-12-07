const controller = require('../controllers/boardroom');

const express = require('express');

const router = express.Router();

router.get('/', controller.getAllBoardrooms);
router.post('/', controller.createBoardroom);
router.get('/:id', controller.getBoardroom);
router.patch('/:id', controller.updateBoardroom);
router.delete('/:id', controller.deleteBoardroom);

module.exports = router;
