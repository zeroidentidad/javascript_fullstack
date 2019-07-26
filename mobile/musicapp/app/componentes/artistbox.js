import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { fbdb, fbauth } from '../config/firebase';

export default class ArtistBox extends Component {

    state = {
        liked: false,
        likeCount: 0,
        commentCount: 0
    }

    componentWillMount(){
        const {uid} = fbauth.currentUser;
        this.getArtistaRef().on('value', snapshot =>{
            const artista = snapshot.val()
            if (artista){
                this.setState({
                    likeCount: artista.likeCount,
                    liked: artista.likes && artista.likes[uid]
                })
            }
        })

        // para los comentarios
        this.getArtistaCommentsCountRef().on('value', snapshot => {
            const totalComments = snapshot.val()
            if (totalComments) {
                this.setState({
                    commentCount: totalComments.commentCount
                })
            }
        })       

    }

    handlePress = () =>{
        //this.setState({liked: !this.state.liked}) //set local

        this.toggleLike(!this.state.liked)
    }

    getArtistaRef= () =>{
        const { id } = this.props.artista

        return fbdb.ref(`artista/${id}`);      
    }

    getArtistaCommentsCountRef = () => {
        const { id } = this.props.artista
        return fbdb.ref(`artistaCommentsCount/${id}`)
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

        const {likeCount} = this.state
        const {commentCount} = this.state

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
                            <Text style={styles.count}>{likeCount}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="new-message" size={30} color="lightgray" />
                            <Text style={styles.count}>{commentCount}</Text>
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
        color: 'gray',
        fontSize: 20
    }
});