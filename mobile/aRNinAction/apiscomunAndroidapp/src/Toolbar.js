import React from 'react'
import {
    View,
    Text
} from 'react-native'

class ToolBar extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Hola desde Toolbar</Text>
            </View>
        )
    }
}

export default ToolBar