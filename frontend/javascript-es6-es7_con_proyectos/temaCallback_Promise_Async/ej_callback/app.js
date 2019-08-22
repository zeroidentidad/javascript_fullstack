
//listado de paises

const paises = ['francia', 'mexico', 'usa', 'cosa']

function nuevoPais(pais, callbackMostrar) {
    setTimeout(() => {
       paises.push(pais);
       callbackMostrar();
    }, 2500);
}

function mostrarPaises() {
    setTimeout(() => {
        let html='';
        paises.forEach(function (pais) {
            html += `<li>${pais}</li>`;
        })
        document.getElementById('app').innerHTML = html
    }, 1000);
}

// agregar
nuevoPais('chile', mostrarPaises);

//mostrar
mostrarPaises();