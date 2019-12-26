import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Button, Item, Input, Label, Switch, Text } from "native-base";
import { connect } from "react-redux";
import CoreCode from "../../../CoreCode";
import { setPlayerName, setIsAdmin } from "../../../state/actions";
import store from "../../../state/store";

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
  inputFieldContainer : {
    flex : 1,
    alignSelf : "stretch",
    justifyContent : "center"
  },
  switchContainer : {
    marginTop : 40,
    justifyContent : "center",
    flexDirection : "row"
  },
  buttonContainer : {
    height : 80,
    alignSelf : "stretch",
    justifyContent : "center"
  }
}); /* Fin stylesheet. */

/**
 * NamePromptModal class.
 */
class NamePromptModal extends React.Component {
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
        onRequestClose={ () => { } }>
        <View style={styles.outerContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Hola, nuevo jugador!</Text>
          </View>
          <View style={styles.inputFieldContainer}>
            <Item floatingLabel>
              <Label>Por favor, ingrese su nombre</Label>
              <Input
                onChangeText={
                  (inText) => store.dispatch(setPlayerName(inText))
                }
              />
            </Item>
            <View style={ styles.switchContainer}>
              <View>
                <Switch
                  value={this.props.isAdmin}
                  onValueChange={
                    (inValue) => store.dispatch(setIsAdmin(inValue))
                  }
                />
              </View>
              <View style={{ paddingLeft : 10 }}>
                <Text>Soy el admin</Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button block onPress={CoreCode.startup}><Text>OK</Text></Button>
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
    isVisible : inState.modals.namePromptVisible,
    isAdmin : inState.modals.isAdmin
  };
};

// Export componentes.
export default connect(mapStateToProps)(NamePromptModal);
