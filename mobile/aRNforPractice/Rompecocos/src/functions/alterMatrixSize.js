/**
 * Llamado en respuesta a los cambios del Control deslizante para alterar el tamaño de la matriz,
 * si el nuevo valor es diferente al anterior.
 * @param inWhichDimension De qué manera se va a expandir la matriz ("a través" o "abajo").
 * @param inValue          El nuevo número de mosaicos en esa dimensión.
 */
module.exports = function(inWhichDimension, inValue) {

  switch (inWhichDimension) {
    case "across":
      if (inValue !== this.state.numberOfTilesAcross) {
        // Usar callback de setState () para que la llamada a buildMatrix () sea determinista.
        this.setState({ numberOfTilesAcross : inValue },
            global.buildMatrix
        );
      }
    break;
    case "down":
      if (inValue !== this.state.numberOfTilesDown) {
        // Usar callback de setState () para que la llamada a buildMatrix () sea determinista.
        this.setState({ numberOfTilesDown : inValue },
          global.buildMatrix
        );
      }
    break;
  }

};
