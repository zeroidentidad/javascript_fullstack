var express = require('express');
var app = express();

app.get('/', function(peticion, respuesta){
    respuesta.send('En express');
});

app.listen('3000', function(){
    console.log('Server app iniciado');
})