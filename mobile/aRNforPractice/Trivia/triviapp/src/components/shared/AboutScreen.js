import React from "react";
import { StyleSheet, Text, View } from "react-native";

/**
 * Clase principal de este componente.
 */
export default class AboutScreen extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
  } /* Fin constructor. */

  render() {

    return (
      <View style={styles.outerContainer}>
        <View style={styles.spacer} />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>React Native Trivia</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textVersion}>v1.1</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textSource}>Referencia de Ebook</Text>
          <Text style={styles.textSource}>Proyecto practico en React Native</Text>
          <Text style={styles.textSource}>2019</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textAuthor}>ZeroIdentidad</Text>
        </View>
        <View style={styles.spacer} />
      </View>
    );

  } /* Fin render(). */

} /* Fin class. */

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  /* Estilo para el espaciador View en la parte superior e inferior. */
  spacer: {
    flex: .2
  },
  /* Estilo para el contenedor alrededor de cada línea de texto. */
  textContainer: {
    flex: .15,
    justifyContent: "center",
    alignItems: "center"
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20
  },
  textVersion: {
    fontWeight: "bold",
    fontSize: 18
  },
  textSource: {
    fontWeight: "bold",
    fontSize: 16
  },
  textAuthor: {
    fontWeight: "bold",
    fontSize: 14
  }
}); /* Fin stylesheet. */