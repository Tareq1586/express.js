// this is a raw node js http server example
const http = require('http');

// we have to create the server manually
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('This is home page');
    res.end();
  } else if (req.url === '/about-us' && req.method === 'GET') {
    res.write('This is about-us page');
    res.end();
  } else {
    res.write('Not found');
    res.end();
  }
});
server.listen(3000);
console.log('listening on port 3000');
