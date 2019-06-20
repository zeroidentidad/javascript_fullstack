import React, { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Header/>
                <View style={styles.content}>

                </View>
                <Footer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },
    content: {
        flex: 1
    }
});