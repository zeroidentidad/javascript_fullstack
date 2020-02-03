import React from 'react'
import { View, Text, ToastAndroid } from 'react-native'

let styles

const Toast = () => {

	let {
		container,
		button
	} = styles

	const basicToast = () => {
		ToastAndroid.show('Hola mundo X!', ToastAndroid.LONG)
	}

	const gravityToast = () => {
		ToastAndroid.showWithGravity('Toast con Gravity X!',
			ToastAndroid.LONG, ToastAndroid.CENTER)
	}

	return (
		<View style={container}>
		<Text style={button} onPress={basicToast}>
		Abrir basic toast
		</Text>
		<Text style={button} onPress={gravityToast}>
		Abrir gravity toast
		</Text>
		</View>
		)
}

styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		marginBottom: 10,
		color: 'blue'
	}
}

export default Toast