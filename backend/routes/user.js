const controller = require('../controllers/user');

const express = require('express');

const router = express.Router();

router.get('/:id', controller.get);
router.post('/:id', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
