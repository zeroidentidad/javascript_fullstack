//Cotizador constructor
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro = function () {
    //console.log(info);
    /* Sobre:
        1 = americano -> 1.15, 2 = asiatico -> 1.05, 3 = europeo -> 1.35
    */
     //Precio base:
     const base = 2500;
     let cantidad;
     switch (this.marca) {
         case '1':
             cantidad = base * 1.15
             break;
         case '2':
             cantidad = base * 1.05
             break;
         case '3':
             cantidad = base * 1.35
             break;                  
         default:
             break;
     }

     //Usar año:
     const diferencia = new Date().getFullYear()-this.anio;
     //Cada año de diferencia se reducira 2.5% el valor del seguro:
     cantidad -= ((diferencia*2.5)*cantidad)/100;

     //Usar tipo:
     /* Info:
        Basico se multiplica por 30%
        Completo se multipĺlica por 50% mas
     */
    if(this.tipo=='basico'){
        cantidad *= 1.30;
    } else if (this.tipo=='completo'){
        cantidad *= 1.50;
    }

    //console.log(cantidad);

    return cantidad;
}

//Toda la interaccion en el DOM
function Interfaz() {}

Interfaz.prototype.mostrarMsge = function (mensaje, tipo) {
    const div = document.createElement('div');

    if (tipo =='error') {
        //div.classList = 'error';
        div.classList.add('mensaje', 'error');
    } else{
        div.classList.add('mensaje', 'correcto');;
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(() => {
        //div.remove();
        document.querySelector('.mensaje').remove();
    }, 2500);
}

//Event listeners
const formulario = document.getElementById('cotizar-seguro');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const marca = document.getElementById('marca');
    const marcaSelect = marca.options[marca.selectedIndex].value;

    const anio = document.getElementById('anio');
    const anioSelect = anio.options[anio.selectedIndex].value;

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //console.log(`Presionado, Marca: ${marcaSelect}, Año: ${anioSelect}, Tipo: ${tipo}`);

    const interfaz = new Interfaz();

    //Revisar campos:
    if (marcaSelect === ''||anioSelect === ''||tipo === '' ){
        interfaz.mostrarMsge('Faltan datos, revisar formulario. Reintentar.', 'error');
    }else{
        //Instanciar seguro:
        const seguro = new Seguro(marcaSelect, anioSelect, tipo);
        //console.log(seguro);
        
        //Cotizar algorithm call
        const cantidad = seguro.cotizarSeguro(seguro);
    }
});

//Select option año:
const max = new Date().getFullYear(), min = max-20;
const selectAnios = document.getElementById('anio');

for (let index = max; index > min; index--) {
    let option = document.createElement('option');
    option.value = index;
    option.innerHTML = index;
    selectAnios.appendChild(option);
}