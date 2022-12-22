const path = require("path");
const express = require("express");
const router = express.Router();

// let currentDir = path.join(__dirname, "..", "views");
// console.log(currentDir);

router.get("/subdir-1", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "subdir-1.html"));
});

router.get("/subdir-2", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "views", "subdir", "subdir-2.html"));
});

module.exports = router;
