import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { connect } from "react-redux";

/**
 * Estilos para este componente.
 */
const styles = StyleSheet.create({
  outerContainer : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    margin : 20
  },
  headingContainer : {
    height : 100,
    justifyContent : "center"
  },
  headingText : {
    fontSize : 20,
    fontWeight : "bold"
  },
  messageContainer : {
    flex : 1,
    alignSelf : "center",
    justifyContent : "center"
  },
  buttonContainer : {
    height : 80,
    alignSelf : "stretch",
    justifyContent : "center"
  },
  buttonText : {
    fontWeight : "bold",
    color : "white"
  }
}); /* Fin stylesheet. */


/**
 * EndGameModal class.
 */
class EndGameModal extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
  } /* Fin constructor. */

  render() {

    return (
      <Modal
        presentationStyle={"formSheet"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }
      >
        <View style={styles.outerContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Juego terminado</Text>
          </View>
          <View style={styles.messageContainer}>>
            <Text>{this.props.message}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button block onPress={ () => { } }>
              <Text style={ styles.buttonText }>OK</Text>
            </Button>
          </View>
        </View>
      </Modal>
    );

  } /* Fin render(). */


} /* Fin class. */

/**
 * Función para asignar estado a propiedades de componentes.
 */
const mapStateToProps = (inState) => {
  return {
    isVisible : inState.modals.endGameVisible,
    message : inState.modals.endGameMessage
  };
};

// Export componentes.
export default connect(mapStateToProps)(EndGameModal);
