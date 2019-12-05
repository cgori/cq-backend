const express = require('express');
const config = require('../../config');
const router = express.Router();
const validateToken = require('../services/authToken');
const controller = require('../controllers/auth-user');
const jwt = require('jsonwebtoken');

router.post('/login', controller.loginUser);
router.post('/register', controller.registerUser);
module.exports = router;
