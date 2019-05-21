/** Variables de bloque **/

function mostrarProducto(){
	
	let fruta = "manzana";
	console.log("Dentro de la función: " + fruta);

	for (let i = 0; i <= 10; i++) {
		console.log("Fruta: " + i)
	}

	console.log("Fruta al terminar el ciclo: " + i)
}

mostrarProducto();

console.log("Fuera de la función: " + fruta +  i); //error