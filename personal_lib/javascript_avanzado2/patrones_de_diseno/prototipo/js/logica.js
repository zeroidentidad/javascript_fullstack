var personaPrototipo = {
  decirNombre: function () {
    console.log('Mi nombre es' + this.nombre);
  }
};

var persona = Object.create(personaPrototipo, {
  'nombre': {
    value: "Natalia",
    enumerable: false 
  },
  'apellido': {
    value: 'Corea', 
    writable: false,
    configurable: false
  }
});

persona.apellido = "random"
delete persona.apellido;

for(var key in persona){
  console.log(key);
}