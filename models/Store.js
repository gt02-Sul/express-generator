const { getDatabaseConnection } = require("../utils/getDatabaseConnection");

module.exports = {
    getAll: async () => {
        const connection = await getDatabaseConnection();
        const [result] = await connection.query('select * from store');
        return result;
    },
    getById: async (id) => {
        const connection = await getDatabaseConnection();
        const [result] = await connection.query('select * from store where id = ' + id);
        return result ? result[0] : null;
    }
}