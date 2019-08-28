txtBtn.addEventListener('click', cargarTXT);
jsonBtn.addEventListener('click', cargarJSON);
apiBtn.addEventListener('click', cargarRest);


function cargarTXT () {
    fetch('datos.txt').then(
        function(res) {
            return res.text();
        }
    ).then(
        function(data) {
            resultado.innerHTML = data;
        }
    ).catch(
        function(error) {
        console.log(error);
    })
}

function cargarJSON () {
    fetch('personal.json').then(
        function(res) {
            return res.json();
        }
    ).then(
        function(data) {
            let html = '';
            data.forEach(function (persona) {
                html += `<li>${persona.nombre} - ${persona.puesto}</li>`
            })
            resultado.innerHTML = html;
        }
    ).catch(
        function(error) {
        console.log(error);
    })
}

function cargarRest () {
    fetch('https://picsum.photos/list').then(
        function(res) {
            return res.json();
        }
    ).then(
        function(fotos) {
            let html = '';
            fotos.forEach(function (foto) {
                html += `
                <li>
                <a href="${foto.post_url}" target="_blank">Ver foto</a>
                <p>Autor: ${foto.author}</p>
                </li>`
            })
            resultado.innerHTML = html;
        }
    ).catch(
        function(error) {
        console.log(error);
    })
}