var fs = require('fs');

var contenido = fs.readFileSync('./archivos/texto.txt', 'utf8');

console.log(contenido);
