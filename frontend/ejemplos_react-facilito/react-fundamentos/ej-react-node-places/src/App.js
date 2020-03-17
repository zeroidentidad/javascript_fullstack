import React, {Component} from 'react';
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home'

class App extends Component{

  render(){
    return (
      <ThemeProvider>
          <Home />         
      </ThemeProvider>
    );
  }

}

export default App;
