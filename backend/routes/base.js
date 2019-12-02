const express = require('express');
const router = express.Router();
const mw = '../services/middleware.js';
router.get('/ping', (req, res) => {
    res.status(200).json({ serverTime: new Date().toISOString() });
});

router.use('/user', require('./user'));
router.get('*', (req, res) => res.status(404).json({ error: 'Endpoint not found.' }));
router.use('/auth', require('./auth-user'));
module.exports = router;
