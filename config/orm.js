// Import MySQL connection
const connection = require('./connection.js');

const orm = {
    selectAll: function(itemToSelect, table) {
        let queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [itemToSelect, table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function(table, column, colVal) {
        let queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [table, column, colVal], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    },

    updateOne: function(table, colSet, colSetVal, colMatch, colVal) {
        let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [table, colSet, colSetVal, colMatch, colVal], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
};

module.exports = orm;