import React from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import CoreCode from "../../../CoreCode";

/**
 * Estilos para este componente.
 */
const styles = StyleSheet.create({
  outerContainer : {
    flex : 1,
    margin : 50,
    justifyContent : "center",
    alignItems : "center"
  },
  headingText : {
    fontSize : 40,
    fontWeight : "bold",
    margin : 50
  },
  buttonContainer : {
    margin : 50
  },
  currentStatusContainer : {
    margin : 50
  },
  currentStatusText : {
    fontSize : 20,
    fontWeight : "bold",
    color : "red"
  }
}); /* Fin stylesheet. */


/**
 * AdminModal class.
 */
class AdminModal extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
  } /* End constructor. */

  render() {

    return (
      <Modal
        presentationStyle={"fullScreen"}
        visible={this.props.isVisible}
        animationType={"slide"}
        onRequestClose={ () => { } }
      >
        <View style={styles.outerContainer}>
          <Text style={styles.headingText}>Admin</Text>
          <View style={styles.buttonContainer}>
            <Button title="Nuevo juego"
              onPress={ () => {
                CoreCode.io.emit("adminNewGame", {});
              } }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Siguiente pregunta"
              onPress={ () => {
                CoreCode.io.emit("adminNextQuestion", {});
              } }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Terminar juego"
              onPress={ () => {
                CoreCode.io.emit("adminEndGame", {});
              } }
            />
          </View>
          <View style={styles.currentStatusContainer}>
            <Text style={styles.currentStatusText}>
              Estado actual: {this.props.currentStatus}
            </Text>
          </View>
        </View>
      </Modal>
    );

  } /* End render(). */


} /* End class. */


/**
 * Función para asignar estado a propiedades de componentes.
 */
const mapStateToProps = (inState) => {
  return {
    isVisible : inState.modals.adminVisible,
    currentStatus : inState.modals.currentStatus
  };
};


// Export componentes.
export default connect(mapStateToProps)(AdminModal);
