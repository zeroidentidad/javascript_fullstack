"use strict"

//********************************
//*** Función Arrow | Fat Arrow | Lambda

var saludar = nombre => "Hola " + nombre;
console.log(saludar("Susana"));

var sumar = cantidad => cantidad + 10;
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA + datoB;
console.log(calcular(10, 15));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA + datoB + datoC;
}
console.log(generar(10, 15));

var validar = () => {
    return 'Validación correcta';
}
console.log(validar());