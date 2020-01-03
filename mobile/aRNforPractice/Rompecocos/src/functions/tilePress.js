import { Animated } from "react-native";


/**
 * Manejar eventos press en los mosaicos.
 *
 * @param inRefID El ID de referencia del mosaico presionado.
 */
module.exports = function(inRefID) {

  // Anular si el menú de control está actualmente visible.
  if (this.state.controlMenuVisible) { return; }

  // Comenzar por obtener el componente físico del mosaico.
  const tile = this.state.refs[inRefID];

  // Encontrar este mosaico en la matriz virtualTiles basado en inRefID y
  // obtener una referencia al objeto de mosaico virtual y 
  // registrar la ubicación del mosaico en la matriz.
  const virtualTiles = this.state.virtualTiles;
  let virtualTile = null;
  let tileLoc = null;
  const numberOfTilesAcross = this.state.numberOfTilesAcross;
  const numberOfTilesDown = this.state.numberOfTilesDown;

  for (let row = 0; row < numberOfTilesDown; row++) {
    const rowArray = virtualTiles[row];
    for (let col = 0; col < numberOfTilesAcross; col++) {
      const vt = rowArray[col];
      if (vt.refID === inRefID) {
        virtualTile = vt;
        tileLoc = { row : row, col : col };
        break;
      }
    }
  }

  // Obtener referencias a los mosaicos virtuales alrededor de este
  // en las cuatro direcciones cardinales.
  let virtualTileLeft = null;
  let virtualTileRight = null;
  let virtualTileAbove = null;
  let virtualTileBelow = null;
  try {
    virtualTileLeft = virtualTiles[tileLoc.row][tileLoc.col - 1];
  } catch (e) { }
  try {
    virtualTileRight = virtualTiles[tileLoc.row][tileLoc.col + 1];
  } catch (e) { }
  try {
    virtualTileAbove = virtualTiles[tileLoc.row - 1][tileLoc.col];
  } catch (e) { }
  try {
    virtualTileBelow = virtualTiles[tileLoc.row + 1][tileLoc.col];
  } catch (e) { }

  // Obtener el ancho y la altura de un mosaico individual.
  const tileWidth = this.state.tileWidth;
  const tileHeight = this.state.tileHeight;

  // Comenzar asumiendo que el mosaico no se moverá.
  let moveTile = false;

  // Advertencia: usar un método interno como este es peligroso! A veces se necesita.
  let toLeftValue = tile.props.style[1].left.__getValue();
  let toTopValue = tile.props.style[1].top.__getValue();

  // Si el mosaico a la izquierda está vacío, mover este mosaico allí.
  if (virtualTileLeft && parseInt(virtualTileLeft.tileNum) === 0) {
    toLeftValue = toLeftValue - tileWidth;
    moveTile = true;
    // Intercambiar los dos mosaicos virtuales en la matriz.
    virtualTiles[tileLoc.row][tileLoc.col] = virtualTileLeft;
    virtualTiles[tileLoc.row][tileLoc.col - 1] = virtualTile;
  }

  // Si el mosaico a la derecha está vacío, mover este mosaico allí.
  if (virtualTileRight && parseInt(virtualTileRight.tileNum) === 0) {
    toLeftValue = toLeftValue + tileWidth;
    moveTile = true;
    // Intercambiar los dos mosaicos virtuales en la matriz.
    virtualTiles[tileLoc.row][tileLoc.col] = virtualTileRight;
    virtualTiles[tileLoc.row][tileLoc.col + 1] = virtualTile;
  }

  // Si el mosaico de arriba está vacío, mover este mosaico allí.
  if (virtualTileAbove && parseInt(virtualTileAbove.tileNum) === 0) {
    toTopValue = toTopValue - tileHeight;
    moveTile = true;
    // Intercambiar los dos mosaicos virtuales en la matriz.
    virtualTiles[tileLoc.row][tileLoc.col] = virtualTileAbove;
    virtualTiles[tileLoc.row - 1][tileLoc.col] = virtualTile;
  }

   // Si el mosaico de abajo está vacío, mover este mosaico allí.
  if (virtualTileBelow && parseInt(virtualTileBelow.tileNum) === 0) {
    toTopValue = toTopValue + tileHeight;
    moveTile = true;
    // Intercambiar los dos mosaicos virtuales en la matriz.
    virtualTiles[tileLoc.row][tileLoc.col] = virtualTileBelow;
    virtualTiles[tileLoc.row + 1][tileLoc.col] = virtualTile;
  }

  // Animar las props de estilo izquierdo y superior del mosaico. Uno de ellos no cambiará, pero de esta manera no hay que hacer ninguna lógica adicional.
  const moveDuration = 250;
  let moveCount = this.state.moveCount;
  if (moveTile) {
    moveCount = moveCount + 1;

    Animated.parallel([
      Animated.timing(
        tile.props.style[1].left,
        { toValue : toLeftValue, duration : moveDuration }
      ),
      Animated.timing(
        tile.props.style[1].top,
        { toValue : toTopValue, duration : moveDuration }
      )
    ]).start(global.determineOutcome);
  }

  // Finalmente, actualizar la matriz virtualTiles y el valor moveCount en state.
  this.setState({ virtualTiles : virtualTiles, moveCount : moveCount });

};
