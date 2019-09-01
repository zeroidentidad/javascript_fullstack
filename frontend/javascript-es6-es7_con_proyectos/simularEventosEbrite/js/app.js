const token = new Token();
const evenbrite = new EventBrite();
const interfaz = new Interfaz();

//Listeners:
buscarBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const categoriaSeleccionada = listadoCategorias.options[listadoCategorias.selectedIndex].value;

    //revisar valor en campo de texto del buscador:
    if (evento.value !== ''){
        evenbrite.obtenerEventos(evento.value, categoriaSeleccionada)
        .then(datos => {
            if(datos.eventos.events.length > 0){
                interfaz.limpiarResultados();
                interfaz.mostrarEventos(datos.eventos)
            } else {
                interfaz.mostrarMsg('Sin resultados', 'alert alert-warning mt-4 text-center');
            }
        })
    }else{
        interfaz.mostrarMsg('Ingresa un valor de búsqueda', 'alert alert-danger mt-4 text-center');
    }
})