const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error loading page.');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log('Server running at http://0.0.0.0:' + port);
});
