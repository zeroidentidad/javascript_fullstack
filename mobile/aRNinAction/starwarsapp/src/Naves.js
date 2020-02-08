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
import Filmworld from './Filmworld'

export default class Naves extends Component {

    static navigationOptions = {
        headerTitle: 'Naves 🚀',
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
        fetch('https://swapi.co/api/starships/')
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
                <Text style={styles.info}>Modelo: {item.model}</Text>
                <Text style={styles.info}>Clase: {item.starship_class}</Text>
                <Text style={styles.info}>Fabricante: {item.manufacturer}</Text>
                <Text style={styles.info}>Costo en créditos: {item.cost_in_credits}</Text>
                <Text style={styles.info}>Pasajeros: {item.passengers}</Text>
                <Text style={styles.info}>Longitud: {item.length} m.</Text>
                <Text style={styles.info}>Consumibles: {item.consumables}</Text>
                <Text style={styles.info}>Megaluz / hora: {item.MGLT}</Text>
                <Text style={styles.info}>Hipervelocidad: {item.hyperdrive_rating}</Text>
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
                    <Filmworld closeModal={this.closeModal} url={this.state.url} />
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