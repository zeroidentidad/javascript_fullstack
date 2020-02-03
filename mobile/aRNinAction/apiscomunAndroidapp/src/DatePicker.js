import React, { Component } from 'react'
import { DatePickerAndroid, View, Text } from 'react-native'

let styles

class DatePicker extends Component {

	constructor() {
		super()
		this.state = {
			date: new Date()
		}
		this.openDatePicker = this.openDatePicker.bind(this)
	}

	openDatePicker () {
		DatePickerAndroid.open({
			date: this.state.date
		})
		.then((date) => {
			const { year, month, day, action } = date
			if (action === 'dateSetAction') {
				this.setState({ date: new Date(year, month, day) })
			}
		}) 
	}

	render() {
		const {
			container,
			text
		} = styles

		return (
			<View style={container}>
			<Text onPress={this.openDatePicker} style={text}>
			Abrir Datepicker
			</Text>
			<Text style={text}>{this.state.date.toString()}</Text>
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

export default DatePicker			