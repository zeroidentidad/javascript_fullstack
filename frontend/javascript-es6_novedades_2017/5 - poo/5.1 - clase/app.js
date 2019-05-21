/* Clases */
class Pelota{
	constructor(nombre){
		this.nombre = nombre;
	}

	marca(marca){
		this.marca = marca;
	}
}

var pelota = new Pelota("golf");
pelota.marca("La pelota mágica");

console.log(pelota);
console.log(pelota.nombre);
console.log(pelota.marca);