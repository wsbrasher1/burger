//To get the needed dependencies//
var mysql = require("mysql");

// MySQL DB Connection Information//
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "kenmore71",
    database: "burgers_db"
  });
};

//To make the connection to MySQL//
connection.connect(function(err){
    if(err) {
        console.log("Error connecting at: " + err.stack);
        return;
    } else{
        console.log("Connected as id " + connection.threadId);
    }
});

//To export the connection for ORM purposes//
module.exports = connection;