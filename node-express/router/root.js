const path = require("path");
const express = require("express");
const router = express.Router();

let currentDir = path.join(__dirname, "..", "views");
console.log(currentDir );

router.get("^/$|/index(.html)?", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/portofolio", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "views", "portofolio.html"));
})

router.use("/*", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

module.exports = router;
