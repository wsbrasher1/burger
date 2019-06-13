//To import the MySQL connection object//
var connection = require("../config/connection.js");

//Helper functions to generate mySQL syntax//
function genQuestionMarks(num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push("?");
      }
      return arr.toString();
}

function objectToSQL(ob){
    var arr = [];

    for (var key in ob){
        arr.push(key + "=" + ob[key]);
    }
        return arr.toString();
}

/*Created an object called ORM to contain our selctions
and queries */
var orm = {
  selectAll:function(table, callback) {
      var databaseQuery = "SELECT * FROM" + table + ";";

      connection.query(databaseQuery, function(err, res){
        if(err){
            throw err;
        }
        callback(res);
      });
  },
  insertOne: function(table, cols, vals, callback) {
    var databaseQuery =
      "INSERT INTO " +
      table +
      " (" +
      cols.toString() +
      ") " +
      "VALUES (" +
      createQmarks(vals.length) +
      ") ";

    console.log(databaseQuery);
    connection.query(databaseQuery, vals, function(err, res) {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
  updateOne: function(table, objColVals, condition, callback) {
    var databaseQuery =
      "UPDATE " +
      table +
      " SET " +
      translateSql(objColVals) +
      " WHERE " +
      condition;

    console.log(databaseQuery);

    connection.query(databaseQuery, function(err, res) {
      if (err) {
        throw err;
      }
      callback(res);
    });
  },
  deleteOne: function(table, condition, callback) {
    var databaseQuery = "DELETE FROM " + table + " WHERE " + condition;
    console.log(databaseQuery);

    connection.query(databaseQuery, function(err, res) {
      if (err) {
        throw err;
      }
      callback(res);
    });
  }
};

module.exports = orm;