/* var libro = require('./archivos/libros.json');
console.log(libro);
console.log(libro.autor); */

//importacion asincronica
var fs = require('fs');

fs.readFile('./archivos/libros.json', (err, datos)=>{
    console.log(JSON.parse(datos));
    console.log(JSON.parse(datos).autor);
});

