/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ArtistList from './app/componentes/artistlist';

type Props = {};
export default class App extends Component<Props> {

  render() {
    
    const artista = {
      image: 'https://areajugones.sport.es/wp-content/uploads/2018/03/DXVhKJtVQAAx-Jd-810x400.jpg',
      name: 'El Kokun',
      likes: 998897,
      comentarios: 99056
    }
    const artistas = Array(5).fill(artista);

    return (
      <View style={styles.container}>
        <ArtistList artistas={artistas}/>
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
    paddingTop: 30
  }
});
