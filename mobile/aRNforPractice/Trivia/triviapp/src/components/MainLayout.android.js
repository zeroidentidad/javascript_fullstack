import React from "react";
import { StyleSheet, View } from "react-native";
import Drawer from "./MainNav";
import AdminModal from "./shared/modals/AdminModal";
import EndGameModal from "./shared/modals/EndGameModal";
import NamePromptModal from "./shared/modals/NamePromptModal";


/**
 * Estilos para este componente.
 */
const styles = StyleSheet.create({

  /* Estilo para la vista del contenedor externo (principal). */
  outerContainer : {
    flex : 1
  }

}); /* Fin stylesheet. */

/**
 * Componente de diseño principal para esta plataforma.
 */
export default class MainLayout extends React.Component {


  /**
   * Constructor.
   */
  constructor(inProps) {

    super(inProps);

  } /* Fin constructor. */


  /**
   * Component render().
   */
  render() {

    return (
      <View style={styles.outerContainer}>
        <NamePromptModal />
        <EndGameModal />
        <AdminModal />
        <Drawer />
      </View>
    );

  } /* Fin render(). */


} /* Fin MainLayout class. */
