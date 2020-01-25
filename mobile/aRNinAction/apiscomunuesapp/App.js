import React from 'react';
import AlertExample from './src/AlertExample'
import AppStateExample from './src/AppStateExample'
import AsyncStorageExample from './src/AsyncStorageExample'
import ClipboardExample from './src/ClipboardExample'
import DimensionsExample from './src/DimensionsExample'
import GeolocationExample from './src/GeolocationExample'


const App: () => React$Node = () => {
  return (
    <GeolocationExample />
  );
};


export default App;