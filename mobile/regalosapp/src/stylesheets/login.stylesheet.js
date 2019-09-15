import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formControl: {
        width: '90%',
        marginTop: 20,
    },
    botones: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    touchables: {
        margin: 0
    },
    fabHome: {
        backgroundColor: '#b3002d', //primary -> ./App.js
        position: 'absolute',
        margin: 6,
        right: 0,
        bottom: 0
    },
    card: {
        margin: 10
    }
});