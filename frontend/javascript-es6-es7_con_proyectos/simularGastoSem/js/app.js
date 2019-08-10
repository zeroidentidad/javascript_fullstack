//Variables
const presupuestoUsuario = document.getElementById('presupuestoInicial');
const formulario = document.getElementById('agregar-gasto');

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

    imprimirMsje(mensaje, tipo){
        const divMsje = document.createElement('div');
        divMsje.classList.add('text-center', 'alert');
        if (tipo==='error') {
            divMsje.classList.add('alert-danger')
        }else{
            divMsje.classList.add('alert-success')     
        }
        divMsje.appendChild(document.createTextNode(mensaje));
        document.querySelector('.primario').insertBefore(divMsje, formulario);

        // quitar alert despues de 2.5 seg
        setTimeout(() => {
            document.querySelector('.primario .alert').remove()
            formulario.reset()
        }, 2500);
    }
}

//Event Listeners
presupuestoUsuario.addEventListener('blur', function (){
    if (presupuestoUsuario.value === null || presupuestoUsuario.value ===''){
        alert('Agrega presupuesto inicial');
    } else {
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario.value);
        //instanciar interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
})

formulario.addEventListener('submit', function (e){
    e.preventDefault();

    //Leer datos gastos:
    const nombreGasto = document.getElementById('gasto').value;
    const cantidadGasto = document.getElementById('cantidad').value;

    //instanciar interfaz
    const ui = new Interfaz();
    if (nombreGasto === '' || cantidadGasto === '') {
        // mensaje y tipo:
        ui.imprimirMsje('Ocurrio un error', 'error')
    } else {
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
})