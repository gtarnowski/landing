import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Switch, Route } from "react-router-dom";

// Components
import Footer from "../Footer";
import Navigation from "../Navigation";
import RentalCategories from "../RentalCategories";
import Main from "../Main";

import content from "../../content";
import "./index.css";
import get from "lodash/get";
import NotFound from '../NotFound';
import ContactPage from '../ContactPage'

class App extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;
    const isSubPage = Boolean(pathname !== "/");
    return (
      <div className="App" data-sub-page={isSubPage}>
        <Navigation isSubPage={isSubPage} />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/rentals" component={RentalCategories} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object
};

export default withRouter(App);
