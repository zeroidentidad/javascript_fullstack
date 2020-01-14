import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native'
import _ from 'lodash'

import CenterMessage from '../components/CenterMessage'

import { colors } from '../theme'

export default class Cities extends React.Component {
    static navigationOptions = {
        title: 'Ciudades',
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400'
        }
    }
    navigate = (item) => {
        this.props.navigation.navigate('City', { city: item })
    }
    render() {
        //const { screenProps: { cities } } = this.props
        const cities = _.get(this.props.screenProps, 'cities', [])
        return (
            <ScrollView contentContainerStyle={[_.size(cities) == 0 && { flex: 1 }]}>
                <View style={[_.size(cities) == 0 && { justifyContent: 'center', flex: 1 }]}>
                    {
                        _.size(cities) == 0 && <CenterMessage message='No hay ciudades guardadas!' />
                    }
                    {
                        _.size(cities) > 0 && cities.map((item, index) => (
                            <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                                <View style={styles.cityContainer}>
                                    <Text style={styles.city}>{item.city}</Text>
                                    <Text style={styles.country}>{item.country}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 20,
    },
    country: {
        color: 'rgba(0, 0, 0, .5)'
    },
})