import { combineReducers, createStore } from "redux";
import initialState from "./initialState";
import {
  gameDataReducer, leaderboardReducer, modalsReducer, playerInfoReducer,
  questionReducer
} from "./reducers";


// Cree un solo reductor principal "raíz" que combine todos. Las claves en
// este objeto determina qué parte del objeto de estado maneja cada reductor.
const rootReducer = combineReducers({
  leaderboard : leaderboardReducer,
  question : questionReducer,
  modals : modalsReducer,
  playerInfo : playerInfoReducer,
  gameData : gameDataReducer
});


// Crear el store.
export default createStore(rootReducer, initialState);
