//Object Create
const Cliente = {
    imprimirSaldo: function(){
        return `${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function (retiro) {
        return this.saldo -= retiro
    }
}

//crear objeto
const me = Object.create(Cliente);
me.nombre = 'Jesus';
me.saldo = 1000;

me.retirarSaldo(700);

console.log(me.imprimirSaldo());