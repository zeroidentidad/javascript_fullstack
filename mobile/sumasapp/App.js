
import React, {Component} from 'react';
import Game from './src/Game'

export default class App extends Component {

  state = {
    gameId: 1
  }

  resetGame = () => {
    this.setState((prevState)=>{
      return { gameId: prevState.gameId + 1}
    })
  }

  render() {
    return (
      <Game 
      onPlayAgain={this.resetGame}
      randNumCount={6} initialSeconds={10} key={this.state.gameId}
      ></Game>
    );
  }
}
