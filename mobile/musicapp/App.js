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
//import getArtistas from './app/api/cliente';
import {getArtistas} from './app/api/cliente';

type Props = {};
export default class App extends Component<Props> {

  state = {
    artistas: []
  }

  componentDidMount(){
    getArtistas().then(datos => this.setState({artistas: datos}));
  }

  render() {
    
    const artistas = this.state.artistas

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
