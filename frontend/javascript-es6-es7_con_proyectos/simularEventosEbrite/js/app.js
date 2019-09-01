const token = new Token();
const evenbrite = new EventBrite();
const interfaz = new Interfaz();

//Listeners:
buscarBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    const categoriaSeleccionada = listadoCategorias.options[listadoCategorias.selectedIndex].value;

    //revisar valor en campo de texto del buscador:
    if (evento.value !== ''){
        console.log('Buscando...')
    }else{
        interfaz.mostrarMsg('Ingresa un valor de búsqueda', 'alert alert-danger mt-4 text-center');
    }
})