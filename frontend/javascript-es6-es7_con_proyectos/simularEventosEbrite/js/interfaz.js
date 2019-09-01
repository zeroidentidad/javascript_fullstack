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

    //imprimir mensajes ui
    mostrarMsg(mensaje, clase){
        const div = document.createElement('div');
        div.classList = clase
        div.appendChild(document.createTextNode(mensaje));

        buscador.appendChild(div);

        setTimeout(() => {
            this.limpiarMsg()
        }, 2900);
    }

    limpiarMsg(){
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

    //limpiar resultados previos:
    limpiarResultados(){
        resultadoEventos.innerHTML = '';
    }

    mostrarEventos(eventos){
        const listaEventos = eventos.events;
        console.log(listaEventos);
        //recorrer y crear template
        listaEventos.forEach(evento => {
            resultadoEventos.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}"/>
                        <div class="card-body">
                            <div class="card-text">
                            <h3 class="text-center">${evento.name.text}</h3>
                            <p class="lead text-info">Datos del evento:</p>
                            <p>${evento.description.text.substring(0, 250)}...</p>
                            <span class="badge badge-primary">Capacidad: ${evento.capacity !== null ? evento.capacity : '∞'}</span>
                            <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>
                            <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
    }
}