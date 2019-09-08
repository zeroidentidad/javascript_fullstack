import React, { Component } from 'react'
import { withTheme } from 'react-native-paper';
import { View, Text } from 'react-native';
import styles from '../stylesheets/login.stylesheet'

class HomeComponent extends Component {

    componentDidMount(){
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:28, fontWeight:'bold'}}> Bienvenid@ a RN</Text>
            </View>
        )
    }
}

export default withTheme(HomeComponent)
