
const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', function() {
    xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function() {
        if (this.status===200) {
            const persona = JSON.parse(this.responseText);

            const html = `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Trabajo: ${persona.trabajo}</li>
            </ul>
            `;

            document.getElementById("empleado").innerHTML = html;
        }
    }

    xhr.send();
})

const boton2 = document.getElementById('boton2');

boton2.addEventListener('click', function () {
    xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const personas = JSON.parse(this.responseText);

            let html = ``;
            personas.forEach(persona => {

            html += `
            <ul>
                <li>ID: ${persona.id}</li>
                <li>Nombre: ${persona.nombre}</li>
                <li>Empresa: ${persona.empresa}</li>
                <li>Trabajo: ${persona.trabajo}</li>
            </ul>
            `;
                           
            });

            document.getElementById("empleados").innerHTML = html; 
        }
    }

    xhr.send();
})