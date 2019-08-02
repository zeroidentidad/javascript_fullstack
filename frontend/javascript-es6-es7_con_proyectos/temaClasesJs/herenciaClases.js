class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`
    }

    static saludo(){
        return `Bienvenido humano x`;
    }
}

const cliente = new Cliente('Vero', 10230);

console.log(cliente);

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo){
        //Para ir al constructor padre
        super(nombre, saldo);
        //no existen en el padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static saludo() {
        return `Bienvenido empresa x`;
    }

}

const empresa = new Empresa('Empresa1', 10000, 993329984, 'Tenconologia');

console.log(empresa);

console.log(empresa.imprimirSaldo());

console.log(Empresa.saludo());