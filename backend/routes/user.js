const express = require('express');

const router = express.Router();

const controller = require('../controllers/user');

router.get('/:username', controller.getUser);
router.get('/', controller.getUsers);
router.post('/register', controller.registerUser);
module.exports = router;
