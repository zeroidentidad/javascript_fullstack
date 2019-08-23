import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types';

export default class PostreItem extends Component {

    static propTypes = {
        postre: PropTypes.object.isRequired,
    };    

    render() {

        const { postre } = this.props;

        return (
            <View>
                <Image source={{ uri: postre.thumbnail }} style={styles.image} />
                <View>
                    <Text>NOMBRE: {postre.title} </Text>
                    <Text>INGREDIENTES: {postre.ingredients} </Text>
                    <Text>ENLACE: {postre.href} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
image: {
    left: '10%',
    width: '80%',
    height: 150,
    backgroundColor: '#ccc',
    resizeMode: 'cover'
  }    
})