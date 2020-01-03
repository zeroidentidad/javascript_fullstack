const lodash = require("lodash");

/**
 * Comprueba si el jugador ganó después de un movimiento.
 */
module.exports = function() {

  // Acoplar la matriz virtualTiles en una NUEVA matriz (en otras palabras: tomar
  // la matriz multidimensional y producir una unidimensional).
  // No podemos meternos con la matriz original!
  const virtualTiles = lodash.flattenDeep(this.state.virtualTiles);

  // Crear una matriz cuya longitud coincida con virtualTilesClone y el contenido de quién
  // son solo números, comenzando en uno, ascendiendo en uno. Para decirlo de
  // otra forma: crear una matriz de números en el orden correcto que representa una victoria.
  const numberOfTiles = this.state.numberOfTilesAcross * this.state.numberOfTilesDown;
  const winningArray = Array.from({ length : numberOfTiles - 1 }, (v, k) => k + 1);

  // Ahora, iterar sobre la matriz virtualTiles y ver si tileNum en cada uno
  // coincide con el elemento correspondiente en el arreglo ganador, omitiendo el
  // mosaico vacío.
  let playerWon = true;
  for (let i = 0; i < virtualTiles.length; i++) {
    if (virtualTiles[i].tileNum !== 0 &&
      virtualTiles[i].tileNum !== winningArray[i]
    ) {
      playerWon = false;
      break;
    }
  }

  // Si gano, mostrar la pantalla que ganó y desactivar el botón del menú de control.
  if (playerWon) {
    this.setState({ wonVisible : true, controlMenuButtonDisabled : true });
  }

};
