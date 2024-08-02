const Store = require("../models/Store");

const getAllStores = async (req, res) => {
    const stores = await Store.getAll();
    res.json(stores);
};

module.exports = {
    getAllStores
}