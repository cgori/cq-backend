const express = require('express');

const router = express.Router();

const controller = require('../controllers/user');

router.get('/:username', controller.getUser);

module.exports = router;
