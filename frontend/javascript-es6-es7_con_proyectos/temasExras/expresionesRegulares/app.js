
let valor, expReg;

// contenido numerico
expReg = /[0123456789]/; 
//igual:
expReg2 = /[0-9]/; 

valor = 1992;

console.log(expReg.test(valor)); //true
console.log(expReg.test('Hola')); //false
console.log(expReg2.test(valor)); //true

// encontrar patron fecha
expReg3 = /\d\d-\d\d-\d\d\d\d/;
valor2 = '23-09-2019';
console.log(expReg3.test(valor2)); //true

// validar patron hora
expReg4 = /\d\d:\d\d/
valor3 = '06:51'
console.log(expReg4.test(valor3)); //true

expReg5 = /\d\d:\d\d \D\D/
valor4 = '06:51 am'
console.log(expReg5.test(valor4)); //true

// digitos 0-N...
expReg6 = /\d+/
valor5 = 132324354455455
console.log(expReg6.test(valor5)); //true

// negar la expresion ^
expReg7 = /[^0-9]/;
valor6 = 1992;
console.log(expReg7.test(valor6)); //false
console.log(expReg7.test('valor6')); //true

// sintaxis con llaves ej; {1,2} 
// ejemplo para evaluar fecha con 1 0 2 digitos D-M ej; 1-1-1992 ó 01-01-1992
expReg8 = /\d{1,2}-\d{1,2}-\d{4}/
fecha = '23-09-2019';
fecha2 = '1-1-2019';
console.log(expReg8.test(fecha)); //true
console.log(expReg8.test(fecha2)); //true

// letras o numeros
expReg9 = /\w+/
console.log(expReg9.test('texto de prueba')); //true
console.log(expReg9.test(1234)); //true
console.log(expReg9.test(' ')); //false

// 1 o mas numeros
expReg10 = /\d+/
console.log(expReg10.test(12334)); //true
console.log(expReg10.test('HOla4')); //true

// variante mas estricto, solo numeros sin letras
expReg11 = /([0-9])\w+/;
console.log(expReg11.test(12334)); //true
console.log(expReg11.test('HOla4')); //false

//texto algunas mayusculas
expReg12 = /([A-Z])\w+/;
console.log(expReg12.test('HOla4')); //true
console.log(expReg12.test('HOLA MUNDO')); //true
console.log(expReg12.test('12344')); //false

//texto algunas minusculas
expReg13 = /([a-z])\w+/;
console.log(expReg13.test('Hola4')); //true
console.log(expReg13.test('HOLA MUNDO')); //false
console.log(expReg13.test('12344')); //false

// herramienta web para construccion de expresiones regulares: https://regexr.com/