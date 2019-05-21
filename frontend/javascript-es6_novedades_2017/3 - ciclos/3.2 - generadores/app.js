/* Generadores */
function *Contador(){
  var i = 0;
  while(1<2) {
  	  yield i;
  	  yield "hola";
  	  yield "de nuevo";
  	  yield "bye"
      i++;
  }
}

var contador = Contador();

console.log(contador.next()); // {value: 0, done:false}
console.log(contador.next()); // {value: 1, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
console.log(contador.next()); // {value: 2, done:false}
