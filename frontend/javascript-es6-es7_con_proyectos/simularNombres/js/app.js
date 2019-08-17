document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e) {
    e.preventDefault();

    // Leer variables
    const pais = document.getElementById('pais');
    const paisSeleccionado = pais.options[pais.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;


    let urls = [
        "http://uinames.com/api/?",
        "https://uinames.com/api/?"
    ];
    
    let url = urls[Math.floor(Math.random() * urls.length)];

    console.log(url);

    // Si hay pais agregarlo a URL
    if (paisSeleccionado !== '') {
        url += `region=${paisSeleccionado}&`;
    }
    // Si hay un genero agregarlo a URL
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    // Si hay una cantidad agregarlo a URL
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }

    // Iniciar XMLHTTPRequest
    const xhr = new XMLHttpRequest();
    // Abrimos la conexion
    xhr.open('GET', url, true);
    // Datos e impresion del template
    xhr.onload = function () {
        if (this.status === 200) {
            const nombres = JSON.parse(this.responseText);

                // Generar el HTML
                let html = `<ul class="lista">`;

                // Imprimir cada nombre
                nombres.forEach(function (nombre) {
                    html += `<li>${nombre.name}</li>`;
                });

                html += `</ul>`;

                document.getElementById('resultado').innerHTML = html;
        }
    }
    // Enviar el Request
    xhr.send();
}