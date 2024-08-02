const Store = require("../models/Store");

module.exports = {
    getAllStores: async (req, res) => {
        const stores = await Store.getAll();
        res.json(stores);
    },
    getStoreById: async (req, res) => {
        const id = (req.params.id)
        const store = await Store.getById(id);
        res.json(store);
    }
}