//String
const nombre1="jesus";
const nombre2 = new String('veronica');

console.log(typeof nombre2);
console.log(typeof nombre1);

//Numeros

const numero1=27
const numero2=new Number(27);

console.log(numero1);
console.log(numero2);

//Booleanos 
const boolean1 = true;
const boolean2 = new Boolean(true);

console.log(boolean1);
console.log(boolean2);

//Funciones
const funcion1 = function (a, b) {
    return a + b;
}

const funcion2 = new Function('a','b','return a+b');

console.log(funcion1(5,3));
console.log(funcion2(2,2));

//Objetos
const persona1 = {
    nombre: 'Jesus'
}

const persona2 = new Object({nombre: 'Jesus Ferrer'});

console.log(persona1);
console.log(persona2);

//Arreglos
const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4,5);

console.log(arreglo1);
console.log(arreglo2);
