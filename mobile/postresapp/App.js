import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ajax from './src/ajax';
import PostresList from "./src/components/PostresList";

export default class App extends Component {

  state = {
    postres: {}
  }

  async componentDidMount(){
    const postres = await ajax.fetchInicial();
    console.log(postres);
    this.setState( { postres } );
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.postres.length > 0 ? (
          <PostresList postres={this.state.postres}/> ) : (
          <Text style={styles.header}>Postres</Text> )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 35,
    textAlign: 'center'
  }
});
