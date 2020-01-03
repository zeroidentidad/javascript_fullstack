const lodash = require("lodash");


// Establecer true para probar rápidamente el escenario de victoria. Nota: ¡esto solo funcionará para una cuadrícula de 3x3!
const testWin = false;

module.exports = function() {

  // Agarra el tamaño de la matriz de state.
  const numberOfTilesAcross = this.state.numberOfTilesAcross;
  const numberOfTilesDown = this.state.numberOfTilesDown;

  // Generar una matriz ordenada de números de mosaico.
  let tileNumbers = [];
  for (let i = 1; i < numberOfTilesAcross * numberOfTilesDown; i++) {
    tileNumbers.push(i);
  }

  // Seguir intentando hasta llegar a un acomodo solucionable.
  let isSolvable = false;
  while (!isSolvable) {

    // Mezcla los números de los mosaicos.
    tileNumbers = lodash.shuffle(tileNumbers);
    if (testWin) {
      tileNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 0 ];
      isSolvable = true;
      continue;
    }

    // Ahora contar cuántas inversiones hay.
    const numberOfTiles = numberOfTilesAcross * numberOfTilesDown;
    let inversionCount = 0;
    for (let i = 0; i < numberOfTiles - 1; i++) {
      for (let j = 1; j < numberOfTiles; j++) {
        if (tileNumbers[j] && tileNumbers[i] &&
          tileNumbers[i] > tileNumbers[j]
        ) {
          inversionCount = inversionCount +1;
        }
      }
    }

    // Prueba simple para determinar si esta disposición es solucionable en función del número de inversiones.
    isSolvable = (inversionCount % 2 === 0);

  } // Fin while.

  return tileNumbers;

};
