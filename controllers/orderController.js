const Order = require("../models/Order");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createOrder = async (req, res) => {
    const { items } = req.body;
    const { insertId } = await Order.create(1);
    await Order.addItems(insertId, items);
    
    res.status(201).json({insertId});
};

module.exports = {
    createOrder,
}
