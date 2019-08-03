var express = require('express');
var fs = require('fs');
var app = express();

//Def ruta base archivos:
app.use(express.static(__dirname + '/public'));

//Ruta peticion GET
app.get('/', function (peticion, respuesta) {
    respuesta.sendFile('index.html')
});


app.listen(3000, function () {
    console.log("iniciado en puerto 3000");
});