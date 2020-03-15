import React, {Component} from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import gameReducer from "./redux/reducers";
import GameContainer from "./components/GameContainer";

let store = createStore(combineReducers({ gameReducer }));

export default class Main extends Component {
  render() {
      console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <GameContainer />
      </Provider>
    );
  }
}