import React, { Component } from 'react'
import { TimePickerAndroid, View, Text } from 'react-native'
import moment from 'moment'

let styles

class TimePicker extends Component {

	constructor () {
		super()
		this.state = {
			time: moment().format('h:mm a')
		}
		this.openTimePicker = this.openTimePicker.bind(this)
	}

	openTimePicker () {
		TimePickerAndroid.open({
			time: this.state.time
		})
		.then((time) => {
			const { hour, minute, action } = time
			if (action === 'timeSetAction') {
				const time = moment().minute(minute).hour(hour).format('h:mm a')
				this.setState({ time })
			}
		})
	}

	render () {
		const {
			container,
			text
		} = styles

		return (
		<View style={container}>
		<Text onPress={this.openTimePicker} style={text}>Abrir Time Picker</Text>
		<Text style={text}>{this.state.time.toString()}</Text>
		</View>
		)
	}
}

styles = {
	container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center'
	},
	text: {
	marginBottom: 15,
	fontSize: 20
	}
}

export default TimePicker