import React from 'react';
import './index.css';

const Header = () => (
  <div className="Header container">
    <div className="welcome-title wrapper">
      <h1>Company Name</h1>
      <small>Some description about company</small>
    </div>
    <div className="welcome-button wrapper">
      <button>See Details</button>
    </div>
  </div>
);

export default Header;
