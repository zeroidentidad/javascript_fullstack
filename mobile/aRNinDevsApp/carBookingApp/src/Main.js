import React, { Component } from 'react';
import { View, Animated, Image, StyleSheet, Alert } from 'react-native';
import MapView from 'react-native-maps';
import GeoCoder from 'react-native-geocoder';

import LocationPin from './components/LocationPin';
import LocationSearch from './components/LocationSearch';
import ClassSelection from './components/ClassSelection';
import ConfirmationModal from './components/ConfirmationModal';

GeoCoder.fallbackToGoogle('AIzaSyCwq86qVW4KkSuEOvM85S8O8gy6f0pVXoM'); // Geocoding API Key

export default class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			position: null,
			confirmationModalVisible: false,
			carLocations: [{
				rotation: 78,
				latitude: 17.992968,
				longitude: -92.9207987
			},
			{
				rotation: -10,
				latitude: 17.9913488,
				longitude: -92.9350451
			},
			{
				rotation: 262,
				latitude: 17.981661,
				longitude: -92.9182347
			},
			{
				rotation: 262,
				latitude: 17.998313,
				longitude: -92.9234847
			}]
		};
		this.initialRegion = {
			latitude: 17.9978794,
			longitude: -92.9257754,
			latitudeDelta: 0.00923,
			longitudeDelta: 0.00422
		};
	}

	_onRegionChange(region) {
		this.setState({ position: null });
		const self = this;
		if (this.timeoutId) clearTimeout(this.timeoutId);
		this.timeoutId = setTimeout(async function () {
			try {
				const res = await GeoCoder.geocodePosition({ lat: region.latitude, lng: region.longitude });
				self.setState({ position: res[0] });
			} catch (err) {
				console.log(err+" aqui")
			}
		}, 2000);
	}

	_onBookingRequest() {
		this.setState({
			confirmationModalVisible: true
		});
		
		setTimeout(()=> {
			try {
				this.setState({
					confirmationModalVisible: false
				});
				Alert.alert(
					'Correcto',
					'Alerta enviada 😎',
					[
						{
							text: 'Ok prro!',
							onPress: () => console.log('Ok...'),
							style: 'destructive'
						}
					]
				)
			} catch (err) {
				console.log(err + " aqui 2")
			}
		}, 3500);		
	}

	componentDidMount() {
		this._onRegionChange.call(this, this.initialRegion)
	}

	render() {
		console.disableYellowBox = true;
		return (
			<View style={{ flex: 1 }}>
				<MapView
					style={styles.fullScreenMap}
					initialRegion={this.initialRegion}
					onRegionChange={this._onRegionChange.bind(this)}
				>
					{this.state.carLocations.map((carLocation, i) => (
						<MapView.Marker
							key={i}
							coordinate={carLocation}
						>
							<Animated.Image style={[styles.car, { transform: [{ rotate: `${carLocation.rotation}deg` }] }]} source={require('./img/car.png')} />
						</MapView.Marker>
					))}
				</MapView>
				<LocationSearch value={this.state.position && (this.state.position.feature || this.state.position.formattedAddress)} />
				<LocationPin onPress={this._onBookingRequest.bind(this)} />
				<ClassSelection />
				<ConfirmationModal visible={this.state.confirmationModalVisible} onClose={() => { this.setState({ confirmationModalVisible: false }) }} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fullScreenMap: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	car: {
	},
});