console.time('revisión')

var animales = ["perro", "gato", "pez"];
var l = animales.length;

for (var i = 0; i < 10000; i++) {
    animales[i] = i;
}

console.timeEnd('revisión')