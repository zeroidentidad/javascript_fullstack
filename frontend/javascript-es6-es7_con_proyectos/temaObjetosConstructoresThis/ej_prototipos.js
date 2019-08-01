function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


//Crear un prototype
Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, tu saldo es ${this.saldo}, tipo cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function (retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente('Jesus', 100);

console.log(cliente1);

console.log(cliente1.tipoCliente());

console.log(cliente1.nombreClienteSaldo());

console.log(cliente1.retirarSaldo(70));