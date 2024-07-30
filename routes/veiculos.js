var express = require('express');
var router = express.Router();
const veiculosControllers = require('../controllers/veiculosControllers');

router.get('/', veiculosControllers.list);
router.get('/:id', veiculosControllers.show);

module.exports = router;
