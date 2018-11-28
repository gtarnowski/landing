import React, { Fragment, Component } from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Rentals from './Rentals';
import Contact from './Contact';
import Map from './Map';
import content from '../content/index';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <AboutUs />
        <Rentals />
        <Contact />
        <Map />
      </Fragment>
    );
  }
}

export default Main;
