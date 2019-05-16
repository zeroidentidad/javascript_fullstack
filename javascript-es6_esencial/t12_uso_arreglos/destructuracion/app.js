"use strict"

//********************************
//*** Desestructuración de arreglos

var platillos = ["ceviche", "tacos", "pasta", "tostadas"];

// var platillo1 = platillos[0];
// var platillo2 = platillos[1];
// var platillo3 = platillos[2];

// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;
// var platillo4 = null;

var [platillo1, platillo2, platillo3, platillo4] = platillos; // esta forma inversa de asignacion me gusto

console.log(platillo1, platillo2, platillo3, platillo4)