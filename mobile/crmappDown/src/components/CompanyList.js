import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class CompanyList extends Component {

  static navigationOptions = {
    tabBar: {
      label: 'Empresas',
      icon: ({ tintColor }) => (
        <Icon name={'business'} size={45} style={{ color: tintColor }} />
      )
    }
  } 

  render(){
    return(
      <View style={styles.container}>
        <Text>Empresas</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 10,
    backgroundColor: '#e5e5e5'
  },
  icon: {
    paddingBottom: 2,
  },
  bienvenida: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  }
});