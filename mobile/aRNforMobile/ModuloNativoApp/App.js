import React, {Component} from 'react';
import {StyleSheet, Text, View, NativeModules, Button} from 'react-native';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { cuenta: 0 };
    this.updateCount();
  }
  
  increment = () => {
    NativeModules.Contador.increment();
    this.updateCount();
    }
  
  updateCount = () => {
    NativeModules.Contador.getCount( (error, cuenta)=>{
      this.setState({ cuenta: cuenta});
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:16}}>Contador código Nativo:</Text>
        <Text style={{fontSize:26, fontWeight: 'bold', color: 'black'}}>{this.state.cuenta} %</Text>
      <Button
            style={{fontSize:24, fontWeight: 'bold'}}
            onPress={this.increment}
            title="Obtener info bateria"
            color="#841584"
          />
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
  }
});
