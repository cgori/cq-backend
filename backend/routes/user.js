const express = require('express');

const router = express.Router();
const mw = '../services/middleware.js';
const controller = require('../controllers/user');

router.get('/:username', controller.getUser);
router.get('/', controller.getUsers);
router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);
module.exports = router;
