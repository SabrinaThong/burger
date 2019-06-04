var orm = require("../config/orm");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols,vals,cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.create("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
    
};

module.exports = burgers;