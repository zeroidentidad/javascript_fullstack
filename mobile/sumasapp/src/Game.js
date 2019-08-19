import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

export default class Game extends Component {

    static propTypes = {
        randNumCount: PropTypes.number.isRequired,

    }

    randomNums = Array.from({ length: this.props.randNumCount}).map( ()=> 1 + Math.floor(15 * Math.random()) )

    target = this.randomNums.slice(0, this.props.randNumCount - 2).reduce((acum, curr)=> acum+curr, 0)

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                <View style={styles.radomContainer}>
                {this.randomNums.map((randNum, id) => <Text style={styles.random} key={id}>{randNum}</Text> )}
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
    marginTop: 30,
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
  random: {
      backgroundColor: '#999',
      width: 120,
      marginHorizontal: 15,
      marginVertical: 25,
      fontSize: 35,
      textAlign: 'center',
  }
});