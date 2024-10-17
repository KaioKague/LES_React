import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
  </>
);