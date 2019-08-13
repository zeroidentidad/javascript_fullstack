import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class AddPersona extends Component {

  static navigationOptions = {
    tabBar: {
      label: 'Agregar',
      icon: ({ tintColor }) => (
        <Icon name={'plus'} size={55} style={[{ color: tintColor }, styles.icon]} />
      )
    }
  }  

  render(){
    return(
      <View style={styles.container}>
        <Text>Agregar Persona</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor: '#e5e5e5'
  },
  icon: {
    paddingBottom: 2,
  },
  bienvenida: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  }
});