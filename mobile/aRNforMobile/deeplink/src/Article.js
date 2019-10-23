import React from 'react';
import { Text, View } from 'react-native';
class Article extends React.Component {
  static navigationOptions = {
    title: 'Articulo',
  };
  render() {
    const { id } = this.props.navigation.state.params;
    return (
    <View style={{flex: 1}}>
    <Text style={{ fontSize: 26, color: 'black', paddingTop: 50, textAlign: 'center' }}>
        Estas en Articulo:
    </Text>
    <Text style={{ fontSize: 28, color: 'red', paddingTop: 10, textAlign: 'center' }}>
        {id}
    </Text>
    </View>
    )
  }
}
export default Article;