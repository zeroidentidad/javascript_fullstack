//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

//Listeners
cargarEventListeners();

function cargarEventListeners() {
    //Cuando de presiona agregar carrito
    cursos.addEventListener('click', comprarCurso);

    //Cuando se presiona X en curso del carrito
    carrito.addEventListener('click', eliminarCurso);
}

//Funciones

function comprarCurso(e) {
    e.preventDefault();

    //Delegation agregar carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement
        //Enviar datos card elemento seleccionado
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    
    insertarCarrito(infoCurso);
}

//Mostrar curso seleccionado
function insertarCarrito(infoCurso){
    const row = document.createElement('tr');
    row.innerHTML=`
    <td><img width="100" src="${infoCurso.imagen}" /></td>
    <td>${infoCurso.titulo}</td>
    <td>${infoCurso.precio}</td>
    <td><a href="#" class="borrar-curso" data-id="${infoCurso.id}">X<a/></td>
    `;

    listaCursos.appendChild(row);
}

//Eliminar curso del carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();
    
    let curso;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
    }
}