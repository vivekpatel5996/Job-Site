const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {

    try {
        const connection = await mysql.createConnection(config.db);
        console.log("Database is connected!")
        const [results,] = await connection.execute(sql, params);
        return results;
    }
    catch (err) {
        console.error('SQL Executing Error',err);
        return err;
    }

}

module.exports = {
    query
}