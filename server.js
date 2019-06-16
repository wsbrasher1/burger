//Dependencies//
var express = require("express");
var exbars = require("express-handlebars");
var bodyParser = require("body-parser");

//Express configuration//
var app = express();
var PORT = process.env.PORT || 3306;

//Sets up the Express app to handle data parsing//
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exbars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var route = require("./controllers/burgers_controller.js");
app.use(route);

app.listen(PORT, function(){
    console.log("Server listening on http://localhost: " + PORT);
});