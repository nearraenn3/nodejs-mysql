const mysql = require('mysql');

// Create Connection
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-mysql'
})

// Checking
database.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Successfully connected to the database...');
    }
})

module.exports = database;