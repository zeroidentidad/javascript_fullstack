//Event delegation

document.body.addEventListener('click', elmininarElemento)

function elmininarElemento(e){
    e.preventDefault();
    //console.log('Click!');
    //console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')){
        //console.log('Si!');
        console.log(e.target.parentElement.parentElement.remove());
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('Curso agregado');
    }
}