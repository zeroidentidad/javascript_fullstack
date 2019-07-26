import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const DEFAULT_AVATAR = '../img/avatar_anonimo.png';
const AVATAR_SIZE = 32

function Comments (props) {
    
    return (
        <View style={styles.comment}>
            {
                props.avatar ?
                    <Image style={styles.avatar} source={{ uri: props.avatar }} /> :
                    <Image style={styles.avatar} source={ require(DEFAULT_AVATAR) } />
            }
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    comment:{
        backgroundColor: '#ecf0f1',
        padding: 10,
        margin: 3,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
    },
    avatar: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
    }
})

export default Comments;