import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native';

const SECONDS = 1800;

export default class SplashScreen extends Component {
  componentDidMount() {
    // Cuando esté montado, espera unos segundos, luego navega a Home
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, SECONDS);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#003782',
        }}
      >
        <ImageBackground style={styles.container} source={require('../assets/splash.jpg')}>
            <Text style={styles.texto}>Slpash</Text>
            <Image style={styles.icono} source={require('../assets/logo.png')} />            
        </ImageBackground>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 26,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        color: 'white'
    },
    icono: {
        width: 110,
        height: 110,
        marginTop: '30%'
    }
});
