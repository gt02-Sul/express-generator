const mysql = require('mysql2/promise');

const getDatabaseConnection = async () => await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', 
    database: 'ifood',
});

module.exports = {
    getDatabaseConnection,
}
