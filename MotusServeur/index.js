
const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('html/page.html');
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});