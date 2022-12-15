require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { PORT } = process.env;

// Serving static files such as css and images
app.use(express.static(__dirname));

// Serving multiple form
app.use(express.urlencoded({ extended: false }));

// Body parser
app.use(express.json());

// Router
// localhost:8000/
app.use("/", require("./router/root"));
// localhost:8000/subdir/
app.use("/subdir", require("./router/subdir"))
// localhost:8000/user/
app.use("/api", require("./router/api"));

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
