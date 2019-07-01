/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ArtistBox from './app/componentes/artistbox';

type Props = {};
export default class App extends Component<Props> {
  render() {

    const artista = {
      image: 'https://areajugones.sport.es/wp-content/uploads/2018/03/DXVhKJtVQAAx-Jd-810x400.jpg',
      name: 'El Kokun',
      likes: 998897,
      comentarios: 99056
    }

    return (
      <View style={styles.container}>
        <ArtistBox artista={artista}></ArtistBox>
        <ArtistBox artista={artista}></ArtistBox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }
});
