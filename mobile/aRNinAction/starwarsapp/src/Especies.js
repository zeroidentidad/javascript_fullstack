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
import SpecieWorld from './Specieworld'

export default class Especies extends Component {

    static navigationOptions = {
        headerTitle: 'Especies 🔍',
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
        classification: 'all',
        pickerVisible: false
    }

    componentDidMount() {
        fetch('https://swapi.co/api/species/')
            .then(res => res.json())
            .then(json => this.setState({ data: json.results, loading: false }))
            .catch((err) => console.log('err:', err))
    }

    openSpecieWorld = (url) => {
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

    filter = (classification) => {
        this.setState({ classification })
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.info}>Lenguaje: {item.language}</Text>                
                <Text style={styles.info}>Clasificación: {item.classification}</Text>                
                <Text style={styles.info}>Designacion: {item.designation}</Text>
                <Text style={styles.info}>Altura promedio: {item.average_height+" cm"}</Text>
                <Text style={styles.info}>Colores piel: {item.skin_colors}</Text>
                <Text style={styles.info}>Colores ojos: {item.eye_colors}</Text>
                <Text style={styles.info}>Esperanza vida: {item.average_lifespan+" años"}</Text>
                <TouchableHighlight style={styles.button} onPress={() => this.openSpecieWorld(item.people[0])}>
                    <Text style={styles.info}>Ver representante</Text>
                </TouchableHighlight>
            </View>
        )
    }

    render() {

        let { data } = this.state
        if (this.state.classification !== 'all') {
            data = data.filter(f => f.classification === this.state.classification)
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
                    <SpecieWorld closeModal={this.closeModal} url={this.state.url} />
                </Modal>
                {
                    this.state.pickerVisible && (
                        <View style={styles.pickerContainer}>
                            <Picker
                                style={{ backgroundColor: '#ffe81f' }}
                                selectedValue={this.state.classification}
                                onValueChange={(item) => this.filter(item)}>

                                <Picker.Item itemStyle={{ color: 'yellow' }} label="Todos" value="all" />
                                <Picker.Item label="Mamifero" value="mammal" />
                                <Picker.Item label="Reptil" value="reptile" />
                                <Picker.Item label="Anfibio" value="amphibian" />
                                <Picker.Item label="Gastrópodo" value="gastropod" />
                                <Picker.Item label="Otros" value="unknown" />
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