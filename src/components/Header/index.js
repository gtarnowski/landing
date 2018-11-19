import React from 'react';
import './index.css';
import content from '../../content/index'

const Header = () => (
  <div className="Header container">
    <div className="welcome-title wrapper">
      <h1>{content.companyName}</h1>
      <small>{content.companyDescription}</small>
    </div>
    <div className="welcome-button wrapper">
      <button className="Button">See Details</button>
    </div>
  </div>
);

export default Header;
