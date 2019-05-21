/* Object.assign() */

var cuenta = {cliente: "Jesus Ferrer"};
var alimentos = {nombre: "hamburguesa", cantidad: 2};
var bebidas = {tipo: "soda", sabor: "naranja"};

console.log(cuenta);

Object.assign(cuenta, alimentos, bebidas);

console.log(cuenta.nombre);

console.log(cuenta.tipo);