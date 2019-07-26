import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import ArtistBox from '../componentes/artistbox';
import { getArtistas } from '../api/cliente';
import Icon from 'react-native-vector-icons/Entypo';
import { fbdb, fbauth } from '../config/firebase';

export default class Detalle extends Component {

    handleSend = () =>{
        const {text}=this.state
        const artistaCommnetsRef = this.getArtistaCommnetsRef()
        var newCommnetRef = artistaCommnetsRef.push();
        newCommnetRef.set({ text });        
    }

    getArtistaCommnetsRef = () => {
        const { id } = this.props.artista

        return fbdb.ref(`comentarios/${id}`);
    }

    handleChangeText= (text) => this.setState({text})

    render() {
        //console.disableYellowBox = false;
        const artista = this.props.artista

        return (
            <View style={styles.container}>
                <ArtistBox artista={artista} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Comentar..."
                    onChangeText={this.handleChangeText}
                    //value={this.state.text}
                    />
                    <TouchableOpacity onPress={this.handleSend}>
                        <Icon name="forward" size={30} color="lightgray" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 10
    },
    inputContainer: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 40,
        fontSize: 16,
        flex: 1
    }
});
