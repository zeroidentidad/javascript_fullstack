import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { Switch, NativeRouter, Route, Link } from 'react-router-native';
import Cards from './Cards';
import CardDetails from './CardDetails';

// Puedes eliminar esta línea de forma segura si React Native actualizó su dependencia React
// problema de github de métodos de ciclo de vida: https://github.com/facebook/react-native/issues/18175
console.disableYellowBox = true;

export default class App extends React.Component {
  state = { cards: [
    { id: 0, name: 'Tarjeta 1'},
    { id: 1, name: 'Tarjeta 2'},
    { id: 2, name: 'Tarjeta 3'},
    { id: 3, name: 'Tarjeta 4'}
  ]}
  render() {
    return (
      <NativeRouter>
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'My AppExample', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <View>
            <Link to="/cards"><Text style={[styles.text, {textDecorationLine: 'underline'}]}>Mostrar tarjetas</Text></Link>
          </View> 
          <View>
            <Switch>
              <Route exact path="/cards" render={(props) => (
                <Cards
                  cards={this.state.cards}
                />
              )}/>
              <Route exact path="/card/:id" render={(props) => {
                let cardPosition = props.location.pathname.replace('/card/', '');
                return (
                  <CardDetails
                    card={this.state.cards[cardPosition]}
                  />
                )
              }}/>
            </Switch>
          </View> 
        </View>
      </NativeRouter>
    );
  }
}




const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
