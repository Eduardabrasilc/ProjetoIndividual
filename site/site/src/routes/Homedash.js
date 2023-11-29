var express = require("express");
var router = express.Router();

var homedash = require("../controllers/homeDash");

router.get("/ranking", function (req, res) {
    homedash.buscarRanking(req, res);
});

router.get("/media", function (req, res) {
    homedash.buscarMedia(req, res);
})

module.exports = router;