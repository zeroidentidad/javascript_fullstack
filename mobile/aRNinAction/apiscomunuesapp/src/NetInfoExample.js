import React, { Component }  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

class NetInfoExample extends Component {

  constructor () {
    super()
    this.state = {
      connectionInfo: {}
    }
    this.handleConnectivityChange = this.handleConnectivityChange.bind(this)
  }

  componentDidMount () {

  NetInfo.fetch().then(connectionInfo => {
      console.log("Connection type:", connectionInfo.type);
      console.log("Is connected:", connectionInfo.isConnected);
      this.setState({connectionInfo})
  });
      
  NetInfo.addEventListener(this.handleConnectivityChange)
  }

  handleConnectivityChange (connectionInfo) {
    NetInfo.addEventListener(connectionInfo => {
    console.log('new connection:', connectionInfo)
    this.setState({connectionInfo})
    })
  } 

  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.connectionInfo.type}</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NetInfoExample