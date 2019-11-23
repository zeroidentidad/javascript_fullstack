import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FadeInView from './FadeInView';

export default ListadoItem = (props) => {

    return (
    <FadeInView style={styles.row} >
       <Image
            source={require('../assets/user.png')}
            style={styles.thumbnail} />
        <View style={styles.rightBox}>
            <Text style={styles.username}>{props.username}</Text>
            <Text style={styles.password}>{props.password}</Text>
        </View>       
    </FadeInView>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    thumbnail: {
        width: 60,
        height: 80,
    },
    rightBox: {
        flex: 1,
    },
    username: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    password: {
        fontSize: 16,
        textAlign: 'center',
    }
});   