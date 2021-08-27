import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const appRoot = document.getElementById('root');
// const modalRoot = document.getElementById('modal-root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appRoot
);
