import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Alert } from 'react-native';

export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Formulario',
      tabBarAccessibilityLabel: 'Formulario'
    }
  }

  state = {
      autor: "",
      titulo: ""
    }
  
  onPressButtonPOST() {

    let formData = new FormData();
    formData.append('autor', this.state.autor);    
    formData.append('titulo', this.state.titulo);  

    fetch('http://192.168.0.103:8080/miniApi/API/biblioteca/autor/nuevo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
      /*body: JSON.stringify({
        autor: this.state.autor,
        titulo: this.state.titulo
      }),*/
    })
      .then((responseData) => {
        Alert.alert(
          'Correcto:',
          'Libro agregado',
        )
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textBox} placeholder='Autor...'
          onChangeText={(autor) => this.setState({ autor })}
          value={this.state.autor} />
        <TextInput style={styles.textBox} placeholder='Titulo...'
          onChangeText={(titulo) => this.setState({ titulo })}
          value={this.state.titulo} />
        <TouchableHighlight style={styles.button}
          onPress={this.onPressButtonPOST.bind(this)}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Agregar libro</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textBox: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
  button: {
    height: 45,
    backgroundColor: '#9aadb5',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
});