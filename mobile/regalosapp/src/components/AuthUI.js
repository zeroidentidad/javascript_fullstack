import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const AuthUI = (props) => {
    return (
        <View>
            <Text>E-mail:</Text>
            <TextInput onChangeText={(text) => props.setEmail(text)}/>
            <Text>Contraseña:</Text>
            <TextInput onChangeText={(text) => props.setPassword(text)}/>
            <Button title={props.mainButtonTitle} onPress={() => props.mainAction()}/>
            <Button title={props.secondaryButtonTitle} onPress={() => props.navigationAction()}/>
        </View>
    )
}

export default AuthUI
