import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Container from './src/Container'
import Personajes from './src/Personajes'
import Peliculas from './src/Peliculas'
import Naves from './src/Naves'
import Especies from './src/Especies'
import Planetas from './src/Planetas'

const links = [
  { title: 'Peliculas' },  
  { title: 'Personajes' },
  { title: 'Naves' },
  { title: 'Especies' },
  { title: 'Planetas' }
]

class StarWars extends Component {
  
  static navigationOptions = {
    headerTitle: <Text
      style={{
        fontSize: 34, color: 'rgb(255,232,31)',
        textAlign: 'center',
        alignSelf:'center',
        textAlignVertical: 'center'
      }}
    >{"\t\t"} Star Wars 👾</Text>,
    headerStyle: { backgroundColor: "black", height: 90 }
  }

  navigate = (link) => {
    const { navigate } = this.props.navigation
    navigate(link)
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight
        onPress={() => this.navigate(item.title)}
        style={[styles.item, { borderTopWidth: index === 0 ? 1 : null }]}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableHighlight>
    )
  }

  render() {

    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={(item) => item.title}
          renderItem={this.renderItem}
        />
      </Container>
    );

  }

}

const App = createStackNavigator({
  Home: {
    screen: StarWars,
  },
  Personajes: {
    screen: Personajes
  },
  Peliculas: {
    screen: Peliculas
  },
  Naves: {
    screen: Naves
  },
  Especies: {
    screen: Especies
  },
  Planetas: {
    screen: Planetas
  }
});


const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .2)',
    borderBottomWidth: 1
  },
  text: {
    color: '#ffe81f',
    fontSize: 18
  }
});

export default App