/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ListLayout from './app/listLayout'
import {FlatList} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      listaM: [
        {nombre: ' la aabcd', key: '0'},
        { nombre: ' el zxcvb', key: '1'},
        { nombre: ' los fjfgk', key: '2'},
        { nombre: ' num 806976', key: '3'},
        { nombre: ' la rDMONS', key: '4' },
        { nombre: ' el Epamipie', key: '5' },
        { nombre: ' los otrofun', key: '6' },
        { nombre: ' num 123456', key: '7'},
        { nombre: ' la kekosax', key: '8' },
        { nombre: ' el xyznow', key: '9' },
        { nombre: ' los softke', key: '10' },
        { nombre: ' num 098765', key: '11'},
      ]
    }
  }

  separador = ()=>{
    return (
      <View style={{height:3, width:'100%', backgroundColor:'black', marginVertical:10}}>
      </View>
    )
  }

  render() {
    return (
      <FlatList
      data={this.state.listaM}
      renderItem={ ({ item }) => <ListLayout data={item} />}
      horizontal={false}
      ItemSeparatorComponent={this.separador}
      ListEmptyComponent={<Text style={{ marginTop: 30, fontSize: 24 }}>Sin elementos</Text>}
      ></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
