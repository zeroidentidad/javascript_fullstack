
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
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

     // Código de FETCH
     fetch(url).then(
          res => res.json()
     ).then(
          datos => {
               let html = `<ul class="lista">`;
               datos.forEach(nombre => {
                    html += `<li>${nombre.name}</li>`;
               });
               html += `</ul>`;
               resultado.innerHTML = html;
          }
     ).catch(
          error => console.log(error)
     )
}