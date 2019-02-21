// Set up MySQL connection
const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'groot',
        database: 'burgers_db'
    });
};


// Make MySQL connection
connection.connect(function(err) {
    if (err) {
        console.log(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID ${connection.threadId}`);
});

// Export to ORM
module.exports = connection;