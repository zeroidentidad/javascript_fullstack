import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.3230,
        longitude: -122.0322,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922,
      },
      coordinate: {
        latitude: 37.3230,
        longitude: -122.0322,
      },
    };
  }

  render() {
    return (
      <MapView
        style={styles.container}
        provider="google"
        initialRegion={this.state.region}
      >
        <Marker coordinate={this.state.coordinate} />
      </MapView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});  