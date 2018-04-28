var express = require("express");
var router = express.Router();

var mongojs = require("mongojs");
var db = mongojs("mongodb://vrushal:vrushal@ds153948.mlab.com:53948/seed_db", ["test"]);

router.get("/bookings",function (req,res,next) {
    db.test.find(function(err,test){
        if(err){
            res.send(err);
        }
        res.json(test);
    })
});

router.post("/bookings", function (req,res,next) {
   var booking = req.body.data;
    db.bookings.save(booking, function (err, savedBooking) {
        if(err){
            res.send(err);
        }
        res.json(savedBooking);
    });
});
module.exports = router;
