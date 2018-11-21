import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './styles/main.css';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
serviceWorker.unregister();
