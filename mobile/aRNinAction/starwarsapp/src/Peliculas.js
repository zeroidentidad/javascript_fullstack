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

export default class People extends Component {

    static navigationOptions = {
        headerTitle: 'Peliculas',
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
        gender: 'all',
        pickerVisible: false
    }

    componentDidMount() {
        fetch('https://swapi.co/api/films/')
            .then(res => res.json())
            .then(json => this.setState({ data: json.results, loading: false }))
            .catch((err) => console.log('err:', err))
    }

    openFilmworld = (url) => {
        this.setState({
            url,
            modalVisible: true
        })
    }

    closeModal = () => {
        this.setState({ modalVisible: false })
    }

    togglePicker = () => {
        this.setState({ pickerVisible: !this.state.pickerVisible })
    }

    filter = (gender) => {
        this.setState({ gender })
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.info}>Director: {item.director}</Text>
                <Text style={styles.info}>Productor: {item.producer}</Text>
                <Text style={styles.info}>Lanzamiento: {item.release_date}</Text>
                <Text style={styles.info}>Num. Episodio: {item.episode_id}</Text>
                <TouchableHighlight style={styles.button} onPress={() => this.openFilmworld(item.url)}>
                    <Text style={styles.info}>Ver detalles</Text>
                </TouchableHighlight>
            </View>
        )
    }

    render() {

        let { data } = this.state
        if (this.state.gender !== 'all') {
            data = data.filter(f => f.gender === this.state.gender)
        }

        return (
            <Container>
                <TouchableHighlight style={styles.pickerToggleContainer} onPress={this.togglePicker}>
                    <Text style={styles.pickerToggle}>{this.state.pickerVisible ? 'Cerrar filtro' : 'Abrir filtro'}</Text>
                </TouchableHighlight>
                {
                    this.state.loading ? <ActivityIndicator size="large" color='#ffe81f' /> : (
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.title}
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
                {
                    this.state.pickerVisible && (
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={{ backgroundColor: '#ffe81f' }}
                                selectedValue={this.state.gender}
                                onValueChange={(item) => this.filter(item)}>

                                <Picker.Item itemStyle={{ color: 'yellow' }} label="Todos" value="all" />
                                <Picker.Item label="Hombres" value="male" />
                                <Picker.Item label="Mujeres" value="female" />
                                <Picker.Item label="Otros" value="n/a" />
                            </Picker>
                        </View>
                    )
                }
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