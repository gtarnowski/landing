import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

// Components
import ToggleMenu from "../ToggleMenu";
import BottomArrow from "../BottomArrow";
import DropDownMenu from "../DropDownMenu";

// Other
import tankmorWhite from "../../content/img/tankmorWhite.png";
import content from "../../content/index";
import "./index.css";

class Navigation extends Component {
  state = {
    open: false,
    fixed: false
  };

  componentWillMount() {
    window.addEventListener("scroll", this.onScroll);
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
        window.removeEventListener("click", this.onOpen);
        return open;
      }
      this.setState({ open: true });
      return open;
    }
    this.setState({ open: false });
    window.removeEventListener("click", this.onOpen);
    return open;
  };

  onToggleMenu = () => window.addEventListener("click", this.onOpen);

  toggleButtonNode = React.createRef();

  isActive = url => {
    const {
      location: { pathname }
    } = this.props;
    if (!url) return false;
    if (url === "/") {
      return !!(url === pathname);
    }
    return !!pathname.match(url);
  };

  render() {
    const {
      isSubPage,
      location: { pathname }
    } = this.props;
    const { fixed, open } = this.state;
    const { menuItems } = content;
    return (
      <div
        className="Navigation"
        data-fixed={fixed || isSubPage}
        data-sub-page={isSubPage}
      >
        <div className="navigation-container wrapper">
          <Link to={"/"} className="Logo">
            <img src={tankmorWhite} alt="Tankmor logo" />
          </Link>
          <ul className="NavigationMenu" data-open={open}>
            {menuItems.map(
              ({ name, url, children }) =>
                children ? (
                  <div
                    className={`menu-item ${this.isActive(url) &&
                      "active"} ${children && "menu-drop-down"}`}
                    key={name}
                  >
                    <li>{name}</li>
                    {children &&
                      children.length > 0 && <DropDownMenu items={children} />}
                  </div>
                ) : (
                  <Link
                    to={`${url}`}
                    className={`menu-item ${this.isActive(url) &&
                      "active"} ${children && "menu-drop-down"}`}
                    key={name}
                  >
                    <li>{name}</li>
                    {console.log(pathname.match(url), url)}
                    {children &&
                      children.length > 0 && <DropDownMenu items={children} />}
                  </Link>
                )
            )}
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
