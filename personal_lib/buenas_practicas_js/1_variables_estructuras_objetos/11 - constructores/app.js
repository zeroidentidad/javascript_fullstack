function Persona(nombre, apellidos){
	this.nombre = nombre;
	this.apellidos = apellidos;
}

var persona = new Persona("Sergio", "Brito");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellidos);