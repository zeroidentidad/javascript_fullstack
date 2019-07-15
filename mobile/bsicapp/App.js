/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image, Button, Alert, 
  ImageBackground, TouchableOpacity, TextInput,
  ScrollView
} from 'react-native';
import Video from 'react-native-video';

type Props = {};
export default class App extends Component<Props> {

  saludo = () => {
    Alert.alert('Que onda')
  }

  imagen = () => {
    Alert.alert('Imagen seleccionada')
  } 

  render() {
    return (
      <ImageBackground style={styles.container} source={require('./assets/white_ele.jpg')}>
        <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={require('./assets/menma.jpg')} style={styles.logo}/>
          </View>
          <View style={styles.headerRight}>
            <Button title="Login" onPress={this.saludo}/>
          </View>          
        </View>
        <View style={[styles.body, styles.negrita]} /* array estilos */>
          <TouchableOpacity>
            <Text style={styles.textColor} onPress={this.saludo}>Contenido App</Text>
            <TextInput 
            placeholder="Escribe algo..."
            placeholderTextColor="red" maxLength={16}
              style={[styles.textColor, { borderWidth: 1, borderColor: 'black', padding: 5, marginTop: 10}]}
            ></TextInput>
          </TouchableOpacity>
            <Video source={{ uri: "http://mirrors.standaloneinstaller.com/video-sample/small.mp4" }}
            ref={(ref) => { this.player = ref  }}
            resizeMode="cover"
            controls
            onBuffer={this.onBuffer}
            onError={this.videoError}
            style={styles.backgroundVideo} />
            <TouchableOpacity>
            <Image style={styles.image} 
            onPress={this.imagen}
            source= {source = { uri: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/200?blur=2` }} />
            </TouchableOpacity>
            <Video source={{ uri: "http://mirrors.standaloneinstaller.com/video-sample/grb_2.mp4" }}
              paused={true}
              resizeMode="cover"
              controls
              onBuffer={this.onBuffer}
              onError={this.videoError}
              style={styles.backgroundVideo} />
            <TouchableOpacity>
            <Image style={styles.image}
            onPress={this.imagen} 
            source={source = { uri: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/200?blur=2` }} />
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
            <Text style={styles.textColor}>Hola</Text>
          </View>
          <View style={[styles.flex, styles.footerCenter]}>
            <Text style={styles.textColor}>Usuario X</Text>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <Image source={require('./assets/menma_.jpg')} style={styles.logo} />
          </View>
        </View>
        </ScrollView>                         
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    //justifyContent: 'center', // alinecion vertical
    //alignItems: 'center', // alineacion horizontal
    flexDirection: 'column'
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    marginTop: 1
  },
  headerLeft: {
    flex: 1,
    //backgroundColor: 'blue'
  },
  headerRight: {
    flex: 0.3,
    //backgroundColor: 'green',
    marginRight: 5
  },
  body: {
    flex: 1,
    //backgroundColor: 'gray',
    alignItems: 'center', // alineacion horizontal
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 60,
    borderRadius: 20,
    resizeMode: 'contain'
  },
  negrita: {
    fontWeight: 'bold'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute', left: 0, right: 0, bottom: 0
  },
  flex: {
    flex: 1
  },
  footerLeft: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerRight: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  textColor: {
    color: 'black',
    fontSize: 20
  },
  backgroundVideo: {
    //position: 'absolute',
    top: 20,
    width: 250,
    height: 250
  },
  image: {
    width: 250,
    height: 250,
    paddingTop: 2
  }      
});
