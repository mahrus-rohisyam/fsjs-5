const http = require("http");

class Server {
  connect(port) {
    http
      .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write({
          name: "Mahrus",
          state: "Indonesia"
        });
        
        response.end();
      })
      .listen(port, () => {
        console.log(`Server started on http://localhost:${port}`);
      });
  }
}
// https://localhost:3000/
const server = new Server().connect(3000)