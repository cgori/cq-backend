const authMiddleware = require('../middleware/auth');

const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/user', authMiddleware.protected, require('./user'));
router.use('/boardroom', authMiddleware.protected, require('./boardroom'));
router.use('/poll', authMiddleware.protected, require('./poll'));
module.exports = router;
