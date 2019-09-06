import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const SignUp = (props) => {
    return (
        <View>
            <Text>E-mail:</Text>
            <TextInput onChangeText={(text) => props.setEmail(text)}/>
            <Text>Contraseña:</Text>
            <TextInput onChangeText={(text) => props.setPassword(text)}/>
            <Button title="Registrar usuario" onPress={() => props.createUser()}/>
        </View>
    )
}

export default SignUp
