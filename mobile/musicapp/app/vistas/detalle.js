import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ArtistBox from '../componentes/artistbox';
import { getArtistas } from '../api/cliente';

export default class Detalle extends Component {

    render() {

        const artista = this.props.artista

        return (
            <View style={styles.container}>
                <ArtistBox artista={artista} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 10
    }
});
