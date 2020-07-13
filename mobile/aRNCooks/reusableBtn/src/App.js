import React from 'react';
import {
  Alert,
  StyleSheet,
  View
} from 'react-native';
import Button from './Button';

export default class App extends React.Component {
  handleButtonPress() {
    Alert.alert('Alert', 'You clicked this button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button}>
          Base
        </Button>
        <Button success style={styles.button}>
          Success
        </Button>
        <Button info style={styles.button}>
          Info
        </Button>
        <Button danger rounded style={styles.button}
          onPress={this.handleButtonPress}>
          Rounded
        </Button>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
});