import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from
'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { storedText: '', inputBoxText: '' }
  }

  async componentDidMount() {
    this.setState({ storedText: await this.retrieveData() });
  }

  onPressSave = async () => {
    try {
      await AsyncStorage.setItem('@AsyncStorageExample:someKey', this.state.inputBoxText);
      this.setState({ storedText: this.state.inputBoxText })
    } catch (error) {
      console.log("Error in saving data");
    }
  }

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@AsyncStorageExample:someKey');
      return value;
    } catch (error) {
      console.log("Error in Fetching Data")
    }
  }
  render() {

    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <TextInput
        style = { styles.textField }
        placeholder = "Escribe algo!"
        onChangeText = {(text) => this.setState({ inputBoxText: text })}
        />
        <Button
        onPress = { this.onPressSave }
        title = "Guadar"
        color = "blue"
        accessibilityLabel = "Click para guardar"
        />
        <Text style={styles.header}>Local Storage:</Text>
        <Text style={styles.text}>{this.state.storedText}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Georgia',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 40,
  },
  text: {
    fontFamily: 'Georgia',
    fontSize: 18,
    fontStyle: 'italic',
    paddingTop: 10,
  },
  textField: {
    height: 40,
    width: 300,
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
  }
});