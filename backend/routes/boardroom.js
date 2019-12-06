const express = require('express');
const config = require('../../config');
const router = express.Router();
const controller = require('../controllers/boardroom');
const jwt = require('jsonwebtoken');

router.post('/create', controller.create);
router.get('/read/:id', controller.read);
router.get('/read', controller.read);
router.patch('/update/boardroom=:boardroomid/poll=:pollid/question=:questionid', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
