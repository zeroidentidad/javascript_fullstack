import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { WebView } from "react-native-webview";

const App: () => React$Node = () => {
  return (
        <WebView
          style={{ marginTop: 10 }}
          source={{ uri: "https://es.wikipedia.org" }}
        />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
