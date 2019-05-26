var http = require('http');

var servidor = http.createServer( function(peticion, respuesta ){ 

    respuesta.writeHead( 200 , {'Content-type': 'text/html'});
    respuesta.write("Respuesta para la ruta: " + peticion.url );

    console.log("petición web "+ peticion.url);
})

servidor.listen(3000);

console.log("Ejecutando servidor NodeJS");
