import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Letreiro from './Letreiro.js';
import Relogio from './Relogio.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Relogio/>
    <Letreiro/>
  </React.StrictMode>
);
document.createElement('div').setAttribute('id', 'relogio');


