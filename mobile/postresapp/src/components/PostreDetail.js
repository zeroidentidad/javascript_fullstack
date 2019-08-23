import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import ajax from '../ajax';

export default class PostreDetail extends Component {

    static propTypes = {
      initialPostreData: PropTypes.object.isRequired,
      onBack: PropTypes.func.isRequired
    };    

    state = {
      postre: this.props.initialPostreData
    };
    
    async componentDidMount(){
      const str_ingredients = this.state.postre.ingredients
      const res_ingredients = str_ingredients.replace(/, /g, "%2C");
      const res_ingredients2 = res_ingredients.replace(/, /g, "%20");

      const str_title = this.state.postre.title
      const res_title = str_title.replace(/ /g, "%20");      

      const fullPostre = await ajax.fetchPostreDetail('i='+res_ingredients2+'&q='+res_title);
      console.log(fullPostre[0])
      this.setState({
        postre: fullPostre[0]
      });
    }

    render() {

        const { postre } = this.state;

        return (
            <View style={styles.postre} >
            <TouchableOpacity onPress={this.props.onBack}>
              <Text style={styles.backLink}>Regresar</Text>
            </TouchableOpacity>
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
  marginTop: 30
  },    
image: {
  width: '100%',
  height: 150,
  backgroundColor: '#ccc'
  },
info: {
  alignItems: 'center',
  borderColor: '#bbb',
  borderWidth: 1  
  },
title: {
  fontSize: 26,
  fontWeight: 'bold',
  backgroundColor: 'rgba(237, 149, 45, 0.4)',
  marginTop: 15
  },
footer: {
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: 15,
  },
ingredients: {
  fontSize: 20,
  padding: 10,
  },
link: {
  color: 'blue',
  fontSize: 18,
  padding: 10,  
  },
backLink: {
  marginBottom: 5,
  color: 'darkgreen',
  fontSize: 20,
  fontStyle: 'italic',
  textAlign: 'right'
}     
})