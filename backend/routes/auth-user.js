const express = require('express');
const config = require('../../config');
const router = express.Router();
const controller = require('../controllers/auth-user');
const jwt = require('jsonwebtoken');

router.post('/login', controller.loginUser);
router.post('/register', controller.registerUser);
module.exports = router;
