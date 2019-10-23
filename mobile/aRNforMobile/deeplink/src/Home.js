import React from 'react';
import { Text } from 'react-native';
class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return <Text style={{ fontSize: 26, color: 'black', paddingTop: 30, textAlign: 'center' }}>En pantalla Home!</Text>;
  }
}
export default Home;