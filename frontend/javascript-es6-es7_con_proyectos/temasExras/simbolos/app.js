const simbolo = Symbol();
const simbolo2 = Symbol('Desc simbolo2');

console.log(Symbol()==Symbol);

console.log(simbolo2);

let nombre = Symbol();
let apellido = Symbol();

let persona = {}

persona.nombre = 'Jesus'; //se agrega prop directamente
persona[nombre] = 'Antonio'; //se agrega symbol anterior
persona[apellido] = 'Ferrer' //se agrega el otro symbol
persona.edad = 26;

console.log(persona);
console.log(persona[nombre]); //acceder al simbolo
console.log('--------------------');
for(i in persona){
    console.log(`${i} : ${persona[i]}`)
}
//los simbolos no pueden ser iterados y accedidos como las propiedades de objetos