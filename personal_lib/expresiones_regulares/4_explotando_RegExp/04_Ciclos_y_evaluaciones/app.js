var mensaje = "Llegaban por montones, primero 10, después 20, después 35 y se duplicaban hasta llegar a 1000";

var patron = /\b(\d+)\b/g;

var match;

while (match = patron.exec(mensaje)) {
    console.log(match)
    console.log("Se encontró ", match[1], " en la posición: ", match.index);
}