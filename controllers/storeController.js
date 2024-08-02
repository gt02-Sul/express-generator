const Store = require("../models/Store");
const StoreItem = require("../models/StoreItem");

module.exports = {
    getAllStores: async (req, res) => {
        const stores = await Store.getAll();
        res.json(stores);
    },
    getStoreById: async (req, res) => {
        const id = (req.params.id)
        const store = await Store.getById(id);
        const items = await StoreItem.getAllByStoreId(id);

        res.json({
            ...store,
            items,
        });
    },
    getStoreItemsByStoreId: async (req, res) => {
        const storeId = (req.params.id)
        const items = await StoreItem.getAllByStoreId(storeId);
        res.json(items);
    }
}