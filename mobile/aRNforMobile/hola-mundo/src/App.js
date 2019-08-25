import React from 'react';
import Message from './Message';
import Welcome from './Welcome';
import './App.css';

function App() {
  return (
    <div>
      <Welcome />
      <Message texto="Hello to React World" />
    </div>
  );
}

export default App;
