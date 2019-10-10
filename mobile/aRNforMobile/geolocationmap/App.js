import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 17.84148,
        longitude: -93.2357091,
        latitudeDelta: 0.0999,
        longitudeDelta: 0.0999,
      },
      coordinate: {
        latitude: 17.84148,
        longitude: -93.2357091,
      },
    };
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(
      (position) => {
        //console.log(position);
        this.map.animateToRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        });
      },
      (error) => console.log(error.message),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <MapView
        ref={ref => { this.map = ref; }}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        followUserLocation={true}
        loadingEnabled={true}
        initialRegion={this.state.region}
      >
        <Marker
        title="Marcador emulado"
        description="textto descriptivo"
        coordinate={this.state.coordinate}
        />
      </MapView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});  