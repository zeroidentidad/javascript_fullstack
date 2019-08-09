import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MKTextField, MKColor, MKButton } from "react-native-material-kit";
import Loader from './Loader';
import firebase from 'firebase';

const LoginButton = MKButton.coloredButton().withText('Acceder').build();

export default class Login extends Component {
    state = {
        email:'',
        password:'',
        error: '',
        loading: false
    }

    onButtonPress(){
        const {email, password} = this.state;
        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onAuthSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onAuthSuccess.bind(this))
            .catch(this.onAuthFailed.bind(this))
        })
        console.warn('Click btn!')
    }

    onAuthSuccess(){
        this.setState({
        email:'',
        password:'',
        error: '',
        loading: false            
        })
    }

    onAuthFailed(){
        this.setState({
        error: 'Fallo autenticación',
        loading: false            
        })
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
                <Text style={styles.bienvenida}>Login (autoReg):</Text>
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
      marginTop: 15,
      fontSize: 16,
      color: 'red',
      alignSelf: 'center'
  }
});