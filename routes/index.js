var express = require('express');
var router = express.Router();
const siteControllers = require('../controllers/siteControllers');

/* GET home page. */
router.get('/', siteControllers.home);
module.exports = router;
