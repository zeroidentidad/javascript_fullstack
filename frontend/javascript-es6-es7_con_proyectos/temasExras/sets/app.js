let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #4');

console.log(carrito);
console.log(carrito.size);
carrito.delete('Camisa');
console.log(carrito.has('Camisa'));
console.log(carrito.size);
carrito.forEach((producto, index)=>{
    console.log(`${index} : ${producto}`);
})
console.log("=============================================");
// set a arreglo:
const arregloCarrito = [...carrito];
console.log(arregloCarrito);

console.log("=============================================");

let numeros = new Set([1,2,3,4,5,6,7,1,2,3]);

console.log(numeros);
console.log(numeros.size);