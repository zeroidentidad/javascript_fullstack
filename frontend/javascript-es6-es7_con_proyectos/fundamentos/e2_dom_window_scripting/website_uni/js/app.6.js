//Traversing

const navegacion = document.querySelector('#principal');

//console.log(navegacion.childNodes);
//console.log(navegacion.children);
/* console.log(navegacion.nodeName);
console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);
console.log(navegacion.children[0].textContent='enlace Mod'); */

/*
1 = Elementos
2 = Atributos
3 = Text Node
8 = comentarios
9 = documentos
10 = doctype
*/

const barra = document.querySelector('.barra');

/* console.log(barra.children[0].children[0].children); */

const cursos = document.querySelectorAll('.card');

console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);
console.log(cursos[0].childElementCount);