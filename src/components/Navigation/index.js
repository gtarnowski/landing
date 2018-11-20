import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ToggleMenu from '../ToggleMenu';
import BottomArrow from '../BottomArrow';

import content from '../../content/index';
import './index.css';


class Navigation extends Component {
  state = {
    open: false,
    fixed: false,
  };

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 100) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  }

  onOpen = ({ target }) => {
    const { open } = this.state;
    if (this.toggleButtonNode.current.contains(target)) {
      if (open) {
        this.setState({ open: false });
        window.removeEventListener('click', this.onOpen);
        return open;
      }
      this.setState({ open: true });
      return open;
    }
    this.setState({ open: false });
    window.removeEventListener('click', this.onOpen);
    return open;
  };

  onToggleMenu = () => window.addEventListener('click', this.onOpen);

  onClick = (e, url) => {
    e.preventDefault();
    const scrollValue = document.getElementById(url).offsetTop;
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: ((scrollValue - 53) || 0),
    });
  }

  toggleButtonNode = React.createRef();

  render() {
    const { activeSection } = this.props;
    const { fixed, open } = this.state;
    const { menuItems } = content;

    return (
      <div className="Navigation" data-fixed={fixed}>
        <div className="navigation-container wrapper">
          <div className="Logo">
            <h2>{content.companyName}</h2>
          </div>
          <ul className="NavigationMenu" data-open={open}>
            {menuItems.map(({ name, url }) => (
              <a href="" onClick={e => this.onClick(e, url)} className={`menu-item ${activeSection === url && 'active'}`} key={name}>
                <li>{name}</li>
              </a>
            ))}
          </ul>
          <ToggleMenu
            fixed={fixed}
            open={open}
            onToggleMenu={this.onToggleMenu}
            ref={this.toggleButtonNode}
          />
          <BottomArrow fixed={fixed} />
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
