import React from 'react';
import Button from './components/Button'

const themes = {
  'dark':{
    backgroundColor: 'black',
    color: 'white'
  },
  'light': {
    backgroundColor: 'white',
    color: 'black'
  }  
}

export const ThemeContext = React.createContext()

function App() {
  return (
    <div>
      <ThemeContext.Provider value={themes}>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
