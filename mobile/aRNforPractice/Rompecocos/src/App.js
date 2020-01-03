import React from "react";
import { Button, Image, Platform, Slider, Text, View, StatusBar } from "react-native";
import state from "./state";

// Ahora, importar módulos que deben tener un alcance global y deben estar vinculados
// al componente más adelante en el constructor.
global.alterMatrixSize = require("./functions/alterMatrixSize");
global.buildMatrix = require("./functions/buildMatrix");
global.determineOutcome = require("./functions/determineOutcome");
global.generateSolvableLayout = require("./functions/generateSolvableLayout");
global.tilePress = require("./functions/tilePress");

/**
 * componente de nivel superior.
 */
export default class App extends React.Component {
  /**
   * Constructor.
   */
  constructor(inProps) {
    super(inProps);
    // Establecer estado inicial con el objeto state importado
    this.state = state;

    // Vincular las funciones de alcance global a este componente.
    global.alterMatrixSize = global.alterMatrixSize.bind(this);
    global.buildMatrix = global.buildMatrix.bind(this);
    global.determineOutcome = global.determineOutcome.bind(this);
    global.generateSolvableLayout = global.generateSolvableLayout.bind(this);
    global.tilePress = global.tilePress.bind(this);

  }

  render() {
    // Procesar condicionalmente el menú de control (cambia a controlMenuVisible en
    // state desencadena re-render, de como funciona).
    let controlMenu = null;
    if (this.state.controlMenuVisible) {
      controlMenu = (
        <View style={{
          padding : 20,
          position : "absolute",
          zIndex : 9999,
          flex : 1,
          alignItems : "stretch",
          justifyContent : "center",
          backgroundColor : "rgba(100, 64, 255, 0.95)",
          borderRadius : 20,
          width : this.state.controlMenuWidth,
          height : this.state.controlMenuHeight,
          left : (this.state.screenUsableWidth - this.state.controlMenuWidth) / 2,
          top : (this.state.screenUsableHeight - this.state.controlMenuHeight) / 2
        }}>
          <View style={{ alignSelf : "center", paddingBottom : 40}}>
            <Text style={{
              color : "#ffffff", fontSize : 24, fontWeight : "bold"
            }}>
              Menú de Control
            </Text>
          </View>
          <View style={{ paddingBottom : 40, alignSelf : "center" }}>
            <Button title="Iniciar nuevo juego" style={{ width : 150 }}
              onPress={ () => {
                state.numberOfTilesAcross = this.state.numberOfTilesAcross;
                state.numberOfTilesDown = this.state.numberOfTilesDown;
                this.setState(state, buildMatrix);
              }}
            />
          </View>
          <Text style={{ color : "#ffffff" }}>Mosaicos horizontales</Text>
          <Slider minimumValue={3} maximumValue={6} value={3} step={1}
            maximumTrackTintColor="white"
            onSlidingComplete={
              (inValue) => global.alterMatrixSize("across", inValue)
            }
          />
          <Text style={{ color : "#ffffff", paddingTop : 40 }}>
            Mosaicos verticales
          </Text>
          <Slider minimumValue={3} maximumValue={6} value={3} step={1}
            maximumTrackTintColor="white"
            onSlidingComplete={
              (inValue) => global.alterMatrixSize("down", inValue)
            }
          />
          <View style={{ paddingTop : 40 }}>
            <Text style={{ color : "#ffffff" }}>
              Advertencia: cambiar tamaño de cuadrícula comenzará automáticamente un nuevo juego!
            </Text>
          </View>
          <View style={{ paddingTop : 40, alignSelf : "center" }}>
            <Button title="Done" style={{ width : 150 }}
              onPress={ () => this.setState({
                controlMenuVisible : false, controlMenuButtonDisabled : false
              }) }
            />
          </View>
        </View>
      );
    }

    // Condicionalmente renderizar la pantalla de ganó (cambia a wonVisible en
    // state dispara re-render, así es como funciona).
    let wonScreen = null;
    if (this.state.wonVisible) {
      const elapsedTime = Math.round(
        (new Date().getTime() - this.state.startTime) / 1000
      );
      wonScreen = (
        <View style={{
          zIndex : 9998,
          position : "absolute",
          left : 0,
          top : this.state.controlAreaHeight,
          width : this.state.screenUsableWidth,
          height : this.state.screenUsableHeight
        }}>
          <Image source={require("./images/won.jpeg")}
            resizeMode="stretch" fadeDuration={0}
            style={{
              width : this.state.screenUsableWidth,
              height : this.state.screenUsableHeight
            }}
          />
          <View style={{
            alignItems : "center",
            justifyContent : "center",
            position : "absolute",
            width : "100%",
            left : 0,
            zIndex : 9999,
            top : this.state.screenUsableHeight - 240
          }}>
            <Text style={{ fontSize : 20, fontWeight : "bold" }}>
              Hiciste {this.state.moveCount} movimientos para ganar
            </Text>
            <Text style={{
              fontSize : 20, fontWeight : "bold", paddingBottom : 40
            }}>
              El juego duró {elapsedTime} segundos
            </Text>
            <Button title="Iniciar nuevo juego"
              onPress={ () => {
                state.numberOfTilesAcross = this.state.numberOfTilesAcross;
                state.numberOfTilesDown = this.state.numberOfTilesDown;
                this.setState(state, buildMatrix);
              }}
            />
          </View>
        </View>
      );
    }

    // Return our final component markup.
    return (
      <View style={{
        flex : 1,
        alignItems : "stretch",
        backgroundColor : "#000000"
      }}>
        <View style={{
          position : "absolute",
          left : 0,
          width : "100%",
          top : Platform.OS.toLowerCase() === "android" ? StatusBar.currentHeight + 10 : 0
        }}>
          <Button title="Menú de control"
            disabled={this.state.controlMenuButtonDisabled}
            onPress={ () => { this.setState({
              controlMenuButtonDisabled : true, controlMenuVisible : true
            }) }}
          />
        </View>
        {wonScreen}
        {controlMenu}
        {this.state.tiles}
      </View>
    )

  }

  /**
   * Handle componentDidMount event.
   */
  componentDidMount() {
    this.setState(state, buildMatrix);
  }

}