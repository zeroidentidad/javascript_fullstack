import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import ArtistBox from '../componentes/artistbox';
import CommentList from '../componentes/commentlist';
import { getArtistas } from '../api/cliente';
import Icon from 'react-native-vector-icons/Entypo';
import { fbdb, fbauth } from '../config/firebase';

export default class Detalle extends Component {

    state = {
        comentarios: []
    }

    componentDidMount() {
        this.getArtistaCommnetsRef().on('child_added', this.addComment);        
    }

    componentWillUnmount() {
        this.getArtistaCommnetsRef().off('child_added', this.addComment);  
    }

    addComment = (data) => {
        const comentario = data.val()
        this.setState({
            comentarios: this.state.comentarios.concat(comentario)
        })
    } 

    handleSend = () =>{
        const {text}=this.state
        const { photoURL } = fbauth.currentUser;
        const artistaCommnetsRef = this.getArtistaCommnetsRef()

        const commentsCountRef = this.getArtistaCommentsCountRef()

        var newCommnetRef = artistaCommnetsRef.push();
        newCommnetRef.set({ text, userPhoto: photoURL });
        this.setState({ text: '' })
        
        commentsCountRef.transaction(function (totalComments) {
            if (totalComments) {
                totalComments.commentCount++
            }
            return totalComments || {
                commentCount: 1
            }
        });        
    }

    getArtistaCommnetsRef = () => {
        const { id } = this.props.artista

        return fbdb.ref(`comentarios/${id}`);
    }

    getArtistaCommentsCountRef = () => {
        const { id } = this.props.artista
        return fbdb.ref(`artistaCommentsCount/${id}`)
    }   

    handleChangeText= (text) => this.setState({text})

    render() {
        //console.disableYellowBox = false;
        const artista = this.props.artista
        const {comentarios} = this.state

        return (
            <View style={styles.container}>
                <ArtistBox artista={artista} />
                <Text style={styles.hcomentario}>Comentarios:</Text>
                <CommentList comentarios={comentarios}/>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Comentar..."
                    onChangeText={this.handleChangeText}
                    value={this.state.text}
                    />
                    <TouchableOpacity onPress={this.handleSend}>
                        <Icon name="forward" size={30} color="darkgray" />
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
    },
    hcomentario:{
        fontSize: 18,
        paddingHorizontal: 10,
        marginVertical: 10
    }
});
