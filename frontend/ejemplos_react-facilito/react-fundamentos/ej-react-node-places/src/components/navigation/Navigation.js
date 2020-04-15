import React, { Component } from 'react'
import { connect } from "react-redux";
import { push } from "react-router-redux";
import MyAppBar from './MyAppBar';

class Navigation extends Component {
    constructor(props){
        super(props)
        this.goHome = this.goHome.bind(this)
    }

    goHome(){
        this.props.dispatch(push("/"))
    }

    render() {
        return <MyAppBar goHome={this.goHome}/>
    }
}

const mapStateToProps=(state, props) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Navigation)