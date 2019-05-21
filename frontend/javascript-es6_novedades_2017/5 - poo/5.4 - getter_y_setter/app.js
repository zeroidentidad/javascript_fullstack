/* getter y setter*/
class Pelota{
	get nombre(){
		return this._nombre;
	}

	set nombre(nombre){
		this._nombre = nombre;
	}
}

var pelota = new Pelota();

console.log(pelota.nombre);

pelota.nombre = "golf";

console.log(pelota.nombre);