const storeController = require("../controllers/storeController");
const express = require('express');
const router = express.Router();

router.get('/', storeController.getAllStores);
router.get('/:id', storeController.getStoreById);
router.get('/:id/items', storeController.getStoreItemsByStoreId);
router.post('/', () => {});
router.put('/:id', () => {});
router.delete('/:id', () => {});

module.exports = router;