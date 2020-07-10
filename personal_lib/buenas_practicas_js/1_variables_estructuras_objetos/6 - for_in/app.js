var persona = {
	nombre: "Sergio",
	email: "sergiobritor@gmail.com",
	twitter: "yacafx",
	saludar: function(){
		return "Hola mundo"
	}
}

var dato = "";

for (dato in persona){
	console.log(dato, persona[dato]);
}