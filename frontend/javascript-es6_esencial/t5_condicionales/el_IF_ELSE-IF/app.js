"use strict"

//********************************
//*** Condición IF-ELSE-IF

var datoA = 10;
var datoB = 20;
var resultado = "Sin datos";


if (datoA > datoB){
	resultado = "La primer condición se cumplió";
} else if (datoB == datoA){
    resultado = "La segunda condición se cumplió";
}  else if (datoB == datoA){
    resultado = "La tercera condición se cumplió";
} else if (datoB >= datoA){
    resultado = "La cuarta condición se cumplió";
} else if (datoB <= datoA){
    resultado = "La quinta condición se cumplió";
} else if (datoB != datoA){
    resultado = "La sexta condición se cumplió";
} else {
	resultado = "No se cumplieron las condiciones";
}

console.log("El resultado de la evaluación if-else-if es: ", resultado);
