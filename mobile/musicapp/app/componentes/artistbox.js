import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default class ArtistBox extends Component {
    render() {

        const {image, name, likes, comentarios} = this.props.artista;

        return (
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{ uri: image }}></Image>
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon name="heart" size={30} color="lightgray" />
                            <Text style={styles.count}>{likes}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="comment" size={30} color="lightgray" />
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