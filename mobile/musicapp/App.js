/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Platform from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Home from './app/vistas/home';
import Detalle from './app/vistas/detalle';

type Props = {};
export default class App extends Component<Props> {

  render() {

    const isAndroid = Platform.OS === 'android';

    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar />
          <Scene key="detalle" component={Detalle} />
        </Stack>
      </Router>
    );
  }
  
}