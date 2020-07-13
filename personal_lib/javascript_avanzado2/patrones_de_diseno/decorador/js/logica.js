
class Usuario{
  constructor(nombre){
    this.nombre = nombre;
  }
  saludar(){
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

let usuario1 = new Usuario("John Doe");
usuario1.saludar();

let usuario2 = new Usuario("Jane Doe");
usuario2.direccion = "#14 de la Calle 13, avenida 4";
usuario2.saludar = function(){
  console.log(`Hola mi nombre es ${this.nombre}, yo vivo en ${this.direccion}`);
}
usuario2.saludar();

///////

class Ensalada{
  
  listaIngredientes = [];

  costoTotal(){
    return 0;
  }

  constructor(){}
}

const Ingredientes = {};

Ingredientes.tomate = (ensalada)=>{
  ensalada.listaIngredientes.push("tomate");
  let costo = ensalada.costoTotal();
  ensalada.costoTotal = ()=> costo + 0.5;
}

Ingredientes.lechuga = (ensalada)=>{
  ensalada.listaIngredientes.push("lechuga");
  let costo = ensalada.costoTotal();
  ensalada.costoTotal = ()=> costo + 0.2;
}

Ingredientes.aguacate = (ensalada)=>{
  ensalada.listaIngredientes.push("aguacate");
  let costo = ensalada.costoTotal();
  ensalada.costoTotal = ()=> costo + 1;
}

Ingredientes.pimiento = (ensalada)=>{
  ensalada.listaIngredientes.push("pimiento");
  let costo = ensalada.costoTotal();
  ensalada.costoTotal = ()=> costo + 0.15;
}

Ingredientes.maizDulce = (ensalada)=>{
  ensalada.listaIngredientes.push("maizDulce");
  let costo = ensalada.costoTotal();
  ensalada.costoTotal = ()=> costo + 0.2;
}

Ingredientes.huevo = (ensalada)=>{
  ensalada.listaIngredientes.push("huevo");
  let costo = ensalada.costoTotal();
  ensalada.costoTotal = ()=> costo + 0.5;
}

let ensalada = new Ensalada();
Ingredientes.lechuga(ensalada);
Ingredientes.tomate(ensalada);
Ingredientes.aguacate(ensalada);
Ingredientes.aguacate(ensalada);
Ingredientes.pimiento(ensalada);

console.log("Ingredientes: "+ensalada.listaIngredientes.join());
console.log("Costo total: "+ensalada.costoTotal());

