var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Funcionando :D epa");
    res.end();
}).listen(3000, 'localhost');

console.log('Servidor iniciado')