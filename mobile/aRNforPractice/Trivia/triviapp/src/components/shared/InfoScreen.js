import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { connect } from "react-redux";

/**
 * Estilos para este componente.
 */
const styles = StyleSheet.create({
  outerContainer : {
    justifyContent : "center",
    marginTop : 50,
    marginLeft : 20,
    marginRight : 20
  },
  identificationCardContainer : {
    height : 150,
    marginBottom : 20
  },
  currentGameCardContainer : {
    height : 360
  },
  headerText : {
    fontWeight : "bold",
    fontSize : 20,
    color : "red"
  },
  fieldContainer : {
    flexDirection : "row"
  },
  fieldLabel : {
    width : 100,
    fontWeight : "bold"
  },
  fieldSpacing : {
    marginBottom : 12
  }
}); /* Fin stylesheet. */


/**
 * Clase principal de este componente.
 */
class InfoScreen extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
  } /* Fin constructor. */

  render() {

    return (
      <View style={styles.outerContainer}>

        <View style={styles.identificationCardContainer}>
          <Card>
            <CardItem header>
              <Text style={styles.headerText}>Identificación</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>Nombre jugador</Text>
                  <Text>{this.props.playerName}</Text>
                </View>
                <View style={styles.fieldContainer}>
                  <Text style={styles.fieldLabel}>ID jugador</Text>
                  <Text>{this.props.playerID}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

        <View style={styles.currentGameCardContainer}>
          <Card>
            <CardItem header>
              <Text style={styles.headerText}>Juego actual</Text>
            </CardItem>
            <CardItem>
              <Body>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Preguntadas</Text>
                  <Text>{this.props.asked}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Respondidas</Text>
                  <Text>{this.props.answered}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Puntos</Text>
                  <Text>{this.props.points}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Correctas</Text>
                  <Text>{this.props.right}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Equivocadas</Text>
                  <Text>{this.props.wrong}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Tiempo total</Text>
                  <Text>{this.props.totalTime}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Lo más lento</Text>
                  <Text>{this.props.slowest}</Text>
                </View>
                <View style={[ styles.fieldContainer, styles.fieldSpacing ]}>
                  <Text style={styles.fieldLabel}>Lo más rápido</Text>
                  <Text>{this.props.fastest}</Text>
                </View>
                <View style={ styles.fieldContainer }>
                  <Text style={styles.fieldLabel}>Promedio</Text>
                  <Text>{this.props.average}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>

      </View>
    );

  } /* Fin render(). */


} /* Fin class. */

/**
 * Función para asignar estado a propiedades de componentes.
 */
const mapStateToProps = (inState) => {
  return {
    playerName : inState.playerInfo.name,
    playerID : inState.playerInfo.id,
    asked : inState.gameData.asked,
    answered : inState.gameData.answered,
    points : inState.gameData.points,
    right : inState.gameData.right,
    wrong : inState.gameData.wrong,
    totalTime : inState.gameData.totalTime,
    slowest : inState.gameData.slowest,
    fastest : inState.gameData.fastest,
    average : inState.gameData.average

  };
};

// Export componentes.
export default connect(mapStateToProps)(InfoScreen);
