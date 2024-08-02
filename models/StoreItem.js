const { getDatabaseConnection } = require("../utils/getDatabaseConnection");

module.exports = {
    getAllByStoreId: async (storeId) => {
        const connection = await getDatabaseConnection();
        const [result] = await connection.query(
            'select * from store_item where store_id = ?',
            [storeId]
        );
        return result;
    },   
}