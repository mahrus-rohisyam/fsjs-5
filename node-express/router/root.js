const path = require("path");
const express = require("express");
const router = express.Router();

router.get("^/$|/index(.html)?", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("/portofolio", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "..", "views", "portofolio.html"));
});

module.exports = router;
