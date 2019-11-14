import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FadeInView from './FadeInView';

export default ListadoItem = (props) => {

    return (
    <FadeInView style={styles.row} >
       <Image
            source={require('../assets/book.png')}
            style={styles.thumbnail} />
        <View style={styles.rightBox}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <Text style={styles.autor}>{props.autor}</Text>
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
        width: 53,
        height: 81,
    },
    rightBox: {
        flex: 1,
    },
    titulo: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    autor: {
        fontSize: 16,
        textAlign: 'center',
    }
});   