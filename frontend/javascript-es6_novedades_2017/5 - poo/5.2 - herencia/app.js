/* Clases */
class Pelota{
	constructor(nombre){
		this.nombre = nombre;
	}

	marca(marca){
		this.marca = marca;
	}
}

class Rugby extends Pelota{
    constructor(nombre, forma){
        super(nombre);

        this.nombre = nombre;
        this.forma = forma;
    }
}

var rugby = new Rugby("Pelota de Rugby", "ovoide");
rugby.marca("Bota la pelota");

console.log(rugby);
console.log(rugby.forma);
