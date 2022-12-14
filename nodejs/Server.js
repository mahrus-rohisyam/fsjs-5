require("dotenv").config();

const http = require("http");
const path = require("path");
const fs = require("fs");
const { PORT } = process.env;
const fsPromises = fs.promises;

const serveFile = async (filePath, contentType, response) => {
  try {
    // Membaca file dengan parameter filePath, contentType
    const rawData = await fsPromises.readFile(
      filePath,
      !contentType.includes("image") ? "utf8" : ""    // Encoding
    );
    // Jika contentType = JSON, maka harus di parse
    const data =
      contentType === "application/json" ? JSON.parse(rawData) : rawData;

    // Menulis head dengan kondisi jika filePath = 404.html, maka statusnya 404
    // Jika tidak, maka status codenya 200, lalu assign Content-Type = contentType
    response.writeHead(filePath.includes("404.html") ? 404 : 200, {
      "Content-Type": contentType,
    });
    // Closing, responsenya di end
    response.end(
      contentType === "application/json" ? JSON.stringify(data) : data
    );
  } catch (err) {
    // Jika error jalankan ini
    console.log(err);
    // Status code 500 == kesalahan server
    response.statusCode = 500;
    response.end();
  }
};

const server = http.createServer((req, res) => {
  // Menampilkan request url dan request method
  console.log(req.url, req.method);

  // Mengambil extension
  const extension = path.extname(req.url);

  // Deklarasi content Type
  let contentType;

  // Menentukan content type (Assign)
  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
    default:
      contentType = "text/html";
  }

  // Membaca file path pada url (Serving HTML)
  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);
  console.log("Ini filePath",filePath);
  // Membuat kita tidak perlu mengetik .html pada url
  if (!extension && req.url.slice(-1) !== "/") filePath += ".html";

  // Mengecek apakah url yang diminta ada ngga filenya (Boolean)
  const fileExists = fs.existsSync(filePath);

  
  if (fileExists) {
    // Action ketika file ada
    serveFile(filePath, contentType, res);
  } else {
    // Action ketika file tidak ada
    switch (path.parse(filePath).base) {
      // Redirect ke 404.html
      default:
        serveFile(path.join(__dirname, "views", "404.html"), "text/html", res);
    }
  }
});

// Menjalankan server
server.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});
