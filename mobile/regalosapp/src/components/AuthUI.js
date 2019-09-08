import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native'

const AuthUI = (props) => {
    return (
        <View style={styles.container}>
            <Text>E-mail:</Text>
            <TextInput onChangeText={(text) => props.setEmail(text)}/>
            <Text>Contraseña:</Text>
            <TextInput onChangeText={(text) => props.setPassword(text)}/>
            <View style={styles.botones}>
                <TouchableHighlight style={styles.touchables}>
                <Button title={props.mainButtonTitle} onPress={() => props.mainAction()}/>
                </TouchableHighlight>
                <TouchableHighlight style={styles.touchables}>
                <Button title={props.secondaryButtonTitle} onPress={() => props.navigationAction()}/>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default AuthUI

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    touchables: {
        margin: 0
    }
})