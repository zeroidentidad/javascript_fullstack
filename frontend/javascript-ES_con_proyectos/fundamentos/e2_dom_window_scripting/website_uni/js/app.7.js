//Traversing inverso
const enlaces = document.querySelectorAll('.enlace');

//console.log(enlaces[0].parentNode);
/* console.log(enlaces[0].parentElement);
console.log(enlaces[0].parentElement.parentElement);
console.log(enlaces[0].parentElement.parentElement.parentElement); */

const cursos = document.querySelectorAll('.card');
/* console.log(cursos[0]);
console.log(cursos[0].parentElement);
console.log(cursos[0].parentElement.parentElement); */
console.log(cursos[0].parentElement.parentElement.parentElement);
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent='hola ese');

const enlacesibling = document.querySelectorAll('.enlace');

console.log(enlacesibling[4].previousElementSibling.previousElementSibling);

console.log(enlacesibling[0].nextElementSibling);

console.log(enlacesibling[0].nextElementSibling.nextElementSibling.parentElement.children[4]);
