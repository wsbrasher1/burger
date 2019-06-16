var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var allTheBurgers = {
            burgers: data
        };
        console.log(allTheBurgers);
        res.render("index", allTheBurgers);
    })
})

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function (data) {
        res.json(data);
    })
})

router.post("/api/burgers", function(req, res) {
    var freshBurger = req.body.burger;
    console.log(freshBurger);
    burger.create(freshBurger, function(response) {
        console.log("Your new burger has been added!");
        res.status(200).end();
    });
})

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    burger.update("devoured", true, "id = " + id, function(response) {
        console.log("You devoured that burger, son.");
        res.status(200).end();
    });
})

module.exports = router;


