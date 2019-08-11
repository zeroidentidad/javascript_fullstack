import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

export default class Loader extends Component {

    render() {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});