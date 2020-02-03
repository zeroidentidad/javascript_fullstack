import React from 'react'
import {
    View,
	Text,
	//ToolbarAndroid
} from 'react-native'
import ToolbarAndroid from '@react-native-community/toolbar-android'

class Toolbar extends React.Component {
    render() {

		const onActionSelected = (index) => {
			if (index === 1) {
				this.props.openDrawer()
			}
		}

        return (
            <View style={{ flex: 1 }}>
				<ToolbarAndroid
					subtitleColor='white'
					titleColor='white'
					style={{ height: 56, backgroundColor: '#52998c' }}
					title='React Native en acción'
					subtitle='ToolbarAndroid'
					actions={[{ title: 'Opciones', show: 'always' }, { title: 'Menu', show: 'always' }]}
					onActionSelected={onActionSelected}
				/>
            </View>
        )
    }
}

export default Toolbar