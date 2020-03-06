import React from 'react';
import Main from './src/Main';
import { Provider } from 'mobx-react/native';
import { chats, users } from './src/stores';

const App: () => React$Node = () => {
  console.disableYellowBox = true;
  return (   
  <Provider users={users} chats={chats}>
    <Main />
  </Provider> 
  );
};

export default App;

// https://github.com/evollu/react-native-fcm/issues/1111