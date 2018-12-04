import React, { Fragment } from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Rentals from './Rentals';
import Contact from './Contact';
import Map from './Map';

const Main = () => (
  <Fragment>
    <Header />
    <AboutUs />
    <Rentals />
    <Contact />
    <Map />
  </Fragment>
);

export default Main;
