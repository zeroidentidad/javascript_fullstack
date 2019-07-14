    // func1
var suma = (n1,n2) => {
    resultado = n1 + n2;
    return resultado;
}
var OtroObj = { nombre: 'Otro objeto JS' }; //5  // obj2
    
// obj1
var miPelicula = {
    titulo: 'XXX', //2 
    fecha: new Date(), //1
    personajes: ["Un pelon", "Rayo bobin"], //6
    miFuncion: suma(80, 20), //3 // func1
    nombre: 'lo jabenyer', //4
    nuevoObj: OtroObj //5 // obj en obj
}
var {nombre} = miPelicula //4 //destructuración obj1

 // func2          //1    //2   //3 desglose   //4     //5     //6
function test(fecha, titulo, {miFuncion}, nombre, objeto, indice) {
    console.log(fecha.toDateString());
    console.log(titulo.substring(0,1)); //substraer X
    console.log(miFuncion);
    console.log(nombre);
    console.log(objeto);
    console.log(indice);
}
test(
    //1                  //2           //3
miPelicula.fecha, miPelicula.titulo, miPelicula,
  //4              //5                   //6
nombre, miPelicula.nuevoObj.nombre, miPelicula.personajes[0]
);