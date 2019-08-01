function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, tu saldo es ${this.saldo}`;
}

const cliente1 = new Cliente('Jesus', 100);
console.log(cliente1);

//Banca empresas
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;   
}

//heredar prototype
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Softcun', 100000, 9142345, 'Tecnologia');

console.log(empresa);

console.log(empresa.nombreClienteSaldo());