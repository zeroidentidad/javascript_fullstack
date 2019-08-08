import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MKTextField, MKColor, MKButton } from "react-native-material-kit";
import Loader from './Loader';

const LoginButton = MKButton.coloredButton().withText('Acceder').build();

export default class Login extends Component {
    state = {
        email:'',
        password:'',
        loading: false
    }

    onButtonPress(){
        console.log('Click btn!')
    }

    renderLoader(){
        if(this.state.loading){
            return <Loader />
        } else{
            return <LoginButton onPress={this.onButtonPress.bind(this)} />
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bienvenida}>Login:</Text>
                <MKTextField
                text={this.state.email}
                onTextChange={email => this.setState({email})}
                textInputStyle={styles.fieldStyles}
                placeholder={'Email...'}
                tintColor={MKColor.Teal}
                />
                <MKTextField
                text={this.state.password}
                onTextChange={password => this.setState({password})}
                textInputStyle={styles.fieldStyles}
                placeholder={'Contraseña...'}
                tintColor={MKColor.Teal}
                password={true}
                />
                <Text style={styles.errorMessage}>{this.state.error}</Text>
                <View style={styles.loginBtnView}>
                    {this.renderLoader()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bienvenida: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },    
  form: {
      paddingBottom: 10,
      width: 200  
  },
  fieldStyles: {
      height: 40,
      color: MKColor.Orange,
      width: 200
  },
  loginBtnView: {
      marginTop: 20
  },
  errorMessage: {

  }
});