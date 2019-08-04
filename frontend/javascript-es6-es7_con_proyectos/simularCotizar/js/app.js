//Cotizador constructor
function Seguro(marca, anio, tipo) {
    this.marca= marca;
    this.anio = anio;
    this.tipo = tipo;
}

//Toda la interaccion en el DOM
function Interfaz() {
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
        console.log('faltan datos');
    }else{
        //Instanciar seguro:
        console.log('correcto');
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