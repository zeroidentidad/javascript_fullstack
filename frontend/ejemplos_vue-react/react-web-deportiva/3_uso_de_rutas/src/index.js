import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Material
import Reboot from 'material-ui/Reboot';

// Estilos
import './index.css';

// Componentes
import Header from './components/common/header/Header';
import Router from "./Router";


// The CODE!
const Root = () => {
    return (
        <div>
            <Reboot />
            <Header />
            <div className="contenedor">
                <Router />
            </div>
        </div>
    )
}



render(<Root />, document.querySelector('#root'));

registerServiceWorker();