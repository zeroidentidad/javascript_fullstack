import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function Comments (props) {
    return (
    <View style={styles.comment}>
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
    }
})

export default Comments;