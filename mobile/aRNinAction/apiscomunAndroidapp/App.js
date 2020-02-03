import React from 'react';
import {
  DrawerLayoutAndroid,
  Button,
  View
} from 'react-native'

import Menu from './src/Menu'
import Main from './src/Main'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      scene: 'Home'
    }
    this.jump = this.jump.bind(this)
    this.openDrawer = this.openDrawer.bind(this)
  }

  openDrawer() {
    this.drawer.openDrawer()
  }

  jump(scene) {
    this.setState({
      scene
    })
    this.drawer.closeDrawer()
  }

  render() {
    console.disableYellowBox = true;
    return (
      <DrawerLayoutAndroid
        ref={drawer => this.drawer = drawer}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu onPress={this.jump} />}>
        <View style={{ margin: 15 }}>
          <Button onPress={() => this.openDrawer()} title='Abrir Drawer' />
        </View>
        <Main
          openDrawer={this.openDrawer}
          jump={this.jump}
          scene={this.state.scene} />
      </DrawerLayoutAndroid>       
    )
  }

};

export default App;
