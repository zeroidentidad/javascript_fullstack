//Event listener click en buscador

//alert();

/*  document.querySelector('#submit-buscador').addEventListener('click', function(e) {
     e.preventDefault();
     alert("Buscando cursos");
 });
 */

 document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

 function ejecutarBoton(e) {
    e.preventDefault();
    let elemento

    elemento=e;
    elemento=e.target;

    console.log(elemento);
 }

 document.querySelector("#encabezado").addEventListener('click', function(e) {
     e.target.innerText = 'Encabezado modificado';
 })