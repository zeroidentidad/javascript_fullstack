import { Dimensions } from "react-native";


// Altura del área del botón del menú de control.
const controlAreaHeight = 80;

// Obtener ancho y alto de la pantalla.
const { height, width } = Dimensions.get("window");


// Construir estado inicial. Esto incluye:
//
// tiles .... la matriz de componentes de Vista mosaico
// numberOfTilesAcross ........ El número predeterminado de mosaicos en la matrix.
// numberOfTilesDown .......... El número predeterminado de mosaicos hacia abajo de la matrix.
// screenUsableWidth .......... El espacio "utilizable" para los mosaicos en la pantalla.
// screenUsableHeight ......... El espacio "utilizable" para los mosaicos en la pantalla (solo deja algo de
//                              espacio en la parte superior del botón del menú de control).
// refs ....................... Referencias a los componentes individuales Vista mosaico.
// virtualTiles ............... La matriz de objetos de mosaico virtual.
// tileWidth .................. El ancho de un mosaico individual
// tileHeight ................. La altura de un mosaico individual (esto y
//                              tileWidth se calculan más adelante en el método buildMatrix ()).
// controlAreaHeight .......... El espacio que ocupa el botón del menú de control.
// controlMenuVisible ......... Verdadero para mostrar el menú de control, falso para ocultarlo.
// controlMenuWidth ........... El ancho del menú de control.
// controlMenuHeight .......... La altura del menú de control.
// controlMenuButtonDisabled .. Verdadero si el botón del menú de control está deshabilitado,
//                              falso si está habilitado.
// wonVisible ................. Es visible la pantalla que ganó?
// moveCount .................. El número de movimientos que ha realizado el jugador.
// startTime .................. La hora en que comenzó el juego actual.

module.exports = {
  tiles : [],
  numberOfTilesAcross : 3,
  numberOfTilesDown : 3,
  screenUsableWidth : width,
  screenUsableHeight : height - controlAreaHeight,
  refs : {},
  virtualTiles : null,
  tileWidth : null,
  tileHeight : null,
  controlAreaHeight : controlAreaHeight,
  controlMenuVisible : false,
  controlMenuWidth : 380,
  controlMenuHeight : 480,
  controlMenuButtonDisabled : false,
  wonVisible : false,
  moveCount : 0,
  startTime : new Date().getTime()
};