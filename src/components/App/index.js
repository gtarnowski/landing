import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Footer from '../Footer';
import Navigation from '../Navigation';

import './index.css';
import Main from '../Main';

const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
