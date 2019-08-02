class Cliente {
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido= apellido;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    tipoCliente() {
        let tipo;

        if (this.saldo > 10000) {
            tipo = 'Gold';
        } else if (this.saldo > 500000) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }

    static saludo(){
        return `Bienvenido humano x`;
    }
}

const ver = new Cliente('Vero', 'Avalos', 9789800);

console.log(ver);
console.log(ver.imprimirSaldo());
console.log(ver.tipoCliente());

console.log(Cliente.saludo());