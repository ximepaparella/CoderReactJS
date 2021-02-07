import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './static/css/abstracts/_mixins.scss'
import './static/css/abstracts/_helpers.scss'
import './static/css/abstracts/_variables.scss'
import './static/css/base/_reset.scss'
import './static/css/base/_icon-font.scss'
import './static/css/layout/_grid.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
