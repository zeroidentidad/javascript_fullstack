import React, {Component} from 'react';
import './App.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({})

class App extends Component{

  render(){
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }

}

export default App;
