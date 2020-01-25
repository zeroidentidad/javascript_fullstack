import React from 'react';
import AlertExample from './src/AlertExample'
import AppStateExample from './src/AppStateExample'
import AsyncStorageExample from './src/AsyncStorageExample'
import ClipboardExample from './src/ClipboardExample'
import DimensionsExample from './src/DimensionsExample'
import GeolocationExample from './src/GeolocationExample'
import KeyboardExample from './src/KeyboardExample'
import NetInfoExample from './src/NetInfoExample'


const App: () => React$Node = () => {
  return (
    <NetInfoExample />
  );
};


export default App;