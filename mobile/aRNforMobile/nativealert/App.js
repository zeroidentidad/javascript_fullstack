import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends Component {

  onPressButton1() {
    Alert.alert(
      'Titulo Alert',
      'Mensaje Alert',
    )
  }

  onPressButton2() {
    Alert.alert(
      'Titulo Alert',
      'Mensaje Alert, con botones',
      [
        { text: 'Boton 1', onPress: () => console.log('Boton 1 pressed') },
        { text: 'Boton 2', onPress: () => console.log('Boton 2 pressed') },
        {
          text: 'Cancelar', onPress: () => console.log('Cancelar Pressed'), style:'cancel'
        },
      ],
    )
  }   

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressButton1}
          title="Button 1"
          color="#841584"
          accessibilityLabel="Aprenda más sobre... Button 1"
          style={{padding: 5}}
        />
        <Text> </Text>
        <Button
          onPress={this.onPressButton2}
          title="Button 2"
          color="#841584"
          accessibilityLabel="Aprenda más sobre... Button 2"
          style={{padding: 5}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});    