import React, { Component } from 'react'
import { withTheme, FAB } from 'react-native-paper';
import { View, Text } from 'react-native';
import styles from '../stylesheets/login.stylesheet'

class HomeComponent extends Component {

    componentDidMount(){
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={{fontSize:28, fontWeight:'bold'}}> Bienvenid@</Text>
                <FAB 
                icon="add"
                color="black"
                style={styles.fabHome}
                onPress={this.props.goToAddEvent}
                />
            </View>
        )
    }
}

export default withTheme(HomeComponent)
