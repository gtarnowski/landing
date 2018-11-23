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
import get from "lodash/get";

class App extends Component {
  constructor() {
    super();
    this.componentsList = content.menuItems.map(({ url }) => url);
    this.scrollOffset = 150;
    this.state = {
      activeSection: 'home',
    };
  }

  componentWillReceiveProps ({ location: { state } }) {
    if (state) {
      this.onScrollToElement(null, state.url, 'auto')
    }
  }

  componentWillMount() {
    window.addEventListener('scroll', this.scrollEvent);
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
    if (!Boolean(this.props.location.pathname === '/')) return null
    const scrollPosition = (parseInt(window.pageYOffset, 10) + this.scrollOffset);
    this.getComponentPositions().forEach(({ start, end, name }) => {
      if (this.isBetween(scrollPosition, start, end)) {
        if (this.state.activeSection !== name) {
          this.setState({ activeSection: name });
        }
      }
    });
  }, 10);

  onScrollToElement = (e, url, behavior = 'smooth') => {
      e && e.preventDefault();
      const offsetTop = get(document.getElementById(url), 'offsetTop');
      console.log(offsetTop)
      if ((offsetTop === undefined || offsetTop === null) || !url) {
          this.props.history.push({ pathname: '/', state: { url } })
      }

      return window.scroll({
          behavior,
          left: 0,
          top: ((offsetTop - 55) || 0),
      });
  }

  render() {
    console.log(this.props)
    const { location: { pathname } } = this.props;
    const isSubPage = Boolean(pathname !== '/');
    return (
      <div className="App" data-sub-page={isSubPage}>
        <Navigation activeSection={this.state.activeSection} isSubPage={isSubPage} onScrollToElement={this.onScrollToElement}/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/rentals" component={RentalCategories} />
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
