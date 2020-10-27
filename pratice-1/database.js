const mysql = require('mysql');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-mysql'
})

database.connect((error) => {
    if(error) {
        console.log(error);
    } 

    console.log('Database connected...')
})

module.exports = database;