import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class AddPersona extends Component {

  static navigationOptions = {
      tabBarLabel: 'Agregar',
      tabBarIcon: ({ tintColor }) => (
        <Icon name={'plussquareo'} size={55} style={[{ color: tintColor }, styles.icon]} />
      )
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
    backgroundColor: 'black'
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