import React from "react";
import { Animated, Text, TouchableWithoutFeedback, View } from "react-native";


/**
 * Construir una matriz de mosaicos basada en el tamaño de matriz actual especificado en state.
 */
module.exports = function() {

  // Obtener información necesaria de state.
  const screenUsableWidth = this.state.screenUsableWidth;
  const screenUsableHeight = this.state.screenUsableHeight;
  const numberOfTilesAcross = this.state.numberOfTilesAcross;
  const numberOfTilesDown = this.state.numberOfTilesDown;

  // Calcular el ancho, la altura y el espacio adicional de los mosaicos nuevos a la izquierda y arriba.
  const tileWidth = Math.floor(screenUsableWidth / numberOfTilesAcross);
  const tileHeight = Math.floor(screenUsableHeight / numberOfTilesDown);
  const spaceLeft = Math.floor((screenUsableWidth - (numberOfTilesAcross * tileWidth)) / 2);
  const spaceTop = Math.floor((screenUsableHeight - (numberOfTilesDown * tileHeight)) / 2);

  // Crear una matriz aleatoria de números que se conviertan en los números de mosaico.
  let tileNumbers = global.generateSolvableLayout();

  // Crear los mosaicos en un arreglo matricial.
  const tiles = [];
  const virtualTiles = [];
  let tileCount = 0;
  for (let row = 0; row < numberOfTilesDown; row++) {

    const rowArray = [];
    virtualTiles.push(rowArray);

    for (let col = 0; col < numberOfTilesAcross; col++) {

      const tileNum = tileNumbers[tileCount];
      const refID = `refID_${tileCount}`;
      // Calcular las coordenadas de pantalla para este mosaico.
      const left = spaceLeft + (col * tileWidth);
      const top = this.state.controlAreaHeight + spaceTop + (row * tileHeight);

      // Agregar un mosaico, ya sea el especial "vacío" o uno normal.
      if (tileCount === (numberOfTilesAcross * numberOfTilesDown) - 1) {

        // Agregar un mosaico virtual a esta fila.
        rowArray.push({ refID : refID, tileNum : 0 });

        // Agregar el mosaico especial "vacío".
        tiles.push(
          <View key={tileCount}
            ref={ (inRef) => {
              const refs = this.state.refs;
              refs[refID] = inRef;
              this.setState({ refs : refs });
            }}
          />
        );

      } else {

        // Agregar un mosaico virtual a esta fila.
        rowArray.push({ refID : refID, tileNum : tileNum });

        // Agregar un mosaico regular.
        tiles.push(
          <Animated.View key={tileCount}
            ref={ (inRef) => {
              const refs = this.state.refs;
              refs[refID] = inRef;
              this.setState({ refs : refs });
            }}
            style={[
              {
                position : "absolute",
                backgroundColor : "#d08080",
                flex : 1,
                alignItems : "center",
                justifyContent : "center",
                borderWidth : 10,
                borderTopColor : "#80a080",
                borderLeftColor : "#80a080",
                borderBottomColor : "#c0f0c0",
                borderRightColor : "#c0f0c0",
                borderStyle : "solid",
                borderRadius : 20
              },
              {
                left : new Animated.Value(left),
                top : new Animated.Value(top),
                width : tileWidth - 4, height : tileHeight - 4
              }
            ]}
          >
            <TouchableWithoutFeedback onPress={ ()=> global.tilePress(refID) }>
              <View style={{ width : tileWidth, height : tileHeight,
                alignItems : "center", justifyContent : "center"
              }}>
                <Text style={{
                  fontWeight : "bold", fontSize : 24
                }}>{tileNum}</Text>
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        );
      }

      tileCount = tileCount + 1;

    } // Fin col loop.

  } // Fin row loop.

  // Finalmente, actualizar el estado con la nueva matriz de mosaicos y el mosaico calculado
  // anchura y altura. Esto dará como resultado una nueva representación, por lo que nuestra matriz
  // finalmente aparece.
  this.setState({
    tiles : tiles, virtualTiles : virtualTiles,
    tileWidth : tileWidth, tileHeight : tileHeight
  });

};
