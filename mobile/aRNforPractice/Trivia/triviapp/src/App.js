import React from "react";
import { Root } from "native-base";
import { Provider } from "react-redux";
import { showHideModal } from "./state/actions";
import store from "./state/store";
import MainLayout from "./components/MainLayout";

// noinspection JSUnusedGlobalSymbols
/**
 * #############################################################################
 * Main app class.
 * #############################################################################
 */
export default class App extends React.Component {
  /**
   * constructor.
   */
  constructor(inProps) {
    super(inProps);
  } /* Fin constructor. */

  /**
   * Component render(). Tener en cuenta que la versión de MainLayout que representamos aquí
   * será determinado por la plataforma en la que estamos corriendo el codigo.
   * MainLayout está envuelto en el Provider para que se pueda usar el estado de Redux
   * desde cualquier componente conectado en la jerarquía desde MainLayout hacia abajo.
   */

  render() {

    console.disableYellowBox = true;    

    return (<Provider store={store}><Root><MainLayout/></Root></Provider>);

  } /* End render(). */


  /**
   * Component componentDidMount().
   */
  componentDidMount() {

    // Obtener el nombre del jugador.
    store.dispatch(showHideModal("namePrompt", true));

  }; /* Fin componentDidMount(). */


} /* Fin App class. */
