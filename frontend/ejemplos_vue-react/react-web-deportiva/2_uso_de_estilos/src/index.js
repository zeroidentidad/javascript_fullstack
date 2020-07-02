import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import HolaMundo from './components/hola-mundo/HolaMundo';


render(<HolaMundo nombre="Sergio" edad="35" tipo="descripcion" />, document.querySelector('#root'));

registerServiceWorker();