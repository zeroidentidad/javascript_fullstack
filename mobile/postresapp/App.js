import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ajax from './src/ajax';
import PostresList from "./src/components/PostresList";
import PostreDetail from "./src/components/PostreDetail";
import SearchBar from './src/components/SearchBar';

export default class App extends Component {

  state = {
    postres: [],
    postresFromSearch: [],    
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

  searchPostres = async (searchTerm) => {
    let postresFromSearch = [];
    const query = searchTerm.replace(/ /g, "%20");     
    if (searchTerm) {
      postresFromSearch = await ajax.fetchPostreSearch(query);
    }
    this.setState({ postresFromSearch });
  }; 

  render() {
    console.disableYellowBox = true;
    if(this.state.currentPostreId){
      return (
        <View style={styles.main}>
        <PostreDetail initialPostreData={this.currentPostre()} onBack={this.unsetCurrentPostre}/>
        </View>
      )
    }
    const postresToDisplay = this.state.postresFromSearch.length > 0 ? this.state.postresFromSearch : this.state.postres;
    if (postresToDisplay.length > 0){
      return (
        <View style={styles.main}>
          <SearchBar searchPostres={this.searchPostres}/>
          <PostresList postres={postresToDisplay} onItemPress={this.setCurrentPostre} />
        </View>
      );
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
  },
  main: {
    marginTop: 5
  }
});
