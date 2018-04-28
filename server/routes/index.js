var express = require("express");
var router = express.Router();

var mongojs = require("mongojs");
var db = mongojs("mongodb://vrushal:vrushal@ds153948.mlab.com:53948/seed_db", ["test"]);

router.get("/",function (req,res,next) {
    res.render("index.html");
});

module.exports = router;