import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import PropTypes from 'prop-types';
import NumeroRandom from './NumeroRandom'
import shuffle from 'lodash.shuffle';

export default class Game extends Component {

    static propTypes = {
        randNumCount: PropTypes.number.isRequired,
        initialSeconds: PropTypes.number.isRequired,
        onPlayAgain: PropTypes.func.isRequired
    }

    state = {
        selectedIds: [],
        tiempoRestante: this.props.initialSeconds
    }

    gameStatus = 'JUGANDO';

    randomNums = Array.from({ length: this.props.randNumCount}).map( ()=> 1 + Math.floor(10 * Math.random()) )

    target = this.randomNums.slice(0, this.props.randNumCount - 2).reduce((acum, curr)=> acum+curr, 0)

    shuffleRandNums = shuffle(this.randomNums)

    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState((prevState) => { 
                return { tiempoRestante: prevState.tiempoRestante - 1 } }, 
                () => { 
                    if (this.state.tiempoRestante === 0) { clearInterval(this.intervalId) }
                }
            )
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    componentWillUpdate(nextProp, nextState){
        if(nextState.selectedIds!==this.state.selectedIds||nextState.tiempoRestante===0){
            this.gameStatus = this.calGameStatus(nextState)
            if(this.gameStatus!=='JUGANDO'){
                clearInterval(this.intervalId)
            }
        }
    }

    isNumSelected = (id) => {
        return this.state.selectedIds.indexOf(id) >= 0;
    }

    selectNum = (id) => {
        this.setState((prevState)=> ({selectedIds: [...prevState.selectedIds, id]}) )
    }

    calGameStatus = (nextState) => {
        const sumSelected = nextState.selectedIds.reduce((acum, curr) => acum + this.shuffleRandNums[curr], 0)
        if (nextState.tiempoRestante === 0){
            return 'PERDISTE';
        }
        if(sumSelected<this.target){
            return 'JUGANDO';
        }
        if(sumSelected===this.target){
            return 'GANASTE';
        }
        if(sumSelected>this.target){
            return 'PERDISTE';
        }        
    }

    render() {
        const gameStatus = this.gameStatus;
        return (
            <View style={styles.container}>
                <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
                <View style={styles.radomContainer}>
                    {this.shuffleRandNums.map((randNum, id) => (
                    <NumeroRandom 
                    key={id} 
                    id={id} 
                    number={randNum} 
                    isDisabled={this.isNumSelected(id) || gameStatus!=='JUGANDO'} 
                    onPress={this.selectNum}
                    />
                    ))
                    }
                </View>
                <View style={styles.control}>
                    {this.gameStatus!=='JUGANDO'&&<Button title="Jugar" onPress={this.props.onPlayAgain}/>}
                    <Text style={[styles.infoStatus, styles[`${gameStatus}_COLOR`]]}>{gameStatus}</Text>
                    <Text style={styles.infoTime}>{this.state.tiempoRestante} s</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ccff',
    borderColor: '#000',
    borderWidth: 4,
  },
  target: {
      fontSize: 45,
      borderWidth: 2,
      backgroundColor: '#aaa',
      borderColor: 'black',
      textAlign: 'center',
      color: 'darkblue',
      margin: 50,
  },
  radomContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
  },
  STATUS_JUGANDO: {
      backgroundColor: '#bbb'
  },
  STATUS_GANASTE: {
      backgroundColor: 'green'
  },
  STATUS_PERDISTE: {
      backgroundColor: 'red'
  },
  infoStatus: {
      textAlign: 'center',
      fontSize: 30,
  },
  JUGANDO_COLOR: {
      color: 'black'
  },
  GANASTE_COLOR: {
      color: 'green'
  },
  PERDISTE_COLOR: {
      color: 'red'
  },
  infoTime:{
      textAlign: 'center',
      fontSize: 30,
      color: 'black'
  },
  control: {
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,

  }
});