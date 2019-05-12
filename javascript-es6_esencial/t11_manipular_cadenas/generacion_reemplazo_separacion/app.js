"use strict"

//********************************
//*** Métodos de generación, reemplazo y separación

var mensaje = " Estoy aprendiendo JavaScript  ";

var resultado;

// repeat
// resultado = mensaje.repeat(20);

// replace
//resultado = mensaje.replace("JavaScript", "a programar");


// slice
// resultado = mensaje.slice(6);
// resultado = mensaje.slice(6, 11)
resultado = mensaje.slice(6, mensaje.length-4)
console.log(resultado);

// split
// resultado = mensaje.split(" ");

// trim
resultado = mensaje.trim();

console.log(resultado);
