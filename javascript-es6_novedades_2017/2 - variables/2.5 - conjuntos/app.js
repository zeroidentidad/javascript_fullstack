/*Conjuntos*/

var operadores = new Set();

operadores.add("+");
operadores.add("-");
operadores.add("*").add("/");

console.log(operadores.has("+"));

console.log(operadores.size);

operadores.delete("+");

console.log(operadores.size);

console.log("------");

operadores.forEach(
	(operador) => console.log(operador)
);