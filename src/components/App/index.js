import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import debounce from 'lodash/debounce';

// Components
import Footer from '../Footer';
import Navigation from '../Navigation';
import RentalCategories from '../RentalCategories';
import Main from '../Main';

import content from '../../content';
import './index.css';

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
    this.componentPositions = this.getComponentPositions();
    this.forceUpdate();
  }

  getComponentPositions = () => this.componentsList.map(name => {
    const element = document.getElementById(name);

    if (!element) return null;

    const offsetTop = element.offsetTop;
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
    const { location: { pathname } } = this.props;
    const isHomePage = Boolean(pathname === '/');
    return (
      <div className="App" data-home={isHomePage}>
        <Navigation activeSection={this.state.activeSection} data-navigation-home={isHomePage} />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/rentals" exact component={RentalCategories} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
};

export default withRouter(App);
