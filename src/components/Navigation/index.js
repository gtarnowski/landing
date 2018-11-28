import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

// Components
import ToggleMenu from '../ToggleMenu';
import BottomArrow from '../BottomArrow';
import DropDownMenu from '../DropDownMenu';

// Other
import tankmorWhite from '../../content/tankmorWhite.png';
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
    if (offset >= 100 && this.state.fixed === false) {
      this.setState({ fixed: true });
    } else if (offset < 100 && this.state.fixed === true) {
      this.setState({ fixed: false });
    }
  };

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

  onLogoClick = () => {
    this.props.history.push('/');
      window.scroll({
          behavior: 'smooth',
          left: 0,
          top: 0,
      });
  };

  toggleButtonNode = React.createRef();

  render() {
    const { activeSection, isSubPage } = this.props;
    const { fixed, open } = this.state;
    const { menuItems } = content;

    return (
      <div className="Navigation" data-fixed={fixed || isSubPage} data-sub-page={isSubPage}>
        <div className="navigation-container wrapper">
          <div className="Logo" onClick={this.onLogoClick}>
            <img src={tankmorWhite} alt="Tankmor logo" />
          </div>
          <ul className="NavigationMenu" data-open={open}>
            {menuItems.map(({ name, url, children }) => children ? (
              <div className={`menu-item ${activeSection === url && 'active'} ${children && 'menu-drop-down'}`} key={name}>
                <li>{name}</li>
                {children && children.length > 0 && (
                  <DropDownMenu items={children} />
                )}
              </div>
            ) : (
              <Link
                  to={`${url}`}
                  className={`menu-item ${activeSection === url && 'active'} ${children && 'menu-drop-down'}`}
                  key={name}
              >
                <li>{name}</li>
                {children && children.length > 0 && (
                  <DropDownMenu items={children} />
                )}
              </Link>
            ))}
          </ul>
          <ToggleMenu
            fixed={fixed || isSubPage}
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
