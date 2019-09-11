import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { TextInput, Button, Title, withTheme } from 'react-native-paper';
import styles from '../stylesheets/login.stylesheet'

class AuthUI extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }   
    
    setEmail = (email) => {
        this.setState({
            email: email
        })
    }

    setPassword = (password) => {
        this.setState({
            password: password
        })
    }    

    render(){
        let props = this.props;
        return (
            <View style={styles.container}>
                <Title>Ingresar con tu cuenta:</Title>
                <TextInput label="E-mail..." value={this.state.email}
                textContentType="emailAddress" keyboardType="email-address"
                style={styles.formControl} onChangeText={(text) => this.setEmail(text)} />
                <TextInput label="Contraseña..." value={this.state.password} 
                textContentType="password" secureTextEntry={true} 
                style={styles.formControl} onChangeText={(text) => this.setPassword(text)} />
                <View style={[styles.botones, styles.formControl]}>
                    <TouchableHighlight style={styles.touchables}>
                        <Button onPress={() => props.mainAction({email:this.state.email, password:this.state.password})} mode="contained">
                            {props.mainButtonTitle}
                        </Button>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchables}>
                        <Button onPress={() => props.navigationAction()} mode="contained">
                            {props.secondaryButtonTitle}
                        </Button>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default withTheme(AuthUI)