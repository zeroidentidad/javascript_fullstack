const cliente = {
    nombre: 'Jesus',
    saldo: 1000,
    tipoCliente: function(){
        let tipo;
        
        if(this.saldo>1000){
            tipo='Gold';
        }else if(this.saldo>500){
            tipo='Platinum';
        }else{
            tipo='Normal';
        }

        return tipo;
    }
}

//console.log("Tipo cliente: ", cliente.tipoCliente());
//console.log("Saldo: ", cliente.saldo);

//Metodo alternativo
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function () {
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
}

const persona = new Cliente('Jesus Ferrer', 5678);

console.log("Persona: ", persona);
console.log("Persona: ", persona.tipoCliente());