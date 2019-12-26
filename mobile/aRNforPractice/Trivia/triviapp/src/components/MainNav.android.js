import React from "react";
import { createDrawerNavigator } from "react-navigation";
import AboutScreen from "./shared/AboutScreen";
import GameScreen from "./shared/GameScreen";
import InfoScreen from "./shared/InfoScreen";

/**
 * Construir DrawerNavigator, contenedor principal para nuestra interfaz de usuario.
 */
export default createDrawerNavigator(
  /* ---------- Routes. ----------  */
  {
    GameScreen : {
      screen : GameScreen,
      navigationOptions: () => ({ title : "Game" }),
    }, /* Fin GameScreen. */
    InfoScreen : {
      screen : InfoScreen,
      navigationOptions: () => ({ title : "Info" }),
    }, /* Fin InfoScreen. */
    AboutScreen : {
      screen : AboutScreen,
      navigationOptions: () => ({ title : "About" }),
    } /* Fin AboutScreen. */
  }, /* Fin routes. */

  /* ---------- Options. ---------- */
  {
    initialRouteName : "GameScreen",
    backBehavior : "none"
  } /* Fin options. */

); /* Fin DrawerNavigator */
