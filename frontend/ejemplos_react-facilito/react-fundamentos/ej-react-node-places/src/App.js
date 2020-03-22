import React, {Component} from 'react';
import './App.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './pages/Home'

const theme = createMuiTheme({})

class App extends Component{

  render(){
    return (
      <ThemeProvider theme={theme}>
          <Home />         
      </ThemeProvider>
    );
  }

}

export default App;
