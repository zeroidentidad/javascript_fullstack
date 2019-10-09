import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight } from 'react-native';
export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Compartir',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.topBox} onPress={() => navigate('HomeListScreen')}>
          <Image
            style={styles.homeBanner}
            source={require('../assets/houses.png')}
          />
        </TouchableHighlight>
        <View style={styles.bottomBox}>
          <Button
            title="Ir a About Screen"
            onPress={() =>
              navigate('About')
            }
          /> 
        </View>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topBox: {
    flex: 1,
    backgroundColor: '#C0C0C0'
  },
  bottomBox: {
    flex: 2,
    backgroundColor: '#fff'
  },
  homeBanner: {
    bottom: 0,
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  }
});