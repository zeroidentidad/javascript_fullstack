import React, { Component } from 'react'
import {
	//ViewPagerAndroid,
	View,
	Text
} from 'react-native'
import {default as ViewPagerAndroid} from '@react-native-community/viewpager'

let styles

class ViewPager extends Component {
	render () {
		const {
			pageStyle,
			page1Style,
			page2Style,
			textStyle
		} = styles
		return (
			<ViewPagerAndroid
			style={{ flex: 1 }}
			initialPage={0}>
			<View style={[ pageStyle, page1Style ]}>
			<Text style={textStyle}>Primera pagina</Text>
			</View>
			<View style={[ pageStyle, page2Style ]}>
			<Text style={textStyle}>Segunda pagina</Text>
			</View>
			</ViewPagerAndroid>
			)
	}
}

styles = {
	pageStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		flex: 1,
	},
	page1Style: {
		backgroundColor: 'orange'
	},
	page2Style: {
		backgroundColor: 'red'
	},
	textStyle: {
		fontSize: 18,
		color: 'white'
	}
}

export default ViewPager