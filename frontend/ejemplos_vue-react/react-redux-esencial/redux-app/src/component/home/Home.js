import React from 'react';
import './Home.css';

import {connect} from 'react-redux';

const Home = () => {

    return (
        <div className="Home">
            <h1>Bienvenidos a mi aplicación</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(
    mapStateToProps,
    {  }
)(Home);
