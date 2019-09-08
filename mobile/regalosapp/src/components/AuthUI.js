import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { TextInput, Button, Title, withTheme } from 'react-native-paper';
import styles from '../stylesheets/login.stylesheet'

const AuthUI = (props) => {
    return (
        <View style={styles.container}>
            <Title>Ingresar con tu cuenta:</Title>
            <TextInput label="E-mail..." style={styles.formControl} onChangeText={(text) => props.setEmail(text)}/>
            <TextInput label="Contraseña..." style={styles.formControl} onChangeText={(text) => props.setPassword(text)}/>
            <View style={[styles.botones, styles.formControl]}>
                <TouchableHighlight style={styles.touchables}>
                <Button onPress={() => props.mainAction()} mode="contained">
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

export default withTheme(AuthUI)