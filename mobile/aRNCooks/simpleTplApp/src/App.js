import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const playIcon=require('./images/play.png');
const volumeIcon=require('./images/sound.png');
const hdIcon=require('./images/hd-sign.png');
const fullScreenIcon=require('./images/full-screen.png');
const flower=require('./images/flower.jpg');

export default class App extends React.Component {
  render() {
    const name='01 - Blue Behind Green Bloches';
    return (
      <View style={styles.appContainer}>
        <ImageBackground source={flower} style=
          {styles.videoContainer} resizeMode="contain">
          <View style={styles.controlsContainer}>
            <Image source={volumeIcon} style={styles.icon} />
            <View style={styles.progress}>
              <View style={styles.progressBar} />
            </View>
            <Image source={hdIcon} style={styles.icon} />
            <Image source={fullScreenIcon} style={styles.icon} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  flower: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    padding: 10,
    backgroundColor: '#202020',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 200,
  },
  icon: {
    tintColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 14,
    margin: 4,
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 10,
    margin: 2,
    paddingTop: 3,
    width: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
});