var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('mynewfile1.txt', function(error, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8080);