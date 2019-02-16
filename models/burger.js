// Import the ORM
const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll('*', 'burgers', function(res){
            cb(res);
        });
    },

    create: function(vals, cb) {
        orm.insertOne('burgers', 'burger_name', vals, function(res){
            cb(res);
        });
    },

    update: function(bool, number, cb) {
        orm.updateOne('burgers', 'devoured', bool, 'id', number, function(res) {
            cb(res);
        });
    }
}

// Export for the controller
module.exports = burger;