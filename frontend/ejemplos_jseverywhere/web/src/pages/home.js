import React from 'react';
// import Link component de react-router
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <h1>Notasocial</h1>
            <Header />
            <Navigation />
        </div>
    );
};

export default Home;