import React, {useEffect} from 'react';
import './Botonera.css';

import  {nav_click} from '../../redux/actions/navActions';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import Home from "../home/Home";
import List from "../list/List";
import Form from "../form/Form";

const Botonera = ( {title, nav_click, match: {params}}) => {

    const buttonClick = (_title) => {
        nav_click({
            title: _title,
        });
    }

    useEffect(() => {
        let title = '';
        switch (params.section) {
            case 'home':
                title = 'Home';
                break;
            case 'list':
                title = 'List';
                break;
            case 'new':
                title = 'New';
                break;
            default:
                title = '';
        }
        nav_click({
            title: title,
        });
    }, [])

    const renderSection = () => {
        switch (params.section) {
            case 'home':
                return <Home/>;
            case 'list':
                return <List/>;
            case 'new':
                return <Form/>;
            default:
                return <Home/>;
        }
    }

    return (
        <div className="Botonera">
            <header className="App-header">
                <div>
                    <h1>{title}</h1>
                </div>
                <Link to='home' onClick={() => buttonClick('Home')}>Home</Link>
                <Link to='list' onClick={() => buttonClick('List')}>List</Link>
                <Link to='new' onClick={() => buttonClick('New')}>Form</Link>
            </header>

            {renderSection()}
        </div>
);
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.navState.title,
        section: ownProps.section,
    }
}

export default connect(
    mapStateToProps,
    { nav_click }
)(Botonera);
