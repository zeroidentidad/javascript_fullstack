let cliente = new Map();
cliente.set('nombre', 'Jesus');
cliente.set('tipo', 'normal');
cliente.set('saldo', 3000);

console.log(cliente);

//acceder a los valores:
console.log(cliente.get('nombre'));

//tamaño del map:
console.log(cliente.size);

//comprobar que valor o propiedad existe:
console.log(cliente.has('tipo'));

//borrar propiedad map:
cliente.delete('tipo');
console.log(cliente);

//limpiar map:
cliente.clear();
console.log(cliente);

//asignar valores por default:
const paciente = new Map(
    [['nombre', 'Persona'], ['habitacion', 120]]
)

paciente.set('nombre', 'Antonio');

console.log(paciente);

paciente.forEach((valor, index) => {
    console.log(`${index} : ${valor}`);
} )