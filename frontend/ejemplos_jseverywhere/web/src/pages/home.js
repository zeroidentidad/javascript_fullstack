import React from 'react';
// import Link component de react-router
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Button>Click me!</Button>
        </div>
    );
};

export default Home;