var connection = require("../config/connection");

function printQuestionMarks(num) {
    var arr = [];
for (var i=0;i<num; i++) {
    arr.push("?");
    }
    return arr.toString();
}


selectAll();
insertOne();
updateOne();


module.exports()