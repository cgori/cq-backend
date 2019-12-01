const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
    console.log('Time:', Date.now());
    next();
});
router.get('/ping', (req, res) => {
    res.status(200).json({ serverTime: new Date().toISOString() });
});

router.use('/user', require('./user'));
router.get('*', (req, res) => res.status(404).json({ error: 'Endpoint not found.' }));
router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
module.exports = router;
