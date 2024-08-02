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

        let query = 'insert into order_store_item (order_id, store_item_id, amount) values '
        query += items.map(i => '(?, ?, ?)').join(', ')

        await connection.query(
            query,
            items.flatMap(item => [orderId, item.id, item.amount]) 
        );
    }

}