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
    return fetch("http://192.168.0.104:8080/api/v1/users/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.data,
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