import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MemoryRouter } from 'react-router-dom';
import Vitamin from './components/Vitamin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Vitamin renders successfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/vitamin']}>
      <Vitamin />
    </MemoryRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});