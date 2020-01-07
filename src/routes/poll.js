const controller = require('../controllers/poll');

const express = require('express');

const router = express.Router();

router.get('/', controller.getAllPolls);
router.get('/find/:pID/:qID', controller.findPoll);
router.post('/', controller.createPoll);
router.get('/:id', controller.getPoll);
router.patch('/:id', controller.updatePoll);
router.delete('/:id', controller.deletePoll);
router.patch('/:id/:status', controller.updateStatus);
router.patch('/add/:user/:id/:choice', controller.addVote);
module.exports = router;
