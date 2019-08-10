//Variables
const presupuestoUsuario = document.getElementById('presupuestoInicial');
let cantidadPresupuesto;

//Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
    }

    //Metodo para ir haciendo el restante del presupuesto
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }    
}

class Interfaz {
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //insertar html
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
}

//Event Listeners
presupuestoUsuario.addEventListener('blur', function () {
    if (presupuestoUsuario.value === null || presupuestoUsuario.value ===''){
        alert('Agrega presupuesto inicial');
    } else {
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario.value);
        //instanciar interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
})