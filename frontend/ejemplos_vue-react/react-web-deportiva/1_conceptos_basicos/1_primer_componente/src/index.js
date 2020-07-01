import React from 'react';
import { render } from 'react-dom';

class HolaMundo extends React.Component {
    render() {
        return <p>Hola Mundo</p>
    }
}


render(<HolaMundo />, document.querySelector('#root'));