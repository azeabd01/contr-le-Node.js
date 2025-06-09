// 2- Dans cette tâche, vous devrez: créer un serveur  / Écrivez un programme qui s'exécute sur le port 3000:

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
