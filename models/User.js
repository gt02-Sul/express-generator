const { getDatabaseConnection } = require("../utils/getDatabaseConnection")



module.exports = {
    getAll: async () => {
        const connection = await getDatabaseConnection();
        const result = await connection.query('select * from user');

        return result;
    },
    getById: async (id) => {},
    updateById: async (id) => {},
    deleteById: async (id) => {},
}
