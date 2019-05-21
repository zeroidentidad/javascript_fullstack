"use strict"

var nombre = "jesus"

console.log(nombre);

function saludo() {
    //var nombre = 'otro'; // nueva en este ambito y asignacion val
    let nombre = 'otro'; // sintaxis de contenedor de bloque
    let edad = 26;
    console.log(nombre, edad);
}

saludo();