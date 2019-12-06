const express = require('express');
const router = express.Router();
const mw = '../services/middleware.js';
router.get('/ping', (req, res) => {
    res.status(200).json({ serverTime: new Date().toISOString() });
});

router.use('/user', require('./user'));
router.use('/auth', require('./auth-user'));
router.use('/boardroom', require('./boardroom'));
module.exports = router;
