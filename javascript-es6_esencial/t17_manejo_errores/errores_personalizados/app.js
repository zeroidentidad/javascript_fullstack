"use strict";

//********************************
//*** Errores personalizados

var valor1 = 10;
var valor2 = 20;

try {
    if (valor1 > valor2) {
        console.log(`Mensaje de validación: ${valor1} si es mayor que ${valor2}`);
    } else {
        throw new Error(`${valor1} no es mayor que ${valor2} :(`);
    }

} catch (error) {
    console.log(error);
}