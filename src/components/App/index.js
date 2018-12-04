import React from "react";
import PropTypes from "prop-types";
import { withRouter, Switch, Route } from "react-router-dom";

// Components
import ContactPage from "../ContactPage";
import Footer from "../Footer";
import Main from "../Main";
import Navigation from "../Navigation";
import NotFound from "../NotFound";
import RentalCategories from "../RentalCategories";
import "./index.css";

const App = ({ location: { pathname } }) => {
  const isSubPage = Boolean(pathname !== "/");
  return (
    <div className="App" data-sub-page={isSubPage}>
      <Navigation isSubPage={isSubPage} />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/rentals" component={RentalCategories} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default withRouter(App);
