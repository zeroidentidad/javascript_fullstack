import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.topSectionText}>
            4 N A M E S
          </Text>
        </View>
        <View style={styles.middleSection}>
          <Text style={styles.middleSectionText}>
            I P S U M
          </Text>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.bottomSectionText}>
            C O M
          </Text>
        </View>
      </View>);
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flexGrow: 3,
    backgroundColor: '#5BC2C1',
    alignItems: 'center',
  },
  middleSection: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flexGrow: 3,
    backgroundColor: '#FD909E',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  topSectionText: {
    fontWeight: 'bold',
    marginTop: 50
  },
  middleSectionText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  bottomSectionText: {
    fontWeight: 'bold',
    marginBottom: 30
  }
});