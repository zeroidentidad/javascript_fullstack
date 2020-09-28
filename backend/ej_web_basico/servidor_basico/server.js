var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Desde Node en Linux");
    res.end();
}).listen(3000, '172.30.109.95');

console.log('Servidor iniciado')