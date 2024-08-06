const { getDatabaseConnection } = require("../utils/getDatabaseConnection");
const bcrypt = require("bcrypt");

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
    getByEmail: async (email) => {
        const connection = await getDatabaseConnection();
        const [result] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
        return result ? result[0] : null;
    },
    updateById: async (id, updatedUser) => {
        const connection = await getDatabaseConnection();
        try {
            if (!updatedUser.name || !updatedUser.email) {
                throw new Error("Nome e senha são obrigatórios");
            }
            const [result] = await connection.query(
                'UPDATE user SET name = ?, email = ? WHERE id = ?',
                [updatedUser.name, updatedUser.email, id]
            );

            if (result.affectedRows === 0) {
                throw new Error("Usuário não encontrado, ou dados não alterados");
            }

            return { message: "Usuário cadastrado com sucesso!" };
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    deleteById: async (id) => {
        const connection = await getDatabaseConnection();
        const [ result ] = await connection.query('delete from user where id = ' + id);

        return result; 
    },
    create: async (user) => {
        const connection = await getDatabaseConnection();
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const result = await connection.query(
            `insert into user (name, email, password) values ('${user.name}', '${user.email}', '${hashedPassword}')`
        );

        return result;
    }
}
