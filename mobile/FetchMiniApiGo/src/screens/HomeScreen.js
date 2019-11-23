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
      username: "",
      password: ""
    }
  
  onPressButtonPOST() {

    /*let formData = new FormData();
    formData.append('username', this.state.username);    
    formData.append('password', this.state.password);*/  

    fetch('http://192.168.0.104:8080/api/v1/users/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      //body: formData,
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
    })
      .then((responseData) => {
        Alert.alert(
          'Correcto:',
          'Usuario agregado',
        )
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textBox} placeholder='Username...'
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username} />
        <TextInput style={styles.textBox} secureTextEntry placeholder='Password...'
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password} />
        <TouchableHighlight style={styles.button}
          onPress={this.onPressButtonPOST.bind(this)}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Agregar usuario</Text>
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