import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { fbdb, fbauth } from '../config/firebase';

export default class ArtistBox extends Component {

    state = {
        liked: false
    }

    handlePress = () =>{
        this.setState({liked: !this.state.liked})

        this.toggleLike(!this.state.liked)
    }

    getArtistaRef= () =>{
        const { id } = this.props.artista

        return fbdb.ref(`artista/${id}`);      
    }

    toggleLike = (liked) =>{
        const {uid} = fbauth.currentUser;
        this.getArtistaRef().transaction(function (artista) {
                if (artista) {
                    if (artista.likes && artista.likes[uid]) {
                        artista.likeCount--;
                        artista.likes[uid] = null;
                    } else {
                        artista.likeCount++;
                        if (!artista.likes) {
                            artista.likes = {};
                        }
                        artista.likes[uid] = true;
                    }
                }
            return artista || {
                    likeCount: 1,
                    likes:{
                        [uid]: true
                    }
                };
            });
    }

    render() {

        const {image, name, likes, comentarios} = this.props.artista;

        const likeIcon = this.state.liked ? <Icon name="star" size={30} color="orange" /> : <Icon name="star-outlined" size={30} color="lightgray" />

        return (
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{ uri: image }}></Image>
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={this.handlePress}>
                                {likeIcon}
                            </TouchableOpacity>
                            <Text style={styles.count}>{likes}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="new-message" size={30} color="lightgray" />
                            <Text style={styles.count}>{comentarios}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    },
    artistBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 5,
        elevation: 4
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 30,
        marginTop: 10,
        color: '#333'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35,
        marginTop: 10
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center'
    },
    count: {
        color: 'gray'
    }
});