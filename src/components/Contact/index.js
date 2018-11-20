import React from 'react';

import Title from '../Title';
import Form from '../Form';
import ContactIcons from './ContactIcons';
import content from '../../content/index';
import './index.css';

const Contact = () => {
  const { phone, fullAddress: { city, state } } = content.companyDetails
  return (
    <div className="Contact">
      <Title title="Contact" />
      <div className="content">
        <div className="contact-details">
          <h3>
            Contact Us For A <strong>Free Consultation</strong>
          </h3>
          <small>
            {`Call our office at ${city}, ${state} ${phone}. Or send us an email through our online contact form`}
          </small>

          <ContactIcons {...content.companyDetails} horizontal />
        </div>
        <Form />
      </div>
    </div>
  )
};

export default Contact;
