const controller = require('../controllers/poll');

const express = require('express');

const router = express.Router();

router.get('/', controller.getAllPolls);
router.post('/', controller.createPoll);
router.get('/:id', controller.getPoll);
router.patch('/:id', controller.updatePoll);
router.delete('/:id', controller.deletePoll);

module.exports = router;
