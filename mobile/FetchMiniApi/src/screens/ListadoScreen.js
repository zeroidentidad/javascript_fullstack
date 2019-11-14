import React, {Component} from 'react';
import { FlatList, Text } from 'react-native';
import ListadoItem from '../components/ListadoItem';
import Empty from '../utils/Empty';

export default class ListadoScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Listado',
      tabBarAccessibilityLabel: 'Listado'
    }
  }   

  state = {
    dataSource: null
  }
 
  componentDidMount() {
    return fetch("http://192.168.0.103:8080/miniApi/API/biblioteca/libros/lista")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={this.state.dataSource}
        renderItem={({ item }) => <ListadoItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={Empty}
      />
    );
  }
}