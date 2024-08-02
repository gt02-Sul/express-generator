const storeController = require("../controllers/storeController");
const express = require('express');
const router = express.Router();

router.get('/', storeController.getAllStores);
router.get('/:id', );
router.post('/', );
router.put('/:id', );
router.delete('/:id', );

module.exports = router;