const cotizador = new Cotizador();
const interfaz = new Interfaz();

//id html
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    //Trata moneda seleccionada
    const monedaSeleccionada = moneda.options[moneda.selectedIndex].value;

    const criptoSeleccionada = criptomoneda.options[criptomoneda.selectedIndex].value;

    //comprobar seleccionados
    if (monedaSeleccionada === '' || criptoSeleccionada ===''){
        interfaz.mostrarMensaje('Es necesario seleccionar ambos campos.', 'deep-orange darken-4 card-panel')
    } else {
        cotizador.obtenerValores(monedaSeleccionada, criptoSeleccionada)
        .then(datos => {
            interfaz.mostrarResultado(datos.resultado[0], monedaSeleccionada.toLowerCase());
        })
    }
})