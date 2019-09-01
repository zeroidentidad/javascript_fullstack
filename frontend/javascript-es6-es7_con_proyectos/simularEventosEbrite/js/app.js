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
        console.log('Nada...')
    }
})