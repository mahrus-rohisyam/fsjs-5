require("dotenv").config();
const { application } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const { PORT } = process.env;

// Serving static files such as css and images
app.use(express.static(__dirname));

// Serving multiple form
app.use(express.urlencoded({ extended: false }));

// Router
app.use("/", require("./router/root"));
app.use("/subdir", require("./router/subdir"))

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
