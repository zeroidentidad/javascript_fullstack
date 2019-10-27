import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Alert } from 'react-native';
import HouseItem from '../components/HouseItem';
export default class AddNewProperty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: ""
        }
    }
    
    onPressButtonPOST() {
        fetch('https://www.akshatpaul.com/properties', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                property: {
                    name: this.state.name,
                    address: this.state.address,
                }
            }),
        })
        .then((responseData) => {
                Alert.alert(
                    'Correcto:',
                    'Entrada creada',
                )
        })
        .done();
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textBox} placeholder='Nombre...'
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name} />
                <TextInput style={styles.textBox} placeholder='Dirección...'
                    onChangeText={(address) => this.setState({ address })}
                    value={this.state.address} />
                <TouchableHighlight style={styles.button}
                    onPress={this.onPressButtonPOST.bind(this)}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Agregar propiedad</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textBox: {
        width: 300,
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 10,
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'stretch',
        justifyContent: 'center',
        margin: 10
    },    
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    }
});
