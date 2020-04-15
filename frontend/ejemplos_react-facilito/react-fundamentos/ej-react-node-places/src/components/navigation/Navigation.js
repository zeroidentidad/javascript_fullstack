import React, { Component } from 'react'
import { connect } from "react-redux";
import { push } from "react-router-redux";
import MyAppBar from './MyAppBar';
import { logout } from "../../redux/actions/userActions";

class Navigation extends Component {
    constructor(props){
        super(props)
        this.goHome = this.goHome.bind(this)
        this.logout = this.logout.bind(this)
        this.login = this.login.bind(this)
    }

    goHome(){
        this.props.dispatch(push("/"))
    }

    logout(){
        this.props.dispatch(logout())
        this.props.dispatch(push("/"))
    }

    login(){
        this.props.dispatch(push("/login"))
    }

    render() {
        return <MyAppBar goHome={this.goHome} logout={this.logout} login={this.login} user={this.props.user}/>
    }
}

const mapStateToProps=(state, props) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Navigation)