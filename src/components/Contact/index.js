import React from 'react';

import Title from '../Title';
import Form from '../Form';
import Map from '../Map';
import ContactIcons from './ContactIcons'
import content from '../../content/index'
import './index.css';
const Contact = () => (
  <div className="Contact">
    <Title title="Contact" />
    <ContactIcons {...content.companyDetails} />
    <Map />
    <Form />
  </div>
);

export default Contact;
