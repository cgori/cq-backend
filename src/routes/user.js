const controller = require('../controllers/user');

const express = require('express');

const router = express.Router();

router.get('/', controller.getAllUsers);
router.get('/:username', controller.getUser);

module.exports = router;
