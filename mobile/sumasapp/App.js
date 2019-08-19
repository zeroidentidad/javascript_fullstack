
import React, {Component} from 'react';
import Game from './src/Game'

export default class App extends Component {
  render() {
    return (
      <Game randNumCount={6}></Game>
    );
  }
}
