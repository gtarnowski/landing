import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Footer from '../Footer';
import Navigation from '../Navigation';

import './index.css';
import Main from '../Main';
import content from '../../content';
import debounce from 'lodash/debounce';

class App extends Component {
  constructor() {
    super();
    this.componentsList = content.menuItems.map(({ url }) => url);
    this.componentPositions = null;
    this.scrollOffset = 150;
    this.state = {
      activeSection: 'home',
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', this.scrollEvent);

  }

  componentDidMount() {
    this.componentPositions = this.getComponentPositions()
    this.forceUpdate();
  }

  getComponentPositions = () => this.componentsList.map(name => {
    const offsetTop = document.getElementById(name).offsetTop;
    return {
      name,
      start: Number(offsetTop),
      end: Number(document.getElementById(name).offsetHeight + (offsetTop - 1)),
    };
  });

  isBetween = (compareNumber, start, end) =>
    Boolean((compareNumber - start) * (compareNumber - end) <= 0);

  scrollEvent = debounce(() => {
    const scrollPosition = parseInt(window.pageYOffset, 10) + this.scrollOffset;
    this.getComponentPositions().forEach(({ start, end, name }) => {
      if (this.isBetween(scrollPosition, start, end)) {
        if (this.state.activeSection !== name) {
          this.setState({ activeSection: name });
        }
      }
    });
  }, 10);

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation activeSection={this.state.activeSection} />
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
