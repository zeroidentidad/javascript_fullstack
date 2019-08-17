import React from 'react';
import Message from './Message';
import StatelessComponent from './StatelessComponent';
import './App.css';

function App() {
  return (
    <div>
      <Message texto="Hello to React World" />
      <StatelessComponent />
    </div>
  );
}

export default App;
