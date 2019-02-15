// Import MySQL connection
const connection = require('./connection.js');

const orm = {
    selectAll: function(itemToSelect, table, cb) {
        let queryString = 'SELECT ?? FROM ??';
        connection.query(queryString, [itemToSelect, table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, column, colVal, cb) {
        let queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [table, column, colVal], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    updateOne: function(table, colSet, colSetVal, colMatch, colVal, cb) {
        let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [table, colSet, colSetVal, colMatch, colVal], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

module.exports = orm;