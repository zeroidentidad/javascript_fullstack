import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
let styles = {}

class GeolocationExample extends Component {

  constructor () {
    super()
    this.state = {
      originalCoords: {},
      updatedCoords: {},
      id: ''
    }
    this.clearWatch = this.clearWatch.bind(this)
  }

  componentDidMount() {

    //navigator.geolocation.getCurrentPosition(
    Geolocation.getCurrentPosition(
      (success) => {
        this.setState({originalCoords: success.coords})
      },
      (err) => console.log('err:', err)
    )

    //let id = navigator.geolocation.watchPosition(
    let id = Geolocation.watchPosition(
      (success) => {
        this.setState({
          id,
          updatedCoords: success.coords
        })        
      },
      (err) => console.log('err:', err)
    )

  }

  clearWatch () {
    //navigator.geolocation.clearWatch(this.state.id)
    Geolocation.clearWatch(this.state.id)
  }

  render () {

    const { originalCoords, updatedCoords } = this.state

    return (
      <View style={styles.container}>
        <Text>Coordenadas originales</Text>
        <Text>Latitud: {originalCoords.latitude}</Text>
        <Text>Longitud: {originalCoords.longitude}</Text>
        <Text></Text>
        <Text>Coordenadas actualizadas</Text>
        <Text>Latitud: {updatedCoords.latitude}</Text>
        <Text>Longitud: {updatedCoords.longitude}</Text>
        <TouchableHighlight
          onPress={this.clearWatch}
          style={styles.button}>
          <Text>Limpiar visor</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    height: 60,
    marginTop: 15,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GeolocationExample