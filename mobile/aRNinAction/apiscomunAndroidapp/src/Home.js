import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

let styles

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Hola, esta es una aplicación de ejemplo que muestra algunas API y componentes específicos de Android.
                </Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        margin: 20,
        textAlign: 'center',
        fontSize: 18
    }
})

export default Home