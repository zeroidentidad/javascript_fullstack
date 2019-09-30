import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

export default class NumeroRandom extends Component {

    static propTypes = {
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired
    }

    handlePress = () => {
        if(this.isDisabled) { return; }
        this.props.onPress(this.props.id)
    }   

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
            <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>{this.props.number}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  random: {
      backgroundColor: '#999',
      width: 120,
      marginHorizontal: 15,
      marginVertical: 20,
      fontSize: 32,
      textAlign: 'center',
  },
  disabled: {
      opacity: 0.3,
  }
})