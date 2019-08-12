import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class CompanyList extends Component {

  static navigationOptions = {
    tabBarVisible: true,
    tabBarLabel: 'Empresas',
    tabBarIcon: ({tintColor}) => (
    <Icon name={'isv'} size={45} style={{color:tintColor}} />
    )
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
});