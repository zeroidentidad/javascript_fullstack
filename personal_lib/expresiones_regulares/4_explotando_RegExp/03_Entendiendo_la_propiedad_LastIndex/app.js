// var expresion1 = /y/g;

// console.log(expresion1.lastIndex);

// expresion1.lastIndex = 6;
// console.log(expresion1.lastIndex);

// var coincidencia = expresion1.exec('sibr yfx sibr yfx');

// console.log(coincidencia);
// console.log(expresion1.lastIndex);

var expresion2 = /\d/g;

console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));
console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));
expresion2.lastIndex = 0;
console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));