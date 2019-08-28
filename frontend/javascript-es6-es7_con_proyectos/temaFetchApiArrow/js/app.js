txtBtn.addEventListener('click', cargarTXT);
jsonBtn.addEventListener('click', cargarJSON);
apiBtn.addEventListener('click', cargarRest);


function cargarTXT () {
    fetch('datos.txt').then(
        res => res.text()
    ).then(
        data => resultado.innerHTML = data
    ).catch(
        error => console.log(error)
    )
}

function cargarJSON () {
    fetch('personal.json').then(
        res => res.json()
    ).then(
        data => {
            let html = '';
            data.forEach(function (persona) {
                html += `<li>${persona.nombre} - ${persona.puesto}</li>`
            })
            resultado.innerHTML = html;
        }
    ).catch(
        error => console.log(error)
    )
}

function cargarRest () {
    fetch('https://picsum.photos/list').then(
        res => res.json()
    ).then(
        fotos => {
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
        error => console.log(error)
    )
}