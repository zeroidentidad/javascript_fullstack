import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import PropTypes from 'prop-types';

export default class PostreItem extends Component {

    static propTypes = {
        postre: PropTypes.object.isRequired,
    };    

    render() {

        const { postre } = this.props;

        return (
            <View style={styles.postre} >
                <Image source={{ uri: postre.thumbnail }} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.title}>{postre.title} </Text>
                    <View style={styles.footer}>
                        <Text style={styles.ingredients}>Ingredientes: {postre.ingredients} </Text>
                        <Text style={styles.link}>Fuente: {postre.href} </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
postre: {
    marginHorizontal: 12,
    marginTop: 12,
  },    
image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
    resizeMode: 'cover'
  },
info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
footer: {
    flexDirection: 'column',
  },
ingredients: {
    flex: 1,
    fontSize: 20
  },
link: {
    flex: 1,
    textAlign: 'left',
    color: 'blue',
    fontSize: 18
  }    
})