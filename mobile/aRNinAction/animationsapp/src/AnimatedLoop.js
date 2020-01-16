import React, { Component } from 'react';
import {
  Easing,
  StyleSheet,
  View,
  Animated,
  Button,
  Text,
} from 'react-native';

export default class AnimatedLoop extends Component {
  
  state = {
    loading: true,
  }

  componentDidMount() {
    this.animate();
    setTimeout(() => this.setState({ loading: false }), 2500)
  }

  animatedRotation = new Animated.Value(0);

  animate = () => {
    Animated.loop(
      Animated.timing(
        this.animatedRotation,
        {
          toValue: 1,
          duration: 1800,
          easing: Easing.linear,
        }
      )
    ).start()
  }

  render() {
    const rotation = this.animatedRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {
          loading ? (
            <Animated.Image
              source={require('./assets/spinner.png')}
              style={{ width: 40, height: 40, transform: [{ rotate: rotation }] }}
            />
          ) : (
            <Text>Bienvenid@</Text>
          )
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
    padding: 10,
    paddingTop: 50,
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9,
  },
});
