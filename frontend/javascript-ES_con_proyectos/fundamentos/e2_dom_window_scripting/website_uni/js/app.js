//Event bubbling (burbujas)

const card = document.querySelector('.card');

const infoCurso = document.querySelector('.info-card');

const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e) {
    console.log('Click en Card');
    e.stopPropagation(); //impedir el event bubbling
});

infoCurso.addEventListener('click', function(e) {
    console.log('Click en Info Curso');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click', function(e) {
    console.log('Click en Agregar carrito');
    e.stopPropagation();
});