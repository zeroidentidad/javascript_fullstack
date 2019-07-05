import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

    handleLogin = (error, result) => {
        if (error) {
            alert("Login error: " + error.message);
        } else if (result.isCancelled) {
            alert("Login cancelado");
        } else {
            AccessToken.getCurrentAccessToken().then(() => {
                //alert("Login correcto: " + data.accessToken.toString())
                Actions.home()
            })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Acceder a la App</Text>
                <LoginButton
                    readPermissions={["public_profile", "email"]}
                    onLoginFinished={this.handleLogin}
                    onLogoutFinished={() => alert("Saliste.")} />                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    texto: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20
    }
});
