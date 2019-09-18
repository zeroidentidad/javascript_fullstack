//Generador

function *crearGenerador(){
    yield 1;
    yield 'Nombre';
    yield 3+4;
    yield true;
}

//uso:
const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function *nuevoGenerador(elementos) {
    for (let index = 0; index < elementos.length; index++) {
        yield elementos[index];
    }
}

//uso:
const elementos = ['Uno', 'Dos', 'Tres', 'Cuatro'];

const nuevoIterador = nuevoGenerador(elementos);

console.log(nuevoIterador.next().value);
console.log(nuevoIterador.next().value);