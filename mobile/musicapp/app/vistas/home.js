import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import ArtistList from '../componentes/artistlist';
//import getArtistas from './app/api/cliente';
import { getArtistas } from '../api/cliente';

export default class Home extends Component {

    state = {
        artistas: null
    }

    componentDidMount() {
        getArtistas().then(datos => this.setState({ artistas: datos }));
    }

    render() {

        const artistas = this.state.artistas

        return (
            <View style={styles.container}>
                {!artistas && <ActivityIndicator size="large" />}
                {artistas && <ArtistList artistas={artistas} />}
            </View>

            /*<ScrollView style={styles.container}>
              {
                Array(500).fill(artista).map(artista=>{
                  return <ArtistBox artista={artista}></ArtistBox>
                })
              }
            </ScrollView>*/
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
