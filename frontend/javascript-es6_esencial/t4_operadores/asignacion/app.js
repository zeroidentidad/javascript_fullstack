"use strict"

//********************************
//*** Operadores de asignación

var datoA = 10;

// ASIGNACIÓN SIMPLE
var igual = datoA;
console.log("El resultado de la asignación simple es: "+ igual);

// SUMAR Y ASIGNAR
var masIgual = 10;

masIgual += datoA;
//masIgual = masIgual + datoA;
console.log("El resultado de la asignación += es: "+ masIgual);


// RESTAR Y ASIGNAR
var menosIgual = 10;
menosIgual -= datoA;
console.log("El resultado de la asignación -= es: "+ menosIgual);


// MULTIPLICAR Y ASIGNAR
var porIgual = 10;
porIgual *= datoA;
console.log("El resultado de la asignación *= es: "+ porIgual);

// DIVIDIR Y ASIGNAR
var entreIgual = 20;

entreIgual /= datoA;

console.log("El resultado de la asignación /= es: "+ entreIgual);