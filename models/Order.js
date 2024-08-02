const { getDatabaseConnection } = require("../utils/getDatabaseConnection");

module.exports = {
    create: async (userId) => {
        const connection = await getDatabaseConnection();
        const [ result ] = await connection.query(
            'insert into orders (user_id) values (?)',
            [userId]
        );
        return result;
    },
    addItems: async (orderId, items) => {
        const connection = await getDatabaseConnection();

        for (let index = 0; index < items.length; index++) {
            const item = items[index];
            await connection.query(
                'insert into order_store_item (order_id, store_item_id, amount) values (?, ?, ?)',
                [orderId, item.id, item.amount]
            );
            
        }
    }

}