var express = require("express");
var router = express.Router();
const os = require("os");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(os.hostname());
  res.render("index", { title: "Express" });
});

module.exports = router;
