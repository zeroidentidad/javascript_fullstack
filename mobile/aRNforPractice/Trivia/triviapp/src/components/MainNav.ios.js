import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import AboutScreen from "./shared/AboutScreen";
import GameScreen from "./shared/GameScreen";
import InfoScreen from "./shared/InfoScreen";

/**
 * Estilos para este componente.
 */
const styles = StyleSheet.create({
  /* Estilos para los iconos de tabs. */
  tabIcons : {
    width : 32,
    height : 32
  }
}); /* Fin stylesheet. */

/**
 * Construir TabNavigator, contenedor principal para nuestra interfaz de usuario.
 */
export default createBottomTabNavigator(
  /* ---------- Routes. ----------  */
  {
    GameScreen : {
      screen : GameScreen,
      navigationOptions : {
        tabBarLabel : "Game",
        tabBarIcon : ( {tintColor}) => (
          <Image source={ require("../images/icon-game.png") }
            style={[ styles.tabIcons, { tintColor : tintColor } ]}
          />
        )
      }
    }, /* Fin GameScreen. */
    InfoScreen : {
      screen : InfoScreen,
      navigationOptions : {
        tabBarLabel : "Info",
        tabBarIcon : ( {tintColor}) => (
          <Image source={ require("../images/icon-info.png") }
            style={[ styles.tabIcons, { tintColor : tintColor } ]}
          />
        )
      }
    }, /* Fin InfoScreen. */
    AboutScreen : {
      screen : AboutScreen,
      navigationOptions : {
        tabBarLabel : "About",
        tabBarIcon : ( {tintColor} ) => (
          <Image source={ require("../images/icon-about.png") }
            style={[ styles.tabIcons, { tintColor : tintColor } ]}
          />
        )
      }
    } /* Fin AboutScreen. */
  },

  /* ---------- Options. ---------- */
  {
    initialRouteName : "GameScreen",
    animationEnabled : true,
    swipeEnabled : true,
    backBehavior : "none",
    lazy : false,
    tabBarPosition : "bottom",
    tabBarOptions : {
      activeTintColor : "#ff0000",
      showIcon : true
    }
  } /* Fin options. */

); /* Fin TabNavigator */
