class Interfaz {
    constructor(){
        this.init();
        this.resultadoEventos;
    }

    // metodo de inicializacion:
    init(){
        this.imprimirCategorias();
    }

    //mostrar categorias
    imprimirCategorias() {
        const listaCategoria = evenbrite.obtenerCategorias()
        .then(datos => {
            const lascategorias = datos.categorias.categories;
            // pasar a select categorias
            lascategorias.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.id;
                option.appendChild(document.createTextNode(cat.name_localized));

                listadoCategorias.appendChild(option);
            })
        })
    }
}