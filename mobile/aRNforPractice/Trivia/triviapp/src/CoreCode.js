import { Vibration } from "react-native";
import { Toast } from "native-base";
import io from "socket.io-client";
import {
  answerButtonHighlight, resetAllButtons, setCurrentStatus, setGameData,
  setEndGameMessage, setPlayerID, setQuestion, showHideModal,
  updateAnswerButtonLabel, updateLeadboard
} from "./state/actions";
import store from "./state/store";

/**
 * #############################################################################
 * El código central de la aplicación vive en este singleton.
 * #############################################################################
 */
const CoreCode = {

  // La dirección IP del servidor.
  serverIP : "192.168.0.105",

  // Nuestra conexión Socket.io al servidor.
  io : null,

  // Referencia al navegador principal.
  mainNavigator : null,

  /**
   * Inicia la aplicación después de obtener el nombre del usuario.
   */
  startup : () => {

    // Tengo que ingresar un nombre de al menos dos caracteres si no es el administrador.
    if (!store.getState().modals.isAdmin &&
      (store.getState().playerInfo.name == null ||
      store.getState().playerInfo.name.trim() === "" ||
      store.getState().playerInfo.name.length === 1)
    ) {
      return;
    }

    // Ocultar Name Prompt Modal.
    store.dispatch(showHideModal("namePrompt", false));

    // Abrir una conexión basada en socket.io al servidor.
    CoreCode.io = io(`http://${CoreCode.serverIP}:8080`);

    // Hook socket handler events (que depende de si el usuario es administrador o no).
    if (store.getState().modals.isAdmin) {
      CoreCode.io.on("connected", function() { console.log("ADMIN CONNECTED"); });
      CoreCode.io.on("adminMessage", CoreCode.adminMessage);
      // Ahora mostrar la admin Modal.
      store.dispatch(showHideModal("admin", true));
    } else {
      CoreCode.io.on("connected", CoreCode.connected);
      CoreCode.io.on("validatePlayer", CoreCode.validatePlayer);
      CoreCode.io.on("newGame", CoreCode.newGame);
      CoreCode.io.on("nextQuestion", CoreCode.nextQuestion);
      CoreCode.io.on("answerOutcome", CoreCode.answerOutcome);
      CoreCode.io.on("endGame", CoreCode.endGame);
    }

  }, /* Fin startup(). * /

  /**
   * Maneja los mensajes conectados desde el servidor.
   */
  connected : function(inData) {

    console.log("connected()", inData);

    // Solicitar al servidor que valide ID del jugador.
    CoreCode.io.emit("validatePlayer", {
      playerName : store.getState().playerInfo.name
    });

  }, /* Fin connected(). */

  /**
   * Maneja los mensajes validatePlayer del servidor.
   *
   * @param inData El objeto de datos del servidor.
   */
  validatePlayer : function(inData) {

    console.log("validatePlayer()", inData);

    // Grabar ID del jugador.
    store.dispatch(setPlayerID(inData.playerID));

    // Actualiza y muestra la tabla de clasificación. Este jugador esperará la siguiente pregunta.
    if (inData.inProgress) {
      inData.gameData.asked = inData.asked;
      store.dispatch(setGameData(inData.gameData));
      store.dispatch(updateLeadboard(inData.leaderboard));
      CoreCode.mainNavigator.navigate("GameLeaderboardScreen");
    }

  }, /* Fin validatePlayer(). */

  /**
   * Maneja mensajes newGame del servidor.
   *
   * @param inData El objeto de datos del servidor.
   */
  newGame : function(inData) {

    console.log("newGame()", inData);

    // Ocultar End Game Modal.
    store.dispatch(showHideModal("endGame", false));

    // Actualiza la información del juego y la tabla de clasificación.
    inData.gameData.asked = inData.asked;
    store.dispatch(setGameData(inData.gameData));
    store.dispatch(updateLeadboard(inData.leaderboard));

    // Mostrar la pantalla de clasificación.
    CoreCode.mainNavigator.navigate("GameLeaderboardScreen");

  }, /* Fin newGame(). */

  /**
   * Maneja los mensajes nextQuestion del servidor.
   *
   * @param inData El objeto de datos del servidor.
   */
  nextQuestion : function(inData) {

    console.log("nextQuestion()", inData);

    // Asegurar de comenzar sin una respuesta seleccionada.
    store.dispatch(answerButtonHighlight(-1));

    // Mostrar la pregunta.
    store.dispatch(setQuestion(inData.question));

    // Rellenar las respuestas y restablecer su estado.
    for (let i = 0; i < 6; i++) {
      store.dispatch(updateAnswerButtonLabel(i, inData.answers[i]));
    }

    // Las etiquetas de los botones no se reflejarán en la pantalla a menos que las fuercemos
    // para actualizar, lo que se hace restableciendo el tipo de todos los botones (no estoy seguro de por qué).
    store.dispatch(resetAllButtons());

    // Mostrar la pantalla de preguntas.
    CoreCode.mainNavigator.navigate("GameQuestionScreen");

  }, /* Fin nextQuestion(). */

  /**
   * Maneja los mensajes de respuesta del servidor.
   *
   * @param inData El objeto de datos del servidor.
   */
  answerOutcome : function(inData) {

    console.log("answerOutcome()", inData);

    let msg = "Lo siento! Eso no es correcto :(";
    let type = "danger";

    if (inData.correct) {
      msg = "Hurra! Fue correcto :)";
      type = "success";
    }

    // Actualizar la información del juego.
    inData.gameData.asked = inData.asked;
    store.dispatch(setGameData(inData.gameData));

    // Mostrar la tabla de clasificación y un mensaje toast diciéndole al jugador el resultado.
    store.dispatch(updateLeadboard(inData.leaderboard));
    CoreCode.mainNavigator.navigate("GameLeaderboardScreen");
    Toast.show({ text: msg, buttonText : "OK", type : type, duration : 3000 });
    Vibration.vibrate(1000);

  }, /* Fin answerOutcome(). */

  /**
   * Maneja los mensajes endGame del servidor.
   *
   * @param inData El objeto de datos del servidor.
   */
  endGame : function(inData) {

    console.log("endGame()", inData);

    // Mostrar la información final del juego.
    inData.gameData.asked = inData.asked;
    store.dispatch(setGameData(inData.gameData));

    // Mostrar la tabla de clasificación final.
    store.dispatch(updateLeadboard(inData.leaderboard));
    CoreCode.mainNavigator.navigate("GameLeaderboardScreen");

    if (inData.leaderboard[0].playerID === store.getState().playerInfo.id) {

      store.dispatch(setEndGameMessage("Felicidades, fuiste el ganador!"));
      store.dispatch(showHideModal("endGame", true));

    } else {

      // No, no obtuvo la victoria, así que averigüe en qué lugar terminaron y el texto apropiado para
      // mostrar. Tenemos que encontrar su índice en el array y luego adjuntarle un sufijo ordinal apropiado.
      let place = "";
      let index = inData.leaderboard.findIndex((inPlayer) => inPlayer.playerID === CoreCode.playerID);
      index++;
      const j = index % 10;
      const k = index % 100;
      if (j === 1 && k !== 11) {
        place = `${index}er`;
      } else if (j === 2 && k !== 12) {
        place = `${index}do`;
      } else if (j === 3 && k !== 13) {
        place = `${index}ro`;
      } else {
        place = `${index}to`;
      }

      store.dispatch(setEndGameMessage(
        `Lo siento, no ganaste. Pero terminaste en ${place} lugar.`)
      );
      store.dispatch(showHideModal("endGame", true));

    }

  }, /* Fin endGame(). */

  /**
   * Controladores que muestran mensajes para el administrador enviados desde el servidor.
   *
   * @param inData El objeto de datos del servidor.
   */
  adminMessage : function(inData) {

    console.log("adminMessage()", inData);

    store.dispatch(setCurrentStatus(inData.msg));

  } /* Fin adminMessage(). */

}; /* CoreCode. */

export default CoreCode;