import React, {Component} from 'react';
import './App.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MyAppBar from './components/navigation/MyAppBar';

const theme = createMuiTheme({})

class App extends Component{

  render(){
    return (
      <ThemeProvider theme={theme}>
        <MyAppBar/>
        {this.props.children}
      </ThemeProvider>
    );
  }

}

export default App;
