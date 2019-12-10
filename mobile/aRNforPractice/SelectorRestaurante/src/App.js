import React from "react";
import { Image, Platform, StatusBar } from "react-native";
import { TabNavigator } from "react-navigation";
import { PeopleScreen } from "./screens/PeopleScreen";
import { DecisionScreen } from "./screens/DecisionScreen";
import { RestaurantsScreen } from "./screens/RestaurantsScreen";


console.log("------------------------------------------------------------");
console.log(`SelectorRestaurante starting on ${Platform.OS}`);


// Identificador de plataforma normalizado para usar cuando el código necesita cambiar entre
// Android y iOS.
const platformOS = Platform.OS.toLowerCase();

//console.disableYellowBox = true;
/**
 * Construción TabNavigator, el contenedor principal para la UI.
 */
const tabs = TabNavigator(

  /* ---------- Routes. ----------  */
  {
    PeopleScreen : {
      screen : PeopleScreen,
      navigationOptions : {
        tabBarLabel: "Personas",
        tabBarIcon: ( { tintColor } ) => (
          <Image source={ require("./images/icon-people.png") }
            style={{ width : 32, height : 32, tintColor : tintColor }}
          />
        )
      }
    }, /* Fin PeopleScreen. */
    DecisionScreen : {
      screen : DecisionScreen,
      navigationOptions : {
        tabBarLabel: "Decisión",
        tabBarIcon : ( { tintColor } ) => (
          <Image source={ require("./images/icon-decision.png") }
            style={{ width : 32, height : 32, tintColor : tintColor }}
          />
        )
      }
    }, /* Fin DecisionScreen. */
    RestaurantsScreen : {
      screen : RestaurantsScreen,
      navigationOptions : {
        tabBarLabel: "Restaurantes",
        tabBarIcon : ( { tintColor } ) => (
          <Image source={ require("./images/icon-restaurants.png") }
            style={{ width : 32, height : 32, tintColor : tintColor }}
          />
        )
      }
    } /* Fin RestaurantsScreen. */
  }, /* End routes. */

  /* ---------- Options. ---------- */
  {
    initialRouteName : "DecisionScreen",
    animationEnabled : false,
    swipeEnabled : true,
    backBehavior : "none",
    lazy : true,
    /* Las pestañas van arriba para Android, abajo para iOS. */
    tabBarPosition : platformOS === "android" ? "top" : "bottom",
    tabBarOptions : {
      activeTintColor : "#ff0000",
      showIcon : true,
      /* Las pestañas en Android están superpuestas por la barra de estado, así que agrega */
      /* padding para arreglar eso. */
      style : {
        paddingTop: platformOS === "android" ? StatusBar.currentHeight : 0
      }
    }
  } /* Fin options. */

); /* Fin TabNavigator. */


// Export our main component.
export default tabs;
