var fs = require('fs');

// var contenido = fs.readFileSync('./archivos/archivo.avi', 'utf8');

var contenido = fs.readFile('./archivos/vista_movil_chat_server.mp4' , 'utf8' , function(error, datos){
    console.log(datos);
} )

console.log("codigo " + contenido);