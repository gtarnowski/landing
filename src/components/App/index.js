import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter, Switch, Route} from 'react-router-dom';

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
        this.componentsList = content.menuItems.map(({url}) => url);
        this.scrollOffset = 350;
        this.pathList = [
            '/',
            '/about',
            '/contact',
            '/home'
        ];
        this.state = {
            activeSection: 'home',
        };
    }

    componentWillMount() {
        window.addEventListener('scroll', this.scrollEvent);
        return this.setState({activeSection: this.props.location.pathname});
    }

    componentDidUpdate({ location: { pathname: oldPathName }}) {
        const { location: { pathname } } = this.props;
        if (this.pathList.includes(pathname) && pathname !== oldPathName) {
            const offsetTop = get(document.getElementById(pathname), 'offsetTop');
            if (offsetTop !== undefined || offsetTop !== null) {
                window.scroll({
                    behavior: 'auto',
                    left: 0,
                    top: ((offsetTop - 55) || 0),
                })
            }
        }
    }


    getComponentPositions = () => this.componentsList.map(name => {
        const element = document.getElementById(name);
        if (!element) return false;

        const offsetTop = element.offsetTop;
        return {
            name,
            start: Number(offsetTop),
            end: Number(document.getElementById(name).offsetHeight + (offsetTop - 1)),
        };
    });

    isBetween = (compareNumber, start, end) =>
        Boolean((compareNumber - start) * (compareNumber - end) <= 0);

    scrollEvent = () => {
        const scrollPosition = (parseInt(window.pageYOffset, 10) + this.scrollOffset);
        const itemPositions = this.getComponentPositions();

        if (!itemPositions) return;
        itemPositions.forEach(({start, end, name}) => {
            if (this.isBetween(scrollPosition, start, end)) {
                if (this.state.activeSection !== name) {
                    this.setState({activeSection: name});
                }
            }
        });
    };

    onScrollToElement = (e, url, behavior = 'smooth') => {
        e && e.preventDefault();
        const offsetTop = get(document.getElementById(url), 'offsetTop');
        return window.scroll({
            behavior,
            left: 0,
            top: ((offsetTop - 55) || 0),
        });
    };

    render() {
        const {location: {pathname}} = this.props;
        const isSubPage = Boolean(pathname.match('rentals'));
        return (
            <div className="App" data-sub-page={isSubPage}>
                <Navigation
                    activeSection={this.state.activeSection}
                    isSubPage={isSubPage}
                    onScrollToElement={this.onScrollToElement}
                />
                <Switch>
                    <Route path={this.pathList} exact component={Main}/>
                    <Route path="/rentals" component={RentalCategories}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    location: PropTypes.object,
};

export default withRouter(App);
