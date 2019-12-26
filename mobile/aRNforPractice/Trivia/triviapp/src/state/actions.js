
// Action types. Estos deben ser únicos tanto en nombre como en valor.
exports.ANSWER_BUTTON_HIGHLIGHT = "abh";
exports.RESET_ALL_BUTTONS = "rab";
exports.SET_CURRENT_STATUS = "scs";
exports.SET_END_GAME_MESSAGE = "segm";
exports.SET_GAME_DATA = "sgd";
exports.SET_IS_ADMIN = "sia";
exports.SET_PLAYER_ID = "spi";
exports.SET_PLAYER_NAME = "spn";
exports.SET_QUESTION = "scq";
exports.SHOW_HIDE_MODAL = "shm";
exports.UPDATE_ANSWER_BUTTON_LABEL = "uabl";
exports.UPDATE_LEADERBOARD = "ul";


/**
 * Para mostrar/ocultar el diálogo de solicitud de nombre cuando el usuario es nuevo en el servidor.
 *
 * @param inModalName Qué modal mostrar/ocultar ("endGame" o "namePrompt");
 * @param inVisible   Verdadero para mostrar el modal, falso para ocultarlo.
 */
exports.showHideModal = (inModalName, inVisible) => {

  return {
    type : exports.SHOW_HIDE_MODAL,
    payload : { modalName : inModalName, visible : inVisible }
  };

}; /* showHidePromptModal(). */


/**
 * Para la configuración de ID del jugador.
 *
 * @param inID El ID del jugador.
 */
exports.setPlayerID = (inID) => {

  return {
    type : exports.SET_PLAYER_ID,
    payload : { id : inID }
  };

}; /* setPlayerID(). */


/**
 * Para la configuración, el nombre del jugador en NamePromptModal.
 *
 * @param inName El nombre del jugador.
 */
exports.setPlayerName = (inName) => {

  return {
    type : exports.SET_PLAYER_NAME,
    payload : { name : inName }
  };

}; /* setPlayerName(). */


/**
 * Para la configuración de los datos del juego actual para la pantalla de información.
 *
 * @param inGameData El objeto gameData devuelto por el servidor.
 */
exports.setGameData = (inGameData) => {

  return {
    type : exports.SET_GAME_DATA,
    payload : { gameData : inGameData }
  };

}; /* setGameData(). */


/**
 * Para cuando se toca un botón de respuesta.
 *
 * @param inButtonNumber El número del botón (0-5) que se tocó.
 */
exports.answerButtonHighlight = (inButtonNumber) => {

  return {
    type : exports.ANSWER_BUTTON_HIGHLIGHT,
    payload : { buttonNumber : inButtonNumber }
  };

}; /* Fin answerButtonHighlight(). */


/**
 * Para cuando se muestra una nueva pregunta. Llamado una vez por cada botón de respuesta.
 *
 * @param inButtonNumber El número de botón (0-5) de quién se está actualizando la etiqueta.
 * @param inLabel        La nueva etiqueta para el botón.
 */
exports.updateAnswerButtonLabel = (inButtonNumber, inLabel) => {

  return {
    type : exports.UPDATE_ANSWER_BUTTON_LABEL,
    payload : { buttonNumber : inButtonNumber, label : inLabel }
  };

}; /* Fin updateAnswerButtonLabel().  */


/**
 * Para cuando se muestra una nueva pregunta. Se llama después de que se hayan actualizado todas las etiquetas.
 */
exports.resetAllButtons = () => {

  return {
    type : exports.RESET_ALL_BUTTONS,
    payload : { }
  };

}; /* Fin resetAllButtons().  */


/**
 * Para cuando se muestra una nueva pregunta.
 *
 * @param inQuestion La nueva pregunta.
 */
exports.setQuestion = (inQuestion) => {

  return {
    type : exports.SET_QUESTION,
    payload : { question : inQuestion}
  };

}; /* Fin setQuestion().  */


/**
 * Para cuando termina el juego.
 *
 * @param inMessage El mensaje a mostrar en el modal.
 */
exports.setEndGameMessage = (inMessage) => {

  return {
    type : exports.SET_END_GAME_MESSAGE,
    payload : { message : inMessage}
  };

}; /* Fin setEndGameMessage().  */


/**
 * Para cuando los datos de la tabla de clasificación deben actualizarse.
 *
 * @param inListData Los datos de la tabla de clasificación devueltos por el servidor.
 */
exports.updateLeadboard = (inListData) => {

  return {
    type : exports.UPDATE_LEADERBOARD,
    payload : { listData : inListData }
  };

}; /* Fin updateLeaderboard(). */


/**
 * Para cuando el usuario dice que es el administrador.
 *
 * @param inIsAdmin Verdadero si el usuario es administrador, falso si no.
 */
exports.setIsAdmin = (inIsAdmin) => {

  return {
    type : exports.SET_IS_ADMIN,
    payload : { isAdmin : inIsAdmin }
  };

}; /* Fin setIsAdmin(). */


/**
 * Para mostrar el estado actual del juego en la pantalla del administrador.
 *
 * @param inCurrentStatus El estado actual del juego.
 */
exports.setCurrentStatus = (inCurrentStatus) => {

  return {
    type : exports.SET_CURRENT_STATUS,
    payload : { currentStatus : inCurrentStatus }
  };

}; /* Fin setCurrentStatus(). */
