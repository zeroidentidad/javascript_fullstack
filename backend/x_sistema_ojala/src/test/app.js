const vuelo = require("../vuelos/methods");

let vuelo1={
    numero:12,
    origen: "Villahermosa",
    destino: "Hermosillo"
}

let v1 = vuelo(vuelo1);

v1.triggerPartida();
v1.triggerLlegada();

console.log(v1.getInfo());

let vuelo2={
    numero: 13,
    origen: "Monterrey",
    destino: "Villahermosa"
}

let v2 = vuelo(vuelo2);

v2.triggerPartida();
v2.triggerLlegada();

console.log(v1.getInfo());
console.log(v2.getInfo());