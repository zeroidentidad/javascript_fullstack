document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    const xhr = new XMLHttpRequest();

    //Abrir conexion
    xhr.open('GET', 'datos.txt', true);

    //procesar: cargada correctamente la peticion
    /*xhr.onload = function () {
        if(this.status===200) {
            document.getElementById('listado').innerHTML=`<h2>${this.responseText}</h2>`;
        }
    }*/

    //procesar: al cambiar el estado peticion [0,1,2,3,4]
    xhr.onreadystatechange = function () {
        console.log(this.readyState);
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('listado').innerHTML = `<h2>${this.responseText}</h2>`;
        }       
    }
    
    xhr.send();
}