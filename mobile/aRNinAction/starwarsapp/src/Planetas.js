import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ActivityIndicator,
    FlatList,
    Modal,
    Picker
} from 'react-native'

import Container from './Container'

export default class Planetas extends Component {

    static navigationOptions = {
        headerTitle: 'Planetas 🌐',
        headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#ffe81f',
            backgroundColor: 'black'
        },
        pressColorAndroid: 'white',
        headerTintColor: '#ffe81f'
    }

    state = {
        data: [],
        loading: true,
        modalVisible: false,
    }

    componentDidMount() {
        fetch('https://swapi.co/api/planets/')
            .then(res => res.json())
            .then(json => this.setState({ data: json.results, loading: false }))
            .catch((err) => console.log('err:', err))
    }

    closeModal = () => {
        this.setState({ modalVisible: false })
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.info}>Periodo rotación: {item.rotation_period+" horas"}</Text>
                <Text style={styles.info}>Periodo orbital: {item.orbital_period+" dias"}</Text>
                <Text style={styles.info}>Diámetro: {item.diameter+" km"}</Text>
                <Text style={styles.info}>Clima: {item.climate}</Text>
                <Text style={styles.info}>Gravedad: {item.gravity}</Text>
                <Text style={styles.info}>Terreno: {item.terrain}</Text>
                <Text style={styles.info}>Población: {item.population}</Text>
                <Text style={styles.info}>Agua superficial: {item.surface_water+" km2"}</Text>
                <Text style={styles.info}>Personajes residentes: {item.residents.length}</Text>
            </View>
        )
    }

    render() {

        let { data } = this.state

        return (
            <Container>
                {
                    this.state.loading ? <ActivityIndicator size="large" color='#ffe81f' /> : (
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.name}
                            renderItem={this.renderItem}
                        />
                    )
                }
                <Modal
                    onRequestClose={() => console.log('onrequest close called')}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                </Modal>
            </Container>
        );

    }

}

const styles = StyleSheet.create({
    pickerToggleContainer: {
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerToggle: {
        color: '#ffe81f'
    },
    pickerContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1, borderBottomColor: '#ffe81f'
    },
    name: {
        color: '#ffe81f',
        fontSize: 18
    },
    info: {
        color: '#ffe81f',
        fontSize: 14,
        marginTop: 5
    }
});