import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('screen');

const FancyButton = props => {
  return(
    <TouchableOpacity
    style={styles.fancyButton}
    onPress={()=>props.setItem([props.item], props.value)}
    >
      <Text style={styles.label}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const FancyInput = props => {
  return(
    <React.Fragment>
      <Text style={styles.label}>{props.text}</Text>
      <TextInput
      style={styles.input}
      onChangeText={value => props.setItem([props.item], value)}
      value={props.value}
      ></TextInput>
    </React.Fragment>
  )
}

class Container extends Component {
  constructor(){
    super();
    this.state={
      isCurrentUser: false,
      user: '',
      password: '',
      email: ''
    }
  }

  setItem(key, value){
    this.setState({[key]:value});
  }

  render(){
    return(
      <View style={styles.container}>
        <FancyInput 
        item={'user'} 
        value={this.state.user} 
        setItem={this.setItem.bind(this)}>
        </FancyInput>
        <FancyInput 
        item={'password'} 
        value={this.state.password} 
        setItem={this.setItem.bind(this)}>
        </FancyInput>

        {this.state.isCurrentUser?(
          <FancyButton
          text={'Log in'}>
          </FancyButton>
        ):(
          <React.Fragment>
            <FancyInput 
            item={'email'} 
            value={this.state.email} 
            setItem={this.setItem.bind(this)}>
            </FancyInput>
            <FancyButton
            text={'Sign up'}>
            </FancyButton>
            <FancyButton
            text={'Sign in'}
            value={this.state.isCurrentUser?false:true}
            item={'isCurrentUser'}
            setItem={this.setItem.bind(this)}>
            </FancyButton>
          </React.Fragment>                 
        )}
      </View>
    )
  }
}

class App extends Component {
  render(){
    return <Container/>
  }
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  fancyButton:{
    marginTop: 10,
    backgroundColor: 'lightblue',
    borderBottomRightRadius: 4,
    width,
    borderWidth: 1,
    borderColor: 'gray'
  },
  label: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    margin: 10
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width,
    height: 45
  },
});

export default App;
