var http = require('http'); //http node
var fs = require('fs'); //filesystem node

http.createServer(function(peticion, respuesta){
    respuesta.writeHead('200', {"Content-Type":"text/html"});
    switch (peticion.url) {
        case '/':
            template = "inicio.html"
            break;
        case '/nodejs':
            template = "node.html"
            break;            
        default:
            template = "404.html"
            break;
    }

    fs.readFile("./templates/"+template, 'utf8', function(error, datos){
        respuesta.write(datos);
        respuesta.end();
    });
}).listen(3000, 'localhost');

console.log("Server funcinando");