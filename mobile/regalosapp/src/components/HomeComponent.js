import React, { Component } from 'react'
import { withTheme, FAB } from 'react-native-paper';
import { View, Text, FlatList } from 'react-native';
import styles from '../stylesheets/login.stylesheet'
import Empty from './utils/Empty';
import EventCard from './events/EventCard';

class HomeComponent extends Component {

    componentDidMount(){
        this.props.setNavigationColor(this.props.theme.colors.primary)
    }

    render(){
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
                <Text style={{fontSize:24, fontWeight:'bold', paddingBottom: 5}}> Bienvenid@</Text>
                <FlatList
                data={this.props.events}
                style={{width: '100%'}}
                ListEmptyComponent={Empty}
                renderItem={({ item }) => (<EventCard key={item.date} event={item}></EventCard>)
                }
                />
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
