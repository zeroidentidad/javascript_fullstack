import React from 'react';
import { View, Text } from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Kepedo</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    padding: 4,
    textAlign: 'center',
  },
});

export default App;
