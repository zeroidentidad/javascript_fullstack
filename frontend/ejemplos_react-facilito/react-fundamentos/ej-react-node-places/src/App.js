import React, {Component} from 'react';
import './App.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'
import Navigation from './components/navigation/Navigation';
import {withRouter} from 'react-router-dom';

const theme = createMuiTheme({})

class App extends Component{

  constructor(props){
    super(props)
  }

  render(){

    return (
      <ThemeProvider theme={theme}>
        <Navigation />
        <TransitionGroup>
          <CSSTransition classNames="left-out" timeout={400} key={this.props.location.pathname.split('/')[1]}>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </ThemeProvider>
    );
  }

}

export default withRouter(App);
