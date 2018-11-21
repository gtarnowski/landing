import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './index.css';

const DropDownMenu = ({ items, location: { pathname } }) => (
  <div className="DropDownMenu">
    {items.map(({ name, url }) => (
      <Link to={url} key={url} className={url === pathname ? 'active' : ' '} onClick={e => e.stopPropagation()}>
        <li>{name}</li>
      </Link>
    ))}
  </div>
);

DropDownMenu.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(DropDownMenu);
