const { getDatabaseConnection } = require("../utils/getDatabaseConnection")

module.exports = {
    getAll: async () => {
        const connection = await getDatabaseConnection();
        const [ result ] = await connection.query('select * from user');

        return result;
    },
    getById: async (id) => {
        const connection = await getDatabaseConnection();
        const [ result ] = await connection.query('select * from user where id = ' + id);

        return result ? result[0] : null;
    },
    updateById: async (id) => {},
    deleteById: async (id) => {
        const connection = await getDatabaseConnection();
        const [ result ] = await connection.query('delete from user where id = ' + id);

        return result; 
    },
    create: async (user) => {
        const connection = await getDatabaseConnection();
        const result = await connection.query(
            `insert into user (name, email) values ('${user.name}', '${user.email}')`
        );

        return result;
    }
}
