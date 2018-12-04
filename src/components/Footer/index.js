import React from 'react';
import content from '../../content/index';
import './index.css';

const Footer = () => (
  <div className="Footer">
    <div className="content">
      &copy; Copyright
      {' '}
      <strong>{content.companyName}</strong>
      {' '}
      2018. All rights reserved.
    </div>
  </div>
);

export default Footer;
