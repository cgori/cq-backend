const express = require('express');
const config = require('../../config');
const router = express.Router();
const protectedRoute = require('../services/authToken');
const controller = require('../controllers/user');
const jwt = require('jsonwebtoken');

router.use(function timeLog(req, res) {
    const auth = protectedRoute.validateToken(req, res);
});

router.get('/:username', controller.getUser);
router.get('/', controller.getUsers);

module.exports = router;
