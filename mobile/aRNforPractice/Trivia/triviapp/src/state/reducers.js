import {
  ANSWER_BUTTON_HIGHLIGHT, RESET_ALL_BUTTONS, SET_CURRENT_STATUS,
  SET_END_GAME_MESSAGE, SET_GAME_DATA, SET_IS_ADMIN, SET_PLAYER_ID,
  SET_PLAYER_NAME, SET_QUESTION, SHOW_HIDE_MODAL, UPDATE_ANSWER_BUTTON_LABEL,
  UPDATE_LEADERBOARD
} from "./actions";


/**
 * Reducer para diversas Modales en toda la aplicación.
 */
exports.modalsReducer = function(inState = {}, inAction) {

  switch (inAction.type) {

    case SET_CURRENT_STATUS : {
      // Get actual state.
      const modalsNode = { ...inState };
      // Set actual status.
      modalsNode.currentStatus = inAction.payload.currentStatus;
      return { ... inState, ...modalsNode };
    }

    case SET_END_GAME_MESSAGE : {
      // Get actual state.
      const modalsNode = { ...inState };
      // Set message.
      modalsNode.endGameMessage = inAction.payload.message;
      return { ... inState, ...modalsNode };
    }

    case SET_IS_ADMIN : {
      // Get actual state.
      const modalsNode = { ...inState };
      // Set admin flag.
      modalsNode.isAdmin = inAction.payload.isAdmin;
      return { ... inState, ...modalsNode };
    }

    case SHOW_HIDE_MODAL : {
      // Get actual state.
      const modalsNode = { ...inState };
      // Set atributo visible apropiado basado en el nombre modal.
      modalsNode[`${inAction.payload.modalName}Visible`] =
        inAction.payload.visible;
      return { ... inState, ...modalsNode };
    }

    default : { return inState; }

  }

}; /* Fin modalsReducer(). */


/**
 * Reducer para la rama de datos playerInfo en la pantalla de estado.
 */
exports.playerInfoReducer = function(inState = {}, inAction) {

  switch (inAction.type) {

    case SET_PLAYER_ID : {
      // Get actual state.
      const playerInfoNode = { ...inState };
      // Set ID.
      playerInfoNode.id = inAction.payload.id;
      return { ... inState, ...playerInfoNode };
    }

    case SET_PLAYER_NAME : {
      // Get actual state.
      const playerInfoNode = { ...inState };
      // Set name.
      playerInfoNode.name = inAction.payload.name;
      return { ... inState, ...playerInfoNode };
    }

    default : { return inState; }

  }

}; /* Fin playerInfoReducer(). */


/**
 * Reducer para la pantalla InfoScreen (datos del juego).
 */
exports.gameDataReducer = function(inState = {}, inAction) {

  switch (inAction.type) {

    case SET_GAME_DATA : {
      // Store nuevos datos del juego.
      return { ...inState, ...inAction.payload.gameData };
    }

    default : { return inState; }

  }

}; /* Fin gameDataReducer(). */


/**
 * Reducer para la pantalla GameScreen->Question.
 */
exports.questionReducer = function(inState = {}, inAction) {

  switch (inAction.type) {

    case ANSWER_BUTTON_HIGHLIGHT : {
      // Get actual state.
      const questionNode = { ...inState };
      questionNode.answerButtonPrimary = [ true, true, true, true, true ];
      questionNode.answerButtonDanger = [ false, false, false, false, false ];
      questionNode.selectedAnswer = inAction.payload.buttonNumber;
      // Ahora flip del botón para resaltarlo.
      if (inAction.payload.buttonNumber !== -1) {
        questionNode.answerButtonDanger[inAction.payload.buttonNumber] = true;
      }
      return { ...inState, ...questionNode };
    }

    case UPDATE_ANSWER_BUTTON_LABEL : {
      // Get actual state.
      const questionNode = { ...inState };
      // Set etiqueta en el botón especificado.
      questionNode.answerButtonLabels[inAction.payload.buttonNumber] =
        inAction.payload.label;
      return { ...inState, ...questionNode };
    }

    case RESET_ALL_BUTTONS : {
      // Get actual state.
      const questionNode = { ...inState };
      questionNode.answerButtonPrimary = [ true, true, true, true, true ];
      questionNode.answerButtonDanger = [ false, false, false, false, false ];
      return { ...inState, ...questionNode };
    }

    case SET_QUESTION : {
      // Get actual state.
      const questionNode = { ...inState };
      // Store nueva pregunta
      questionNode.currentQuestion = inAction.payload.question;
      return { ...inState, ...questionNode };
    }

    default : { return inState; }

  }

}; /* Fin questionReducer(). */


/**
 * Reducer para la pantalla GameScreen->Leaderboard.
 */
exports.leaderboardReducer = function(inState = {}, inAction) {

  switch (inAction.type) {

    case UPDATE_LEADERBOARD : {
      // Store nuevos datos de la lista de jugadores de la tabla de clasificación.
      return { ...inState, ...{ listData : inAction.payload.listData } };
    }

    default : { return inState; }

  }

}; /* Fin leaderboardReducer(). */
