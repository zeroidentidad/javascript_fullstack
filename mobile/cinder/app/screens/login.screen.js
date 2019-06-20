import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import {
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import { inject } from 'mobx-react';

import Login from '../components/login.component';

@inject("stores")
export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {stores} = this.props
    return (
      <Container>
        <View style={styles.container}>
          <Content scrollEnabled={false}>
            <Image style={styles.loginBackground} source={stores.config.LoginBG}>
              <View style={styles.loginForeground} >
                <Login {...this.props}/>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  loginBackground: {
    flex: 1,
    width: null,
    height: null
  },
  loginForeground: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 90,
    bottom: 0
  }
})