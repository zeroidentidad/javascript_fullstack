function clickHandler(event){
  alert("botón presionado!");
  event.target.removeEventListener('click', clickHandler);
}

document.getElementById("btn").addEventListener('click', clickHandler);

/////



class Publisher{

  //key es el nombre del evento, valor es un array de funciones
  eventos = new Map();

  constructor(){}

  publicar(evento, valores){
    const suscriptores = this.eventos.get(evento);
    suscriptores.forEach(sub=> sub(valores));
  }

  suscribir(evento, func){
    if(!this.eventos.has(evento)){
      this.eventos.set(evento, [func]);
    }else{
      let sub = this.eventos.get(evento);
      sub.push(func);
      this.eventos.set(evento, sub);
    }
  }

  desvincular(evento, func){
    if(!this.eventos.has(evento)){
      return;
    }
    let sub = this.eventos.get(evento);
    sub.splice(sub.indexOf(func), 1);
    this.eventos.set(evento, sub);
  }
}

function subscriptor1(mensaje){
  console.log("subscriptor1: "+mensaje);
}

function subscriptor2(mensaje){
  console.log("subscriptor2: "+mensaje);
}

const publisher = new Publisher();

publisher.suscribir("mensaje", subscriptor1);
publisher.suscribir("mensaje", subscriptor2);
publisher.publicar("mensaje", "mi primer mensaje");
publisher.desvincular("mensaje", subscriptor1);
publisher.publicar("mensaje", "mi segundo mensaje");






class A{
  constructor(bus){
    this.eventBus = bus;
  }

  notificarB(){
    this.eventBus.publicar("archivo-cargado", "mensaje de A para B");
  }
}

class B{
  constructor(bus){
    this.eventBus = bus;
    this.eventBus.suscribir("archivo-cargado", this.eventHandler);
  }
  eventHandler(mensaje){
    console.log(mensaje);
  }
}

const a = new A(publisher);
const b = new B(publisher);
a.notificarB();
