import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import HolaMundo from './components/HolaMundo';


render(<HolaMundo nombre="Sergio" edad="35" />, document.querySelector('#root'));

registerServiceWorker();