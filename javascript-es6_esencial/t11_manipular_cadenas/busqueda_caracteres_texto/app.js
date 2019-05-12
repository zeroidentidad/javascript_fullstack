"use strict"

//********************************
//*** Métodos búsqueda | Parte 2

var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

var resultado;

// match:
 resultado = mensaje.match(/aprendiendo/gi); // g = global, todas.  i = case insensitive, Aa.


// substr:
// resultado = mensaje.substr(6,11);


// substring:
//resultado = mensaje.substring(6,17);


// charAt:
 resultado = mensaje.charAt(0);


console.log(resultado);