//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//Listeners
cargarEventListeners();

function cargarEventListeners() {
    //Cuando de presiona agregar carrito
    cursos.addEventListener('click', comprarCurso);

    //Cuando se presiona X en curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Al presionar Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar DOM mostrar localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
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
    guardarCursoLocalStorage(infoCurso);
}

//Eliminar curso del carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();
    
    let curso;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
    }
}

//Eliminar todos los cursos del carrito en el DOM
function vaciarCarrito(){
    // innerHTML vs while
    while(listaCursos.firstChild){ // el sig pasa a ser el primero
        listaCursos.removeChild(listaCursos.firstChild)
    }

    return false;
}

//Almacenar curso del carrito en el localStorage

function guardarCursoLocalStorage(curso){
    let cursos;

    cursos = obtenerCursosLocalStorage();

    //curso seleccionado se agrega al arreglo vacio o al final de los elementos existentes
    cursos.push(curso);
    
    localStorage.setItem('cursos', JSON.stringify(cursos))
}

//Comprobar elementos en localStorage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //comprobar si hay algo en localSotrage
    if(localStorage.getItem('cursos')===null){
        cursosLS = [];
    }else{
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursosLS;
}

//Imprimir cursos de localStorage
function leerLocalStorage () {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function (curso) {
        //construir template
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img width="100" src="${curso.imagen}" /></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">X<a/></td>
        `;

        listaCursos.appendChild(row);
    })
}