import React, { Component } from 'react';
import ToggleMenu from '../ToggleMenu';
import BottomArrow from '../BottomArrow';
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

  toggleButtonNode = React.createRef();

  render() {
    const { fixed, open } = this.state
    return (
      <div className="Navigation" data-fixed={fixed}>
        <div className="navigation-container wrapper">
          <div className="Logo">
            <h2>LOGOTYPE</h2>
          </div>
          <ul className="NavigationMenu" data-open={open}>
            <a href="#" className="menu-item active">
              <li>Products</li>
            </a>
            <a href="#" className="menu-item">
              <li>Services</li>
            </a>
            <a href="#" className="menu-item">
              <li>About</li>
            </a>
            <a href="#" className="menu-item">
              <li>Contact</li>
            </a>
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

export default Navigation;
