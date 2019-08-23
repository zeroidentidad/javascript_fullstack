import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ajax from './src/ajax';
import PostresList from "./src/components/PostresList";
import PostreDetail from "./src/components/PostreDetail";

export default class App extends Component {

  state = {
    postres: [],
    currentPostreId: null
  }

  async componentDidMount(){
    const postres = await ajax.fetchInicial();
    console.log(postres);
    this.setState( { postres } );
  }

  setCurrentPostre = (postreId) => {
    this.setState({
      currentPostreId: postreId
    });
  };
  
  unsetCurrentPostre = () => {
    this.setState({
      currentPostreId: null
    });
  };   

  currentPostre = () => {
    return this.state.postres.find((postre) => postre.href === this.state.currentPostreId); //href as key
  };

  render() {
    if(this.state.currentPostreId){
      return <PostreDetail initialPostreData={this.currentPostre()} onBack={this.unsetCurrentPostre}/>
    }
    if (this.state.postres.length > 0){
      return (<PostresList postres={this.state.postres} onItemPress={this.setCurrentPostre} />);
    }
    return (
      <View style={styles.container}>
          <Text style={styles.header}>Postres</Text>
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
